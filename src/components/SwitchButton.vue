<script>
import AppTypography from '@/components/AppTypography.vue';

export default {
  name: 'SwitchButton',
  components: { AppTypography },
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
        <AppTypography
          variant="body-small"
          weight="medium"
          color="bright"
        >
          {{ route.label }}
        </AppTypography>
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
  height: 60px;
  background: #D0C4EE;
  border-radius: 33px;
  padding: 12px;

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    text-transform: capitalize;
    width: 160px;
    height: 40px;

    &--active {
      background: #8C75E1;
      border-radius: 33px;
    }
  }
}
</style>
