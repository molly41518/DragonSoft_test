<script>
import { HorizontalBar, mixins } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
const { reactiveProp } = mixins;

export default {
  mixins: [reactiveProp],
  extends: HorizontalBar,
  data() {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
              stacked: true,
            },
          ],
          xAxes: [
            {
              ticks: {
                display: false,
                min: 0,
                max: 100,
              },
              stacked: true,
              gridLines: {
                display: false,
              },
            },
          ],
        },
        plugins: {
          datalabels: {
            color: "white",
            formatter: function (value) {
              if (value == 0) return "";
              return value + "%";
            },
          },
        },
        tooltips: {
          enabled: false,
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.addPlugin(ChartDataLabels);
    this.renderLineChart();
  },
  methods: {
    renderLineChart() {
      this.renderChart(this.chartData, this.options);
    },
  },
};
</script>