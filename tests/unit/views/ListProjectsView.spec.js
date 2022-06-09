import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Projects from '@/store/modules/projects';
import ListProjectsView from '@/views/ListProjectsView.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const projectMock = {
  name: 'valid_name',
  users: ['valid_user'],
  details: 'valid_details',
  startDate: 'valid_start_date',
  endDate: 'valid_start_date',
};

const store = new Vuex.Store({
  modules: { Projects },
});

function makeComponent(options) {
  return shallowMount(ListProjectsView, { localVue, store, ...options });
}

describe('ListProjectsView', () => {
  it('should render component correctly', () => {
    const wrapper = makeComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render component with default data', () => {
    const wrapper = makeComponent();

    expect(wrapper.vm.$data).toEqual({ headers: ['Name', 'User(s)'] });
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
    store.commit('addProject', projectMock);
    const wrapper = makeComponent();

    const table = wrapper.find('vtable-stub');

    expect(table.attributes('projects')).not.toBe('');
  });
});
