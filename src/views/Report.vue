<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="report-dashboard">
    <Header title="Report"
      ><div class="icon">
        <i class="fa-solid fa-download"></i> Download
      </div></Header
    >
    <Sidebar />
    <Main>
      <div class="select-options">
        <SelectedTimeFrame />
        <SelectedPeople />
        <SelectedTopic />
      </div>
      <div class="container">
        <div class="stats">
          <Card title="Active Users" :currentNumber="27" total="/80" />
          <Card title="Questions Answered" :currentNumber="3297"></Card>
          <Card title="Av. Session Length" :currentNumber="'2m 28s'"></Card>
          <Card title="Starting Knowledge" :currentNumber="'64%'"
            ><AreaChart
          /></Card>
          <Card title="Current Knowledge" :currentNumber="'86%'"
            ><AreaChart
          /></Card>
          <Card title="Knowledge Gain" :currentNumber="'34%'"
            ><AreaChart
          /></Card>
        </div>
        <div class="activity">
          <div class="activity-content">
            <div>
              <h1>Activity</h1>
              <Select
                :options="selectOptions"
                v-model="selectedOption"
                border-style="none"
                justify-content="flex-start"
              />
            </div>

            <BarChart />
          </div>
        </div>
      </div>
      <div class="progress-container">
        <div class="col1">
          <Card title="Weakness Topics">
            <ProgressBar
              v-for="(topic, index) in weaknessTopics"
              :key="topic.label"
              :progress="topic.progress"
              :imageSrc="require(`@/assets/image${index + 1}.jpg`)"
              :label="topic.label"
              :isLoading="isLoading"
              :incrementValue="incrementValue"
              :targetValue="topic.targetValue"
              :progressColor="topic.progressColor"
              :backgroundColor="topic.backgroundColor"
            />
          </Card>
        </div>
        <div class="col2">
          <Card title="Strongest Topics">
            <ProgressBar
              v-for="(topic, index) in strongestTopics"
              :key="topic.label"
              :progress="topic.progress"
              :imageSrc="require(`@/assets/image${index + 4}.jpg`)"
              :label="topic.label"
              :isLoading="isLoading"
              :incrementValue="incrementValue"
              :targetValue="topic.targetValue"
              :progressColor="topic.progressColor"
              :backgroundColor="topic.backgroundColor"
            />
          </Card>
        </div>
      </div>
      <div class="leaderboard-container">
        <div>
          <Card title="User Leaderboard">
            <Leaderboard
              :imageSrc="require('@/assets/image7.jpg')"
              name="Jesse Thomas"
              content="637 points - 98% Correct"
              :number="1"
            >
              <i class="fa-solid fa-sort-up" :style="{ color: '#1fe08f' }"></i>
            </Leaderboard>
            <Leaderboard
              :imageSrc="require('@/assets/image8.jpg')"
              name="Thisal Mathiyazhagan"
              content="637 points - 89% Correct"
              :number="2"
              ><i
                class="fa-solid fa-sort-down"
                :style="{ color: '#FF3E13' }"
              ></i>
            </Leaderboard>
          </Card>
        </div>
        <div>
          <Card title="Groups Leaderboard">
            <Leaderboard
              name="Houston Facility"
              content="52 Points / User - 97% Correct"
              :number="1"
              ><i class="fa-solid fa-sort-up" :style="{ color: '#1fe08f' }"></i
            ></Leaderboard>
            <Leaderboard
              name="Test Group"
              content="52 Points / User - 95% Correct"
              :number="2"
              iconColor="#FF3E13"
              ><i
                class="fa-solid fa-sort-down"
                :style="{ color: '#FF3E13' }"
              ></i>
            </Leaderboard>
          </Card>
        </div>
      </div>
    </Main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex"; // Import the useStore function
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Main from "../components/Main.vue";
import Select from "../components/Select.vue";
import SelectedTimeFrame from "../components/SelectedTimeFrame.vue";
import SelectedPeople from "../components/SelectedPeople.vue";
import SelectedTopic from "../components/SelectedTopic.vue";
import Card from "../components/Card.vue";
import AreaChart from "../components/AreaChart.vue";
import BarChart from "../components/BarChart.vue";
import ProgressBar from "../components/ProgressBar.vue";
import Leaderboard from "../components/Leaderboard.vue";

export default defineComponent({
  components: {
    Header,
    Sidebar,
    Main,
    Select,
    SelectedTimeFrame,
    SelectedPeople,
    SelectedTopic,
    Card,
    AreaChart,
    BarChart,
    ProgressBar,
    Leaderboard,
  },
  setup() {
    const store = useStore(); // Get the store

    // Map state to local variables
    const weaknessTopics = computed(() => store.state.weaknessTopics);
    const strongestTopics = computed(() => store.state.strongestTopics);
    const isLoading = computed(() => store.state.isLoading);
    const incrementValue = computed(() => store.state.incrementValue);
    const selectOptions = ["Month", "Daily", "Weekly"];
    const selectedOption = ref(selectOptions[0]); // Default selection
    onMounted(() => {
      store.dispatch("startProgress");
    });

    return {
      weaknessTopics,
      strongestTopics,
      isLoading,
      incrementValue,
      selectOptions,
      selectedOption,
    };
  },
});
</script>

<style scoped>
.report-dashboard {
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  background-color: var(--color-grey-100);
  gap: 20px;
}

@media (max-width: 1024px) {
  .report-dashboard {
    grid-template-columns: 20rem 1fr;
  }
}

@media (max-width: 768px) {
  .report-dashboard {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}

.icon {
  cursor: pointer;
}

.select-options {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 100%;
}

.container {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 20px;
  margin-top: 30px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.stats .card {
  height: 250px;
}

.activity {
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border-radius: 15px;
  padding: 20px;
}

.activity-content {
  height: 100%;
}

.activity-content div {
  display: flex;
  justify-content: space-between;
}

.progress-container,
.leaderboard-container {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
  margin-top: 30px;
  width: 100%;
}

.progress-container .col1 .card,
.progress-container .col2 .card {
  height: auto;
}

.leaderboard-container .card {
  height: 300px;
}

.leaderboard-container .card .content {
  margin-top: 20px;
}

.fa-sort-up,
.fa-sort-down {
  width: 20px;
  height: 20px;
  font-size: 34px;
}

.fa-sort-up:before,
.fa-sort-down:before {
  margin-left: 12px;
  display: block;
  width: 20px;
  height: 20px;
}

.fa-sort-down:before {
  position: relative;
  top: -17px;
}

@media (max-width: 768px) {
  .select-options {
    grid-template-columns: 1fr; /* Stack options */
  }

  .activity-content div {
    flex-direction: column; /* Stack activity content */
  }
}
</style>
