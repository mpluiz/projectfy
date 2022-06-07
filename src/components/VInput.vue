<script>
export default {
  name: 'VInput',
  props: {
    value: {
      type: undefined,
    },
    label: {
      type: String,
      required: true,
    },
  },

  methods: {
    handleInput(event) {
      this.$emit('input', event);
    },
  },
};
</script>

<template>
  <v-text-field
    :label="label"
    :value="value"
    @input="handleInput"
    outlined
  ></v-text-field>
</template>
