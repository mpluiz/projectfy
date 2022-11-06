import { shallowMount, createLocalVue } from '@vue/test-utils';
import { createPinia, PiniaVuePlugin, setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';
import { useProjectStore } from '@/stores/project';
import ListProjectsView from '@/views/ListProjectsView.vue';

const localVue = createLocalVue();
localVue.use(PiniaVuePlugin);

const projectMock = {
  name: 'valid_name',
  users: ['valid_user'],
  details: 'valid_details',
  startDate: 'valid_start_date',
  endDate: 'valid_start_date',
};

function makeComponent(options) {
  return shallowMount(ListProjectsView, { localVue, pinia: createTestingPinia(), ...options });
}

describe('ListProjectsView', () => {
  beforeEach(() => setActivePinia(createPinia()));

  it('should render component correctly', () => {
    const wrapper = makeComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render component with default data', () => {
    const wrapper = makeComponent();
    expect(wrapper.find('vtable-stub').attributes('headers')).toContain('Name,User(s)');
  });

  it('should render component with table', () => {
    const wrapper = makeComponent();
    const table = wrapper.find('vtable-stub');

    expect(table.exists()).toBe(true);
  });

  it('should render component with 0 projects', () => {
    const wrapper = makeComponent();
    const table = wrapper.find('vtable-stub');

    expect(table.attributes('projects')).toBe('');
  });

  it('should render component with one projects', () => {
    const store = useProjectStore();
    store.addProject(projectMock);
    const wrapper = makeComponent();

    const table = wrapper.find('vtable-stub');

    expect(table.attributes('projects')).not.toBe('');
  });
});
