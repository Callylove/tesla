<template>
  <Bar id="my-bar-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "VerticalBarChart",
  components: { Bar },
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
            label: "Data Values",
            data: [
              100, 120, 120, 220, 250, 200, 220, 100, 250, 300, 320, 350, 400,
            ],
            backgroundColor: "rgba(29, 78, 216, 1)", // Bar fill color
            borderColor: "rgba(29, 78, 216, 1)", // Border color
            borderWidth: 0, // Remove border width
            borderRadius: 10, // Set border radius for both corners
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
        scales: {
          x: {
            grid: {
              display: false, // Hide grid lines
            },
            ticks: {
              autoSkip: false, // Show all month labels
            },
            border: {
              display: false, // Hide x-axis border
            },
            barPercentage: 0.5, // Adjust for bar width
            categoryPercentage: 0.8, // Adjust for spacing between bars
          },
          y: {
            beginAtZero: true, // Start y-axis from zero
            ticks: {
              stepSize: 100, // Set step size to 100
              callback: function (value) {
                return value; // Display the tick value
              },
            },
            grid: {
              display: false, // Hide grid lines
            },
            border: {
              display: false, // Hide y-axis border
            },
          },
        },
      },
    };
  },
};
</script>

<style>
#my-bar-id {
  width: 100% !important;
  height: 400px !important;
  padding-top: 30px;
}
</style>
