import { shallowMount } from '@vue/test-utils';
import VCard from '@/components/VCard.vue';

function makeComponent(options) {
  return shallowMount(VCard, { ...options });
}

describe('VCard', () => {
  it('should render component correctly', () => {
    const wrapper = makeComponent();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('c-appcard');
  });

  it('should render component with correct children', () => {
    const wrapper = makeComponent({
      slots: { default: '<div id="valid-id">valid_param</div>' },
    });

    expect(wrapper.text()).toContain('valid_param');
    expect(wrapper.find('#valid-id').exists()).toBe(true);
  });
});
