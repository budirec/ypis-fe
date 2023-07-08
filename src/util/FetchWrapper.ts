export type QueryStringType = Record<string, string | string[]>;
export interface FetchOptions extends RequestInit {
    method?: string;
    qs?: QueryStringType;
    json?: Record<string, any>;
    retry?: number;
    cooldown?: number;
};
export const HTTP_DELETE = 'DELETE';
export const HTTP_GET = 'GET';
export const HTTP_POST = 'POST';
export const HTTP_PUT = 'PUT';

function getSearchParams(qs: QueryStringType) {
    const params = new URLSearchParams();

    Object.entries(qs).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((item) => params.append(key, item));
        } else {
            params.append(key, value);
        }
    });
    return params;
}

async function fetchWrapper(url: string, options: FetchOptions = {}): Promise<any> {
    const { method = 'GET', qs, json, retry = 0, cooldown = 1000, ...otherOptions } = options;

    // Prepare query string
    let queryString = '';
    if (qs) {
        queryString = getSearchParams(qs).toString();
    }

    // Prepare headers and body for JSON payload
    const headers: Record<string, string> = {};
    let body: string | undefined;

    if (json) {
        headers['Content-Type'] = 'application/json';
        body = JSON.stringify(json);
    }

    try {
        for (let attempt = 0; attempt <= retry; attempt++) {
            try {
                const response = await fetch(`${url}${queryString ? `?${queryString}` : ''}`, {
                    method,
                    headers,
                    body,
                    ...otherOptions,
                });

                if (!response.ok) {
                    if (attempt === retry) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    // Retryable error, wait for cooldown period before retrying
                    await new Promise<void>((resolve) => setTimeout(resolve, cooldown));
                    continue;
                }

                const contentType = response.headers.get('content-type');

                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    return { data, headers: response.headers };
                } else if (contentType && contentType.includes('text/plain')) {
                    const data = await response.text();
                    return { data, headers: response.headers };
                } else {
                    return response;
                }
            } catch (error: any) {
                if (attempt === retry) {
                    throw new Error(`Network error: ${error.message}`);
                }

                // Retryable error, wait for cooldown period before retrying
                await new Promise<void>((resolve) => setTimeout(resolve, cooldown));
            }
        }
    } catch (error: any) {
        throw new Error(`Exceeded maximum retries: ${error.message}`);
    }
}

export {
    fetchWrapper,
}