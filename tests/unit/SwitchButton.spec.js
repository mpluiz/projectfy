import { shallowMount, createLocalVue } from '@vue/test-utils';
import router from '@/router';
import SwitchButton from '@/components/SwitchButton.vue';

const localVue = createLocalVue();

function makeComponent(options) {
  return shallowMount(SwitchButton, { localVue, ...options });
}

const homeButtonSelector = '[data-testId="switch-button-register"]';
const listButtonSelector = '[data-testId="switch-button-list"]';

describe('SwitchButton', () => {
  it('should render component correctly', () => {
    const wrapper = makeComponent({ router });
    expect(wrapper.exists()).toBe(true);
  });

  it('should render component with buttons', () => {
    const wrapper = makeComponent({ router });

    const homeButton = wrapper.find(homeButtonSelector);
    const listButton = wrapper.find(listButtonSelector);

    expect(homeButton.exists()).toBe(true);
    expect(listButton.exists()).toBe(true);
  });

  it('should render component with register button active', () => {
    const wrapper = makeComponent({ router });

    const button = wrapper.find(homeButtonSelector);

    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('register');
    expect(button.classes()).toContain('c-switch__button--active');
  });

  it('should render component with list button active', () => {
    router.push('/list-projects');
    const wrapper = makeComponent({ router });

    const button = wrapper.find(listButtonSelector);

    expect(button.exists()).toBe(true);
    expect(button.text()).toBe('list');
    expect(button.classes()).toContain('c-switch__button--active');
  });
});
