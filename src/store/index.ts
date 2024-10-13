import { createStore } from "vuex";
interface User {
  imageSrc: string;
  name: string;
  points: number;
  accuracy: number;
}

export interface State {
  users: User[];
}
export default createStore({
  state: {
    weaknessTopics: [
      {
        label: "Food Safety",
        progress: 0,
        targetValue: 74,
        progressColor:
          "linear-gradient(143.13deg, #ffbf1a 5.36%, #ff4080 94.64%)",
        backgroundColor: "rgba(255, 191, 26, 0.2)",
      },
      {
        label: "Compliance Basics Procedures",
        progress: 0,
        targetValue: 52,
        progressColor:
          "linear-gradient(143.13deg, #ffbf1a 5.36%, #ff4080 94.64%)",
        backgroundColor: "rgba(255, 191, 26, 0.2)",
      },
      {
        label: "Computer Networking",
        progress: 0,
        targetValue: 36,
        progressColor:
          "linear-gradient(143.13deg, #ffbf1a 5.36%, #ff4080 94.64%)",
        backgroundColor: "rgba(255, 191, 26, 0.2)",
      },
    ],
    strongestTopics: [
      {
        label: "Covid Protocols",
        progress: 0,
        targetValue: 95,
        progressColor: "linear-gradient(270deg, #2FEA9B 15.5%, #7FDD53 85.5%)",
        backgroundColor: "rgba(144, 238, 144, 0.2)",
      },
      {
        label: "Cyber Security Basics",
        progress: 0,
        targetValue: 92,
        progressColor: "linear-gradient(270deg, #2FEA9B 15.5%, #7FDD53 85.5%)",
        backgroundColor: "rgba(144, 238, 144, 0.2)",
      },
      {
        label: "Social Media Policies",
        progress: 0,
        targetValue: 89,
        progressColor: "linear-gradient(270deg, #2FEA9B 15.5%, #7FDD53 85.5%)",
        backgroundColor: "rgba(144, 238, 144, 0.2)",
      },
    ],
    users: [
      {
        imageSrc: require("@/assets/image1.jpg"),
        name: "Jesse Thomas",
        points: 637,
        accuracy: 98,
      },
      {
        imageSrc: require("@/assets/image2.jpg"),
        name: "Alice Smith",
        points: 520,
        accuracy: 95,
      },
      {
        imageSrc: require("@/assets/image3.jpg"),
        name: "Michael Johnson",
        points: 410,
        accuracy: 92,
      },
      {
        imageSrc: require("@/assets/image4.jpg"),
        name: "Sarah Brown",
        points: 300,
        accuracy: 89,
      },
      {
        imageSrc: require("@/assets/image5.jpg"),
        name: "David Wilson",
        points: 250,
        accuracy: 85,
      },
    ],
    isLoading: true,
    incrementValue: 15,
  },
  getters: {
    getUsers: (state) => state.users,
  },
  mutations: {
    INCREMENT_PROGRESS(state) {
      const allTargets = [...state.weaknessTopics, ...state.strongestTopics];

      for (const topic of allTargets) {
        if (topic.progress < topic.targetValue) {
          topic.progress += state.incrementValue;
          if (topic.progress > topic.targetValue) {
            topic.progress = topic.targetValue;
          }
        }
      }

      state.isLoading = allTargets.every(
        (topic) => topic.progress === topic.targetValue
      );
    },
    RESET_PROGRESS(state) {
      state.weaknessTopics.forEach((topic) => (topic.progress = 0));
      state.strongestTopics.forEach((topic) => (topic.progress = 0));
      state.isLoading = true;
    },
  },
  actions: {
    incrementProgress({ commit, state }) {
      const allTargets = [...state.weaknessTopics, ...state.strongestTopics];

      const interval = setInterval(() => {
        let allTargetsReached = true;

        for (const topic of allTargets) {
          if (topic.progress < topic.targetValue) {
            topic.progress += state.incrementValue;
            if (topic.progress > topic.targetValue) {
              topic.progress = topic.targetValue;
            }
            allTargetsReached = false;
          }
        }

        if (allTargetsReached) {
          clearInterval(interval);
          commit("INCREMENT_PROGRESS"); // Call mutation to finalize loading state
        }
      }, 500);
    },
    startProgress({ dispatch }) {
      dispatch("incrementProgress");
    },
  },
});
