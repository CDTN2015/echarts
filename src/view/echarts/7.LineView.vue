<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "LineView",
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let xData = ["Mon", "Tue", "Wed", "Tue", "Fri", "Sat", "Sun"];
    let data = [130, 25, 234, 164, 89, 188, 79];
    let option = {
      xAxis: {
        type: "category",
        data: xData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data,
          type: "line", // 折线图
          smooth: true, // 开启平滑过渡，boolean/number平滑程度
          areaStyle: {}, //内容填充
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" },
            ],
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }],
          },
        },
      ],
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
