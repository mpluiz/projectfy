<script>
import VTypography from '@/components/VTypography.vue';

export default {
  name: 'VTable',
  components: { VTypography },
  props: {
    headers: {
      type: Array,
      required: true,
    },
    projects: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
    },
  },
};
</script>

<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th
            class="text-left"
            v-for="header in headers"
            :key="header"
          >
            <VTypography variant="body" weight="medium">
              {{ header }}
            </VTypography>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(project, index) in projects"
          :key="index"
        >
          <td>
            <VTypography variant="body-small">
              {{ project.name }}
            </VTypography>
          </td>
          <td>
            <v-chip
              class="c-chip--margin-right"
              v-for="(user, index) in project.users"
              :key="index"
              color="#8C75E1FF"
              small
              outlined
            >
              {{ user }}
            </v-chip>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<style scoped lang="scss">
.c-chip--margin-right {
  margin-right: var(--space-quark);
}
</style>
