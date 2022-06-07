import { shallowMount } from '@vue/test-utils';
import AppTypography from '@/components/AppTypography.vue';

function makeComponent(options) {
  return shallowMount(AppTypography, { ...options });
}

describe('AppTypography', () => {
  it('should render component correctly', () => {
    const wrapper = makeComponent();

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('c-typography');
  });

  it('should render component with correct children', () => {
    const wrapper = makeComponent({ slots: { default: 'valid_param' } });

    expect(wrapper.html()).toContain('valid_param');
  });

  it('should render component with default props', () => {
    const wrapper = makeComponent();

    expect(wrapper.classes()).toContain('c-typography');
    expect(wrapper.classes()).toContain('c-typography--font-size-body');
    expect(wrapper.classes()).toContain('c-typography--font-weight-regular');
    expect(wrapper.classes()).toContain('c-typography--font-color-dark');
  });

  it('should render component with custom props', () => {
    const wrapper = makeComponent({
      propsData: {
        variant: 'title', weight: 'bold', color: 'primary',
      },
    });

    expect(wrapper.classes()).toContain('c-typography--font-size-title');
    expect(wrapper.classes()).toContain('c-typography--font-weight-bold');
    expect(wrapper.classes()).toContain('c-typography--font-color-primary');
  });
});
