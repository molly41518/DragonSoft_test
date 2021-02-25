<template>
  <div class="auditInfo">
    <div class="card">
      <div class="card-header text-left">
        <font-awesome-icon
          :icon="['fas', 'list']"
          class="pr-1"
        />稽核項目分類統計
      </div>
      <table class="table table-borderless">
        <thead>
          <tr>
            <th scope="col" style="width: 12rem">分類/圖示</th>
            <th scope="col">符合率</th>
            <th scope="col">未符合率</th>
            <th scope="col">設定率</th>
            <th scope="col">設定率</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in audit" :key="index">
            <div>
              <th scope="row" class="title-font-size text-center pb-0">
                {{ index }}
              </th>
              <horizontal-chart
                v-if="loaded"
                :chart-data="chartData[index]"
                :width="200"
                :height="30"
              ></horizontal-chart>
            </div>

            <td v-for="(data, index) in item" :key="index">{{ data }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import HorizontalChart from "./HorizontalChart.vue";
export default {
  name: "auditInfo",
  props: ["audit"],
  data() {
    return {
      newAudit: {},
      loaded: false,
      chartData: null,
    };
  },
  components: {
    HorizontalChart,
  },
  created() {},
  mounted() {
    if (this.audit) {
      let k_list = Object.keys(this.audit);
      for (var k = 0; k < k_list.length; k++) {
        let check_number_list = this.audit[k_list[k]];
        let sum = 0;
        for (var n of check_number_list) {
          sum += n;
        }
        for (var i = 0; i < check_number_list.length; i++) {
          check_number_list[i] = (
            Math.round((check_number_list[i] / sum) * 10000) / 100
          ).toFixed(1);
        }
      }
    }

    var bgColor = ["#4DBD74", "#F86C6B", "#FFC107", "#73818F"];

    let allData = {};
    for (let i = 0; i < Object.values(this.audit).length; i++) {
      let setData = [];
      for (let j = 0; j < Object.values(this.audit)[i].length; j++) {
        let barData = {
          data: [Object.values(this.audit)[i][j]],
          backgroundColor: bgColor[j],
        };
        setData.push(barData);
      }
      allData[Object.keys(this.audit)[i]] = {
        datasets: setData,
      };
    }
    this.chartData = allData;
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
.table th,
.table td {
  text-align: center;
  vertical-align: middle !important;
}
.title-font-size {
  font-size: 0.9rem;
}
</style>