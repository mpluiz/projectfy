<script>
import VTypography from '@/components/VTypography.vue';

export default {
  name: 'VSwitchButton',
  components: { VTypography },
  data() {
    return {
      routes: [
        { label: 'register', path: '/project-registration' },
        { label: 'list', path: '/list-projects' },
      ],
    };
  },
  methods: {
    isActive(param) {
      return this.$route.path === param;
    },
  },
};
</script>

<template>
  <div class="c-switch">
    <template v-for="route in routes">
      <router-link
        :key="route.label"
        :id="'switch-button-' + route.label"
        :data-testId="'switch-button-' + route.label"
        :class="{'c-switch__button--active': isActive(route.path) }"
        class="c-switch__button"
        :to="route.path"
      >
        <VTypography
          variant="body-small"
          weight="medium"
          color="bright"
        >
          {{ route.label }}
        </VTypography>
      </router-link>
    </template>
  </div>
</template>

<style scoped lang="scss">
.c-switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  height: var(--space-xl);
  background: var(--color-secondary);
  border-radius: var(--space-xs);
  padding: var(--space-xxxs);

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-bright);
    text-decoration: none;
    text-transform: capitalize;
    width: var(--space-huge);
    height: var(--space-sm);

    &--active {
      background: var(--color-primary);
      border-radius: var(--space-xs);
    }
  }
}
</style>
