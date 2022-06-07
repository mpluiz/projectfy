<script>
export default {
  name: 'DateInput',
  props: {
    id: {
      type: String,
    },
    value: {
      type: undefined,
    },
    label: {
      type: String,
      required: true,
    },
    min: {
      type: String,
    },
  },
  data() {
    return {
      menu: false,
      currentValue: this.value,
    };
  },

  methods: {
    handleInput(event) {
      this.$emit('input', event);
    },

    handleDatePicker(event) {
      this.menu = false;
      this.$emit('input', event);
    },
  },
};
</script>

<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :id="id"
        :data-testId="id"
        :label="label"
        readonly
        outlined
        v-bind="attrs"
        v-on="on"
        :value="value"
        @input="handleInput"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="currentValue"
      @input="handleDatePicker"
      :min="min"
      no-title
    ></v-date-picker>
  </v-menu>
</template>
