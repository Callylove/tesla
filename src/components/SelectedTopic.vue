<template>
  <div>
    <Select :options="selectOptions" v-model="selectedOption">
      {{ selectedOption }}
    </Select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Select from "./Select.vue";

export default defineComponent({
  name: "SelectedTopic",
  components: {
    Select,
  },
  setup() {
    const selectOptions = [
      "Topic: All",
      "Topic: Current-Day",
      "Topic: Past Months",
    ];
    const selectedOption = ref(selectOptions[0]); // Default selection

    return {
      selectOptions,
      selectedOption,
    };
  },
});
</script>

<style>
/* Add your styles here */
</style>
