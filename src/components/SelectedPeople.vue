<template>
  <div>
    <Select
      :options="selectOptions"
      v-model="selectedOption"
      border-style="1px solid var(--color-grey-0)"
      justify-content="space-between"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Select from "./Select.vue";

export default defineComponent({
  name: "SelectedPeople",
  components: {
    Select,
  },
  setup() {
    const selectOptions = [
      "People: All",
      "People: Current-Day",
      "People: Past Months",
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
