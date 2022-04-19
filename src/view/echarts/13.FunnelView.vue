<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "FunnelView",
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      title: {
        text: "漏斗图",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%",
      },
      series: [
        {
          type: "funnel", // 设置漏斗图
          data: [
            { value: 100, name: "蔬菜" },
            { value: 60, name: "美食" },
            { value: 20, name: "数码" },
            { value: 80, name: "家电" },
            { value: 40, name: "日化" },
          ],
          left: "10%",
          gap: 2, // 数据图形间距
          // sort: "none", // 排序，默认递减，递增ascending，保持原数据none
          itemStyle: {
            borderColor: "red",
            borderWidth: 3,
          },
          label: {
            show: true,
            position: "inside",
          },
          emphasis: {
            label: {
              fontSize: 30,
            },
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
