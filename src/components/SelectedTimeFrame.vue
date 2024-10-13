<template>
  <div>
    <Select :options="selectOptions" v-model="selectedOption">
      {{ title }} {{ selectedOption }}
    </Select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Select from "./Select.vue";

export default defineComponent({
  name: "SelectedTimeframe",
  components: {
    Select,
  },
  setup() {
    const selectOptions = [
      "Timeframe: All-Time",
      "Timeframe: Current-Day",
      "Timeframe: Past Months",
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
