<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <select :value="modelValue" @change="handleChange" :style="selectStyle">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Select",
  props: {
    options: {
      type: Array as () => string[],
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    borderStyle: {
      type: String,
      default: "1px solid var(--color-grey-0)",
    },
    justifyContent: {
      type: String,
      default: "flex-start",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const selectStyle = computed(() => ({
      border: props.borderStyle,
      justifyContent: props.justifyContent,
      borderRadius: "var(--border-radius-xlg)",
      display: "flex",
      width: "100%",
      height: "50px",
      padding: "0 2rem",
      backgroundColor: "var(--color-grey-0)",
      background: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10l5 5 5-5H7z"/></svg>') no-repeat`,
      backgroundPosition: "right 10px center",
      backgroundSize: "15px",
    }));

    const handleChange = (event: Event) => {
      const selectedValue = (event.target as HTMLSelectElement).value;
      emit("update:modelValue", selectedValue);
    };

    return {
      selectStyle,
      handleChange,
    };
  },
});
</script>

<style scoped>
select {
  appearance: none; /* Remove default arrow */
  cursor: pointer;
}
</style>
