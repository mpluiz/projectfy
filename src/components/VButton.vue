<script>
import VTypography from '@/components/VTypography.vue';
import Loading from '@/assets/loading.svg';

export default {
  name: 'VButton',
  components: { VTypography },
  props: {
    type: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: 'primary',
    },
    large: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      contentLoading: Loading,
    };
  },

  computed: {
    handleClass() {
      return [
        'c-button',
        `c-button--${this.variant}`,
        { 'c-button--large': this.large },
        { 'c-button--disabled': this.disabled },
        { 'c-button--full-width': this.fullWidth },
      ];
    },
  },
};
</script>

<template>
  <button
   :class="handleClass"
   :type="type"
   :disabled="disabled"
  >
    <VTypography
      weight="semi-bold"
      :variant="large ? 'body' : 'body-small'"
      :color="variant === 'default' ? 'dark' : 'bright'"
    >
      <img v-if="loading" class="c-button__loading" :src="contentLoading" alt="loading" />
      <slot v-if="!loading"></slot>
    </VTypography>
  </button>
</template>

<style scoped lang="scss">
.c-button {
  $self: &;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: var(--space-xl);
  min-height: var(--space-sm);
  background: var(--color-primary);
  border-radius: var(--space-nano);
  box-shadow: 0 var(--space-quark) var(--space-xxxs) rgba(119, 147, 65, 0.3);
  opacity: 1;
  transition: opacity 0.3s;

  &:active:not(&--disabled) {
    opacity: 0.7;
    transition: opacity 0s ease-in;
  }

  &__loading {
    height: var(--space-xxs);
  }

  &--primary {
    background: var(--color-primary);
  }

  &--secondary {
    background: var(--color-secondary);
  }

  &--default {
    background: var(--color-default);
  }

  &--success {
    background: var(--color-success);
  }

  &--warning {
    background: var(--color-warning);
  }

  &--danger {
    background: var(--color-danger);
  }

  &--large {
    height: var(--space-lg);

    #{$self}__loading {
      height: var(--space-sm);
    }
  }

  &--disabled {
    background: var(--color-secondary);
  }

  &--full-width {
    width: 100%;
  }
}
</style>
