<script>
export default {
  name: 'AppTypography',
};
</script>

<template>
 <p class="c-typography">
   <slot></slot>
 </p>
</template>

<style scoped lang="scss">
.c-typography {
  font-family: Poppins, Roboto, sans-serif;
  margin: 0;
}
</style>
