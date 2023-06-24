enum RequetMethod {
    DELETE = 'DELETE',
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
}

class BaseApiService {
    baseUrl = "/api/";

    async call(url: string, config = {}) {
        try {
            const response = await fetch(this.baseUrl + url, config);
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            const content = await response.json();
            if (!content) return response.blob();
            return content;
        } catch (err) {
            this.handleErrors(err);
        }
    }

    handleErrors(err: any) {
        // Note: here you may want to add your errors handling
        console.error({ message: "Errors is handled here", err });
    }
}

export type itemAttribute = {
    item_name: string,
    stock_quantity: number,
    unit_price: number,
}

class ItemsApiService extends BaseApiService {
    async create(attr: itemAttribute) {
        return await super.call('item', {
            method: RequetMethod.POST,
            body: JSON.stringify(attr),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

// class ReadOnlyApiService extends BaseApiService {
//     constructor(resource: any) {
//         super(resource);
//     }
//     async fetch(config = {}) {
//         try {
//             const response = await fetch(this.getUrl(), config);
//             return await response.json();
//         } catch (err) {
//             this.handleErrors(err);
//         }
//     }
//     async get(id: string | undefined) {
//         try {
//             if (!id) throw Error("Id is not provided");
//             const response = await fetch(this.getUrl(id));
//             return await response.json();
//         } catch (err) {
//             this.handleErrors(err);
//         }
//     }
// }

// class ModelApiService extends ReadOnlyApiService {
//     constructor(resource: any) {
//         super(resource);
//     }
//     async post(data = {}) {
//         try {
//             const response = await fetch(this.getUrl(), {
//                 method: "POST",
//                 body: JSON.stringify(data)
//             });
//             const { id } = await response.json();
//             return id;
//         } catch (err) {
//             this.handleErrors(err);
//         }
//     }
//     async put(id: string | undefined, data = {}) {
//         if (!id) throw Error("Id is not provided");
//         try {
//             const response = await fetch(this.getUrl(id), {
//                 method: "PUT",
//                 body: JSON.stringify(data)
//             });
//             const { id: responseId } = await response.json();
//             return responseId;
//         } catch (err) {
//             this.handleErrors(err);
//         }
//     }
//     async delete(id: string | undefined) {
//         if (!id) throw Error("Id is not provided");
//         try {
//             await fetch(this.getUrl(id), {
//                 method: "DELETE"
//             });
//             return true;
//         } catch (err) {
//             this.handleErrors(err);
//         }
//     }
// }

// class UsersApiService extends ReadOnlyApiService {
//     constructor() {
//         super("users");
//     }
// }

// class PostsApiService extends ModelApiService {
//     constructor() {
//         super("posts");
//     }
// }

// class AlbumsApiService extends ModelApiService {
//     constructor() {
//         super("albums");
//     }
//     async uploadImage() {
//         /*
//         Here you create you images uploading logic
//         Unfortunately, jsonplaceholder don't provide url to upload files
//          */
//         console.log({ message: "Image has been uploaded successfully!" });
//         return true;
//     }

//     async triggerError() {
//         try {
//             throw Error("This error is triggered and handled by api module");
//         } catch (err) {
//             this.handleErrors(err);
//         }
//     }
// }

export const $ypis = {
    items: new ItemsApiService(),
};
