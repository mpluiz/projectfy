<script>
export default {
  name: 'AppTypography',
  props: {
    variant: {
      type: String,
      default: 'body',
    },
    weight: {
      type: String,
      default: 'regular',
    },
    color: {
      type: String,
      default: 'dark',
    },
  },
  computed: {
    handleClass() {
      return [
        `c-typography__font-size--${this.variant}`,
        `c-typography__font-weight--${this.weight}`,
        `c-typography__font-color--${this.color}`,
      ];
    },

  },
};
</script>

<template>
 <p
   class="c-typography"
   :class="handleClass"
 >
   <slot></slot>
 </p>
</template>

<style scoped lang="scss">
.c-typography {
  font-family: var(--font-family-primary), var(--font-family-secondary);
  padding: 0;
  margin: 0;

  &__font-size {
    &--title {
      font-size: var(--font-size-display);
    }

    &--body {
      font-size: var(--font-size-lg);
    }

    &--body-small {
      font-size: var(--font-size-md);
    }
  }

  &__font-weight {
    &--regular {
      font-weight: var(--font-weight-regular);
    }

    &--medium {
      font-weight: var(--font-weight-medium);
    }

    &--semi-bold {
      font-weight: var(--font-weight-semibold);
    }

    &--bold {
      font-weight: var(--font-weight-bold);
    }
  }

  &__font-color {
    &--primary {
      color: var(--color-primary);
    }

    &--secondary {
      color: var(--color-secondary);
    }

    &--bright {
      color: var(--color-bright);
    }

    &--dark {
      color: var(--color-dark);
    }
  }
}
</style>
