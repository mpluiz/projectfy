import { shallowMount } from '@vue/test-utils';
import VTable from '@/components/VTable.vue';

const headers = ['valid_header', 'valid_header1'];
const projects = [{ name: 'valid_name', users: ['valid_user'] }];

function makeComponent(options) {
  return shallowMount(VTable, {
    propsData: {
      headers,
      projects,
    },
    ...options,
  });
}

describe('VTable', () => {
  it('should render component correctly', () => {
    const wrapper = makeComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render component with custom headers', () => {
    const wrapper = makeComponent({
      propsData: {
        headers: ['valid_custom_header', 'another_valid_custom_header'],
        projects,
      },
    });

    expect(wrapper.html()).toContain('valid_custom_header');
    expect(wrapper.html()).toContain('another_valid_custom_header');
  });

  it('should render component with custom items', () => {
    const wrapper = makeComponent({
      propsData: {
        headers,
        projects: [{ name: 'valid_custom_name', users: ['valid_custom_user', 'another_valid_custom_user'] }],
      },
    });

    expect(wrapper.html()).toContain('valid_custom_name');
    expect(wrapper.html()).toContain('valid_custom_user');
    expect(wrapper.html()).toContain('another_valid_custom_user');
  });
});
