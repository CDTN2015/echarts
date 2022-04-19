<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "GaugeView",
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      series: [
        {
          type: "gauge", // 设置漏斗图
          data: [{ value: 45, name: "提示信息" }],
          detail: {
            valueAnimation: true, // 指针动画效果
          },
          progress: {
            show: true, // 外圈填充颜色
          },
        },
      ],
    };
    myEcharts.setOption(option);
  },
};
</script>

<style>
#myChart {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>
