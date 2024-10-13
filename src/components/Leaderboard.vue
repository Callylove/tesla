<template>
  <div class="l-container">
    <div class="image-container" v-if="imageSrc">
      <img :src="imageSrc" alt="Person" class="rounded-image" />
    </div>

    <div class="list-container">
      <div class="list-content">
        <h3>{{ name }}</h3>
        <p>{{ content }}</p>
      </div>
    </div>

    <div class="leaderboard-result">
      <span class="result">{{ number }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    imageSrc: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    number: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.l-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
  padding: 0 20px;
  margin-top: 30px;
}

.image-container {
  margin-right: 20px;
}

.rounded-image {
  width: 100px; /* Adjust size as needed */
  height: 70px;
  border-radius: 10px;
}

.list-container {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

.list-content {
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  flex: 1;
}

.leaderboard-result {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-left: 20px;
}

.leaderboard-result .result {
  font-weight: 700;
  font-size: 24px;
}

.leaderboard-result .fa-sort-up {
  width: 20px;
  height: 20px;
  font-size: 34px;
}

.leaderboard-result .fa-sort-up:before {
  margin-left: 10px;
  display: block;
  width: 20px;
  height: 20px;
}
</style>
