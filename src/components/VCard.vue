<script>
export default {
  name: 'VCard',
};
</script>

<template>
  <div class="c-appcard">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.c-appcard {
  width: 70%;
  height: fit-content;
  min-height: 50%;
  padding: var(--space-md);
  background: var(--color-bright);
  box-shadow: 0 var(--space-quark) var(--space-xs) rgb(0 0 0 / 8%);
  border-radius: var(--space-sm);
  z-index: 1;
}
</style>
