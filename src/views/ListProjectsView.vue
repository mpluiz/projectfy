<script>
import VSwitchButton from '@/components/VSwitchButton.vue';
import VContent from '@/components/VContent.vue';
import VCard from '@/components/VCard.vue';
import VTypography from '@/components/VTypography.vue';

export default {
  name: 'ListProjects',
  components: {
    VTypography, VSwitchButton, VContent, VCard,
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
  }
}
</style>
