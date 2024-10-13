<template>
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler
);

export default {
  name: "AreaChart",
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "My Area Dataset",
            data: [5, 3, 8, 7, 1, 2, 2, 4, 9, 6, 10, 3], // Curvy values
            fill: true,
            borderColor: "rgba(29, 78, 216, 1)", // Deep blue for the line
            tension: 0.4, // Increase tension for more curve
            backgroundColor: "rgba(191, 219, 254, 0.5)", // Light blue fill below the line
            pointRadius: 0, // Optionally hide points
            borderWidth: 1, // Adjust thickness of the line
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Show legend
          },
          tooltip: {
            enabled: false, // Enable tooltips
          },
        },
        title: {
          display: false,
          text: "",
        },
        scales: {
          x: {
            grid: {
              display: false, // Hide grid lines on x-axis
            },
            title: {
              display: false, // Hide x-axis title
            },
            ticks: {
              display: false, // Hide x-axis labels
            },
            border: {
              display: false, // Hide x-axis line
            },
          },
          y: {
            grid: {
              display: false, // Hide grid lines on y-axis
            },
            title: {
              display: false, // Hide y-axis title
            },
            ticks: {
              display: false, // Hide y-axis labels
            },
            beginAtZero: true,
            suggestedMin: -1, // Lower limit to create a gap
            suggestedMax: 30, // Upper limit to create a gap
            border: {
              display: false, // Hide y-axis line
            },
          },
        },
      },
    };
  },
};
</script>

<style>
#my-chart-id {
  width: 100% !important;
  height: 100px !important;
}
</style>
