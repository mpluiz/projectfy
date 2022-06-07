import { shallowMount } from '@vue/test-utils';
import VInput from '@/components/VInput.vue';

function makeComponent(options) {
  return shallowMount(VInput, {
    propsData: {
      label: 'valid_label',
    },
    ...options,
  });
}

describe('VInput', () => {
  it('should render component correctly', () => {
    const wrapper = makeComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render component with custom label', () => {
    const wrapper = makeComponent({
      propsData: {
        label: 'valid_custom_label',
      },
    });

    expect(wrapper.attributes('label')).toBe('valid_custom_label');
  });

  it('should render component with start value correct', () => {
    const wrapper = makeComponent({
      propsData: {
        label: 'valid_label',
        value: 'valid_value',
      },
    });

    expect(wrapper.attributes('value')).toBe('valid_value');
  });
});
