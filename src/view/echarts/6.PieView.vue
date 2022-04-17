<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "PieView",
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let data = [
      { value: 67, name: "美食" },
      { value: 175, name: "日化" },
      { value: 27, name: "数码" },
      { value: 89, name: "家电" },
    ];
    let option = {
      title: {
        text: "饼状图",
        left: "center",
      },
      legend: {
        left: "left",
        // 图例布局朝向
        orient: "verical",
      },
      series: [
        {
          name: "销量统计",
          type: "pie", // 饼状图
          data,
          radius: ["40%", "70%"], // 设置饼图的内外半径
          // 文本标签
          label: {
            show: true, // 默认显示
            position: "inside", // outside/inside/center，外侧/内侧/中心展示
          },
          roseType: "area", // 南丁格尔玫瑰图
          itemStyle: {
            shadowBlur: 200,
            shadowColor: "reba(0,0,0,.5)",
          },
        },
      ],
      color: [
        "rgb(0,175,80)",
        "rgb(175,80,80)",
        "rgb(80,80,80)",
        "rgb(0,60,10)",
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
