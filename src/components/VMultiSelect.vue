<script>
import { ObserveVisibility } from 'vue-observe-visibility';
import { debounce } from 'lodash';

import VTypography from '@/components/VTypography.vue';

export default {
  name: 'VMultiSelect.vue',
  components: { VTypography },
  directives: { ObserveVisibility },
  props: {
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: undefined,
    },
    intersect: {
      type: Function,
    },
    searchInput: {
      type: Function,
    },
    hasMoreItems: {
      type: Boolean,
    },
    label: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
    },
  },

  data() {
    return {
      input: '',
      timer: 1,
    };
  },

  methods: {
    handleInput(event) {
      this.$emit('input', event);
    },

    async handleOnSearchInput(param) {
      return this.searchInput(param);
    },

    async handleOnIntersect(isVisible) {
      if (isVisible && this.input) return this.intersect(this.input, true);
      return false;
    },

    inputDelay: debounce(async function (param) {
      return this.handleOnSearchInput(param);
    }, 400),
  },

  watch: {
    async input(param) {
      if (param && this.searchInput) return this.inputDelay(param);
      return false;
    },
  },
};
</script>

<template>
  <v-autocomplete
    :items="items"
    :label="label"
    :value="value"
    :id="id"
    :data-testId="id"
    :loading="loading"
    clearable
    multiple
    chips
    small-chips
    outlined
    deletable-chips
    :search-input.sync="input"
    @input="handleInput"
  >
    <template v-slot:no-data v-if="!input">
      <v-list-item>
        <v-list-item-title>
          <VTypography>
            Search for your favorite
            <strong>User</strong>
          </VTypography>
        </v-list-item-title>
      </v-list-item>
    </template>

    <template #selection="{ item }">
      <v-chip
        color="#8C75E1"
        outlined
      >
        {{ item }}
      </v-chip>
    </template>

    <template v-slot:append-item v-if="!!items.length && input && hasMoreItems && intersect">
      <v-list-item
        v-observe-visibility="{
          callback: handleOnIntersect,
          throttle: 500,
        }"
      >
        <v-list-item-title>
          <VTypography>
            Loading more
            <strong>Users...</strong>
          </VTypography>
        </v-list-item-title>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>
