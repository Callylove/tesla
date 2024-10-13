<template>
  <div class="progress-bar-container">
    <div class="image-container">
      <img :src="imageSrc" alt="Person" class="rounded-image" />
    </div>

    <div class="progress-container">
      <div class="progress-content">
        <div class="progress-label">
          <h3>{{ label }}</h3>
        </div>
        <div
          class="progress-background"
          :style="{ background: backgroundColor }"
        >
          <div
            class="progress"
            :style="{ width: `${progress}%`, background: progressColor }"
          ></div>
        </div>
      </div>

      <div class="progress-result">
        <span class="result">{{ progress }}%</span> <span>Correct</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    progress: {
      type: Number,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    incrementValue: {
      type: Number,
      default: 5, // Default increment value
    },
    targetValue: {
      type: Number,
      required: true, // Target value for the progress
    },
    backgroundColor: {
      type: String,
    },
    progressColor: {
      type: String,
    },
  },
};
</script>

<style scoped>
.progress-bar-container {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.image-container {
  margin-right: 10px;
}

.rounded-image {
  width: 100px; /* Adjust size as needed */
  height: 70px;
  border-radius: 10px;
}

.progress-container {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}
.progress-content {
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.progress-background {
  width: 100%;
  background: rgba(255, 191, 26, 0.2); /* Light background with transparency */
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 15px;
  background: linear-gradient(143.13deg, #ffbf1a 5.36%, #ff4080 94.64%);
  transition: width 0.5s ease;
  border-radius: 5px; /* Match the container's border radius */
}

.progress-label h3 {
  margin-bottom: 10px;
  font-weight: 700;
}
.progress-result {
  display: flex;
  align-self: flex-end;
  font-size: 20px;
  margin-left: 20px;
}
.progress-result .result {
  font-weight: 700;
  font-size: 24px;
  margin-right: 10px;
}
.spinner {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid orange; /* Orange spinner color */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: translateX(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) rotate(360deg);
  }
}
</style>
