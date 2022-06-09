<script>
import VSwitchButton from '@/components/VSwitchButton.vue';
import VContent from '@/components/VContent.vue';
import VCard from '@/components/VCard.vue';
import VTypography from '@/components/VTypography.vue';
import VTable from '@/components/VTable.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ListProjects',
  components: {
    VTable,
    VTypography,
    VSwitchButton,
    VContent,
    VCard,
  },

  data() {
    return {
      headers: ['Name', 'User(s)'],
    };
  },

  computed: {
    ...mapGetters(['projects']),
  },
};
</script>

<template>
  <VContent>
    <VCard>
      <div class="list-projects">
        <div class="header">
          <VTypography variant="title" weight="semi-bold">List</VTypography>
          <VSwitchButton />
        </div>

        <VTable :headers="headers" :projects="projects" />
      </div>
    </VCard>
  </VContent>
</template>

<style scoped lang="scss">
.list-projects {

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-xs);
  }

}
</style>
