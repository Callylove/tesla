<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="people">
    <Header title="People" />
    <Sidebar />
    <Main>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Points</th>
            <th>Accuracy</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>
              <img :src="user.imageSrc" alt="User Image" class="user-image" />
              {{ user.name }}
            </td>
            <td>{{ user.points }} points</td>
            <td>{{ user.accuracy }}%</td>
          </tr>
        </tbody>
      </table>
    </Main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Main from "../components/Main.vue";

export default defineComponent({
  components: { Header, Sidebar, Main },
  setup() {
    const store = useStore();
    const users = store.getters.getUsers;

    return { users };
  },
});
</script>

<style scoped>
.people {
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  background-color: var(--color-grey-100);
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.user-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
@media (max-width: 478px) {
  .people {
    grid-template-columns: 15rem 1fr;
  }
}
</style>
