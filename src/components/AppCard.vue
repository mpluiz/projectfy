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
  padding: 32px;
  background: #FFFFFF;
  box-shadow: 0 4px 35px rgb(0 0 0 / 8%);
  border-radius: 40px;
}
</style>
