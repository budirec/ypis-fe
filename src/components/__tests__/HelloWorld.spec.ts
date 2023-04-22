import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const msg = Math.random().toString(36).substring(2, 12);
    const wrapper = mount(HelloWorld, { props: { msg } });
    expect(wrapper.text()).toContain(msg);
  });
});
