<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "ScatterView",
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      xAxis: {},
      yAxis: {},
      tooltip: {},
      series: {
        symbolSize: 20,
        data: [
          [9.0, 7.04],
          [18.07, 4.33],
          [3.0, 9.65],
          [9.05, 8.23],
          [18.0, 9.76],
          [15.0, 7.56],
          [23.4, 5.31],
          [10.1, 7.47],
          [16.0, 8.26],
          [12.7, 3.53],
          [9.35, 7.2],
          [7.4, 8.2],
          [3.07, 4.82],
          [18.2, 6.83],
          [2.02, 4.47],
          [1.05, 3.33],
          [4.05, 4.96],
          [6.03, 7.24],
          [17.0, 6.55],
          [12.0, 8.84],
          [8.18, 5.82],
          [6.32, 5.68],
        ],
        type: "scatter", // 散点图
        // 图形样式
        color: {
          // 线性渐变
          type: "linear",
          // 相当于在图形包围盒中的百分比
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#00ccff",
            },
            {
              offset: 1,
              color: "rgba(255,173,2,.9)",
            },
          ],
        },
        emphasis: {
          itemStyle: {
            borderColor: "rgba(100,200,50,.5)",
            borderWidth: 30,
          },
        },
      },
    };
    myEcharts.setOption(option);
  },
};
</script>

<style scoped>
#myChart {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>
