import { shallowMount } from '@vue/test-utils';
import VButton from '@/components/VButton.vue';

function makeComponent(options) {
  return shallowMount(VButton, {
    propsData: {
      type: 'button',
    },
    ...options,
  });
}

describe('VButton', () => {
  it('should render component correctly', () => {
    const wrapper = makeComponent();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('c-button');
  });

  it('should render component with correct children', () => {
    const wrapper = makeComponent({ slots: { default: 'valid_param' } });

    expect(wrapper.html()).toContain('valid_param');
  });

  it('should render component with correct default props', () => {
    const wrapper = makeComponent();

    expect(wrapper.classes()).toContain('c-button');
    expect(wrapper.classes()).toContain('c-button--primary');
  });

  it('should render component with submit type', () => {
    const wrapper = makeComponent({
      propsData: {
        type: 'submit',
      },
    });

    expect(wrapper.attributes('type')).toBe('submit');
  });

  it('should render component with fullWidth modifier', () => {
    const wrapper = makeComponent({
      propsData: {
        type: 'button',
        fullWidth: true,
      },
    });

    expect(wrapper.classes()).toContain('c-button--full-width');
  });

  it('should render component with the disabled attribute and modifier', () => {
    const wrapper = makeComponent({
      propsData: {
        type: 'button',
        disabled: true,
      },
    });

    expect(wrapper.attributes('disabled')).toBe('disabled');
    expect(wrapper.classes()).toContain('c-button--disabled');
  });

  it('should render component with the large modifier', () => {
    const wrapper = makeComponent({
      propsData: {
        type: 'button',
        large: true,
      },
    });

    expect(wrapper.classes()).toContain('c-button--large');
  });

  it('should render component with the loading mode', () => {
    const wrapper = makeComponent({
      propsData: {
        type: 'button',
        loading: true,
      },
    });

    const loadingElement = wrapper.find('.c-button__loading');

    expect(loadingElement.exists()).toBe(true);
  });
});
