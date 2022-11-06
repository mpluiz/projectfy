<script>
import UserDataSourceAPI from '@/data/UserDataSourceAPI';
import api from '@/config/axios';

import VSwitchButton from '@/components/VSwitchButton.vue';
import VContent from '@/components/VContent.vue';
import VCard from '@/components/VCard.vue';
import VTypography from '@/components/VTypography.vue';
import VButton from '@/components/VButton.vue';
import VDateInput from '@/components/VDateInput.vue';
import VInput from '@/components/VInput.vue';
import VMultiSelect from '@/components/VMultiSelect.vue';
import { useProjectStore } from '@/stores/project';

export default {
  name: 'ProjectRegistration',
  components: {
    VButton,
    VTypography,
    VSwitchButton,
    VContent,
    VCard,
    VDateInput,
    VInput,
    VMultiSelect,
  },

  data() {
    return {
      userDataSource: new UserDataSourceAPI(api),
      store: useProjectStore(),
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

  methods: {
    async handleSubmit() {
      if (!this.project.name || !this.project.users.length) {
        this.handleNotification({
          color: 'warning',
          text: 'Project Name and User is Required!',
        });

        return false;
      }

      this.store.addProject(this.project);
      return this.$router.push('/list-projects');
    },

    async searchUsers(param, isLoadingMore = false) {
      return this.userDataSource.search(param, isLoadingMore);
    },

    handleNotification(notification) {
      this.notification.open = true;
      this.notification.color = notification.color;
      this.notification.text = notification.text;
    },
  },
};
</script>

<template>
  <VContent>
    <VCard>
      <div class="project-registration">
        <div class="header">
          <VTypography variant="title" weight="semi-bold">Register</VTypography>
          <VSwitchButton />
        </div>

        <div class="content">
          <form v-on:submit.prevent="handleSubmit">
            <div>
              <VInput
                id="name"
                name="name"
                label="Project Name *"
                v-model="project.name"
              />

              <VMultiSelect
                label="User(s) *"
                id="users"
                name="users"
                v-model="project.users"
                :items="userDataSource.items"
                :hasMoreItems="userDataSource.hasNextPage"
                :loading="userDataSource.loading"
                :intersect="searchUsers"
                :searchInput="searchUsers"
              />

              <v-textarea
                id="project-details"
                name="project-details"
                label="Project Details"
                v-model="project.details"
                no-resize
                outlined
              ></v-textarea>

              <v-row>
                <v-col md="6">
                  <VDateInput
                    id="start-date"
                    name="start-date"
                    label="Start Date"
                    v-model="project.startDate"
                  />
                </v-col>

                <v-col md="6">
                  <VDateInput
                    id="end-date"
                    name="end-date"
                    label="End Date"
                    v-model="project.endDate"
                    :min="project.startDate"
                  />
                </v-col>
              </v-row>
            </div>

            <VButton type="submit" large fullWidth>Create</VButton>
          </form>
        </div>
      </div>
    </VCard>
    <v-snackbar
      v-model="notification.open"
      :timeout="notification.timeout"
      :color="notification.color"
      absolute
      top
      elevation="24"
    >
      {{ notification.text }}
    </v-snackbar>
  </VContent>
</template>

<style scoped lang="scss">
.project-registration {
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-xs);
  }

  .content {
    display: flex;
    flex-direction: column;
  }
}
</style>
