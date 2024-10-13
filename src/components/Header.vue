<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <div class="header-actions">
      <slot></slot>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
header {
  border-right: 1px solid var(--color-grey-100);
  padding: 1.2rem 1rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-grey-300);
  padding: 3.2rem 0;
  margin-left: 3rem;
  padding-right: 3rem;
}
.header-actions {
  font-weight: 700;
  line-height: 1;
}
</style>
