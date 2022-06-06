<script>
export default {
  name: 'TextField',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: String,
    hint: String,
  },
};
</script>

<template>
  <v-text-field
    :label="label"
    :value="value"
    :hint="hint"
    outlined
  ></v-text-field>
</template>

<style scoped lang="scss">

</style>
