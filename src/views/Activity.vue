<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="activity">
    <Header title="Activities" />
    <Sidebar />
    <Main />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Main from "../components/Main.vue";

export default defineComponent({
  components: { Header, Sidebar, Main },
});
</script>
<style scoped>
.activity {
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  background-color: var(--color-grey-100);
}

@media (max-width: 478px) {
  .activity {
    grid-template-columns: 15rem 1fr;
  }
}
</style>
