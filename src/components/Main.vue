<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Main",
});
</script>

<style>
.main {
  padding: 3rem;
}
</style>
