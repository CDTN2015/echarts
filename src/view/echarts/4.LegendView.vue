<template>
  <div class="about">
    <div id="main" style="margin: 0 auto"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "LegendView",
  mounted() {
    let myEcharts = echarts.init(document.getElementById("main"));
    myEcharts.setOption({
      title: {
        text: "主标题",
      },
      tooltip: {},
      legend: {
        show: true, //图例开关
        icon: "circle",
        // top...设置位置
        itemWidth: 20,
        itemHeight: 10,
        textStyle: {
          color: "red",
          fontSize: 30,
        },
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    });
  },
};
</script>

<style>
#main {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>
