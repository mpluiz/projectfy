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
      project: {
        name: '',
        users: [],
        details: '',
        startDate: '',
        endDate: '',
      },
    };
  },

  methods: {
    async handleSubmit() {
      console.log(this.project);
    },

    async searchUsers(param, isLoadingMore = false) {
      return this.userDataSource.search(param, isLoadingMore);
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
              <VInput label="Project Name *" v-model="project.name" required />
              <VMultiSelect
                label="User(s) *"
                name="users"
                v-model="project.users"
                :items="userDataSource.items"
                :hasMoreItems="userDataSource.hasNextPage"
                :loading="userDataSource.loading"
                :intersect="searchUsers"
                :searchInput="searchUsers"
              />

              <v-textarea
                name="project-details"
                label="Project Details"
                v-model="project.details"
                no-resize
                outlined
              ></v-textarea>

              <v-row>
                <v-col md="6">
                  <VDateInput label="Start Date" v-model="project.startDate" />
                </v-col>

                <v-col md="6">
                  <VDateInput label="End Date" v-model="project.endDate" :min="project.startDate" />
                </v-col>
              </v-row>
            </div>

            <VButton type="submit" large fullWidth>Create</VButton>
          </form>
        </div>
      </div>
    </VCard>
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
