<template>
  <div class="complianceRate">
    <div class="card h-100">
      <div class="card-header text-left">
        <font-awesome-icon :icon="['fas', 'list']" class="pr-1" />資產符合率
      </div>
      <div class="row mt-3">
        <doughnut-chart
          v-if="loaded"
          :chart-data="chartData"
          class="col-8"
        ></doughnut-chart>
        <div class="col-4 text-left">
          <div v-for="(item, index) in ratio" :key="index">
            <!-- 待優化 -->
            <h5>{{ Math.round(item * 10000) / 100 }}%</h5>
            <p class="day-font-size">{{ name[index] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DoughnutChart from "./DoughnutChart.vue";
export default {
  name: "complianceRate",
  props: ["ratio"],
  components: {
    DoughnutChart,
  },
  data() {
    return {
      name: { passed: "符合", failed: "未符合", other: "未稽核" },
      loaded: false,
      chartData: null,
    };
  },
  mounted() {
    this.chartData = {
      labels: ["符合", "未符合", "未稽核"],
      datasets: [
        {
          data: Object.values(this.ratio),
          backgroundColor: ["#F86C6B", "#4DBD74", "#73818F"],
        },
      ],
    };
    this.loaded = true;
  },
};
</script>

<style scoped>
.card > .card-header {
  font-weight: 700;
}
.day-font-size {
  font-size: 0.9rem;
}
</style>