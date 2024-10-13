<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <p class="loading-text">
      <span class="display-number">{{
        isString ? currentNumber : formattedCurrentNumber
      }}</span>
      <span class="total">{{ slotTotal }}</span>
    </p>
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    currentNumber: {
      type: [Number, String],
    },
    total: {
      type: [Number, String],
      default: "", // Optional total prop
    },
  },
  data() {
    return {
      displayedNumber: 0 || "", // Start at 0 to animate from 0 to currentNumber
      intervalId: null,
      loading: true, // Track loading state
    };
  },
  computed: {
    isString() {
      return typeof this.currentNumber === "string";
    },
    formattedCurrentNumber() {
      return this.formatNumber(this.displayedNumber);
    },
    slotTotal() {
      const slotContent =
        this.total ||
        (this.$slots.default && this.$slots.default()[0]?.text?.trim());
      return slotContent || ""; // Return total prop or slot content
    },
  },
  mounted() {
    if (!this.isString) {
      this.startLoading();
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startLoading() {
      const targetNumber = parseFloat(this.currentNumber); // Extract target number
      const incrementSpeed = targetNumber > 1000 ? 10 : 100; // Fast loading for large numbers

      this.intervalId = setInterval(() => {
        if (this.displayedNumber < targetNumber) {
          this.displayedNumber += 20; // Increment based on target size
          if (this.displayedNumber > targetNumber) {
            this.displayedNumber = targetNumber; // Cap at target number
          }
        } else {
          clearInterval(this.intervalId);
        }
      }, incrementSpeed); // Adjust speed as needed
    },
    formatNumber(value) {
      return value.toLocaleString(); // Format number with commas
    },
    handleAnimationEnd() {
      this.loading = false; // Stop loading when chart animation ends
    },
  },
};
</script>

<style>
.card {
  width: 100%;
  height: auto;
  padding: 20px;
  border: 1px solid var(--color-grey-0);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  /* display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column; */
}
h3 {
  font-weight: 200;
  margin-bottom: 5px;
}
.loading-text {
  font-weight: bold;
}
.total {
  color: var(--color-grey-400);
  font-size: 18px;
}
.display-number {
  font-weight: 700;
  font-size: 24px;
}
.content {
  width: 100;
  margin-top: 20px;
}
</style>
