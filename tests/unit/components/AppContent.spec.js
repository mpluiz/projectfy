import { shallowMount } from '@vue/test-utils';
import AppContent from '@/components/AppContent.vue';

function makeComponent(options) {
  return shallowMount(AppContent, { ...options });
}

describe('AppContent', () => {
  it('should render component correctly', () => {
    const wrapper = makeComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render component with correct children', () => {
    const wrapper = makeComponent({
      slots: { default: '<div id="valid-id">valid_param</div>' },
    });

    expect(wrapper.text()).toContain('valid_param');
    expect(wrapper.find('#valid-id').exists()).toBe(true);
  });

  it('should render component with element avatar left', () => {
    const wrapper = makeComponent();

    expect(wrapper.find('.c-avatar--left').exists()).toBe(true);
  });

  it('should render component with element avatar right', () => {
    const wrapper = makeComponent();

    expect(wrapper.find('.c-avatar--right').exists()).toBe(true);
  });
});
