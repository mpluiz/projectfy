<script>
export default {
  name: 'VInput',
  props: {
    value: {
      type: undefined,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
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
    :name="name"
    :required="required"
    @input="handleInput"
    outlined
  ></v-text-field>
</template>
