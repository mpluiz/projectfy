<script>
export default {
  name: 'AppCard',
};
</script>

<template>
  <div class="c-appcard">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.c-appcard {
  width: 68%;
  height: 60%;
  padding: var(--space-xs);
  background: var(--color-bright);
  box-shadow: 0 var(--space-quark) var(--space-xs) rgb(0 0 0 / 8%);
  border-radius: var(--space-sm);
}
</style>
