<script>
import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  mixins: [reactiveProp],
  extends: Doughnut,
  data() {
    return {
      options: {
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: true,
        tooltips: {
          callbacks: {
            title: function (tooltipItem, data) {
              return data["labels"][tooltipItem[0]["index"]];
            },
            label: function (tooltipItem, data) {
              var dataset = data["datasets"][0];
              var percent =
                Math.round(dataset["data"][tooltipItem["index"]] * 10000) / 100;
              return "(" + percent + "%)";
            },
          },
        },
      },
    };
  },
  mounted() {
    this.renderLineChart();
  },
  methods: {
    renderLineChart() {
      this.renderChart(this.chartData, this.options);
    },
  },
};
</script>