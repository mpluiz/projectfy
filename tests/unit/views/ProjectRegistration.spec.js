import { shallowMount, createLocalVue } from '@vue/test-utils';
import { PiniaVuePlugin } from 'pinia';
import router from '@/router';
import ProjectRegistrationView from '@/views/ProjectRegistrationView.vue';
import UserDataSourceAPI from '@/data/UserDataSourceAPI';
import { createTestingPinia } from '@pinia/testing';
import UserAPIStub from '../data/mocks/UserAPI';

const localVue = createLocalVue();
localVue.use(PiniaVuePlugin);

function makeAPI() {
  const api = new UserAPIStub(1);
  return new UserDataSourceAPI(api);
}

function makeComponent(options) {
  return shallowMount(ProjectRegistrationView, {
    localVue,
    router,
    pinia: createTestingPinia(),
    data() {
      return {
        userDataSource: makeAPI(),
        project: {
          name: '',
          users: [],
          details: '',
          startDate: '',
          endDate: '',
        },
        notification: {
          open: false,
          timeout: 2500,
          color: '',
          text: '',
        },
      };
    },
    ...options,
  });
}

describe('ProjectRegistrationView', () => {
  it('should render component correctly', () => {
    const wrapper = makeComponent();

    expect(wrapper.exists()).toBe(true);
  });

  it('should render all form correctly', () => {
    const wrapper = makeComponent();

    const form = wrapper.find('form');
    const nameInput = wrapper.get('#name');
    const usersInput = wrapper.get('#users');
    const detailsInput = wrapper.get('#project-details');
    const startDateInput = wrapper.get('#start-date');
    const endDateInput = wrapper.get('#end-date');

    expect(form.exists()).toBe(true);
    expect(nameInput.exists()).toBe(true);
    expect(usersInput.exists()).toBe(true);
    expect(detailsInput.exists()).toBe(true);
    expect(startDateInput.exists()).toBe(true);
    expect(endDateInput.exists()).toBe(true);
  });

  it('should show warning when submitting empty name, user', async () => {
    const wrapper = makeComponent();

    await wrapper.find('form').trigger('submit.prevent');

    expect(wrapper.html()).toContain('Project Name and User is Required!');
  });
});
