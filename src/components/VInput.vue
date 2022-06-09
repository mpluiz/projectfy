<script>
export default {
  name: 'VInput',
  props: {
    value: {
      type: undefined,
    },
    id: {
      type: String,
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
    :id="id"
    :required="required"
    @input="handleInput"
    outlined
  ></v-text-field>
</template>
