<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <aside class="sidebar"><Logo /> <MainNav /></aside>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Logo from "./Logo.vue";
import MainNav from "./MainNav.vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  components: {
    Logo,
    MainNav,
  },
  setup() {
    // Add your setup logic here if needed
  },
});
</script>

<style lang="css">
.sidebar {
  background-color: var(--color-grey-0);
  padding: 3.2rem 3rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  border-radius: var(--border-radius-lg);
  height: auto;
}
@media (max-width: 478px) {
  .sidebar {
    padding: 1.2rem 1rem;
    gap: 1.5rem;
  }
}
</style>
