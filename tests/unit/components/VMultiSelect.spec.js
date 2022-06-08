import { shallowMount } from '@vue/test-utils';
import VMultiSelect from '@/components/VMultiSelect.vue';

const itemsMock = ['valid_item1', 'valid_item2', 'valid_item3'];

function makeComponent(options) {
  return shallowMount(VMultiSelect, {
    propsData: {
      items: itemsMock,
      label: 'valid_label',
    },
    ...options,
  });
}

describe('VMultiSelect', () => {
  it('should render component correctly', () => {
    const wrapper = makeComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render no-data slot when have not searched for items', () => {
    const wrapper = makeComponent();

    expect(wrapper.text()).toContain('Search for');
  });

  it('should render append-item when have items and hasMoreItems', () => {
    const wrapper = makeComponent({
      propsData: {
        items: itemsMock,
        label: 'valid_label',
        intersect: jest.fn(),
        hasMoreItems: true,
      },
    });

    expect(wrapper.html()).toContain('Loading more');
  });

  it('should render component with loading attribute', () => {
    const wrapper = makeComponent({
      propsData: {
        items: itemsMock,
        label: 'valid_label',
        loading: true,
      },
    });

    expect(wrapper.attributes('loading')).toBe('true');
  });

  it('should render component with default attributes', () => {
    const wrapper = makeComponent();

    expect(wrapper.attributes('label')).toBe('valid_label');
    expect(wrapper.attributes('clearable')).toBe('true');
    expect(wrapper.attributes('chips')).toBe('true');
    expect(wrapper.attributes('multiple')).toBe('true');
    expect(wrapper.attributes('items')).toEqual(itemsMock.join());
  });
});
