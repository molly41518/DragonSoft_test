<template>
  <div class="scanInfo">
    <div class="card">
      <div class="card-header text-left">
        <font-awesome-icon :icon="['fas', 'list']" class="pr-1" />
        近期稽核情形(稽核資產數)
      </div>
      <div class="row">
        <bar-chart
          v-if="loaded"
          :chart-data="chartData"
          class="col-7 mt-3 ml-2"
        ></bar-chart>
        <div class="col-4 text-left">
          <div v-for="(item, index) in scan" :key="index" class="mt-3">
            <h5>{{ item }}</h5>
            <p class="day-font-size">最近{{ index }}日</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "./BarChart.vue";
export default {
  name: "scanInfo",
  components: {
    BarChart,
  },
  props: ["scan"],
  data() {
    return {
      loaded: false,
      chartData: null,
    };
  },
  mounted() {
    let labelsName = [];
    for (const element of Object.keys(this.scan)) {
      labelsName.push(element + "日");
    }
    this.chartData = {
      labels: labelsName,
      datasets: [
        {
          label: "稽核資產數",
          data: Object.values(this.scan),
          fill: false,
          borderColor: "#249FCC",
          backgroundColor: "#249FCC",
          borderWidth: 1,
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
  font-size: 0.8rem;
}
</style>