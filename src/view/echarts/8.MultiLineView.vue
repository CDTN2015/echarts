<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "MultiLineView",
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let xData = ["Mon", "Tue", "Wed", "Tue", "Fri", "Sat", "Sun"];
    let dataA = [130, 25, 234, 164, 89, 188, 79];
    let dataB = [60, 215, 124, 164, 89, 288, 190];
    let dataC = [90, 87, 77, 267, 229, 18, 79];
    let dataD = [240, 35, 478, 527, 333, 222, 100];
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
          name: "美食",
          type: "line",
          // 数据的堆叠
          stack: "num", // 同类型数据需要匹配相同的stack属性值
          data: dataA,
          areaStyle: {},
          // 选中高亮状态
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "日化",
          type: "line",
          // 数据的堆叠
          stack: "num", // 同类型数据需要匹配相同的stack属性值
          data: dataB,
          areaStyle: {},
          // 选中高亮状态
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "数码",
          type: "line",
          // 数据的堆叠
          stack: "num", // 同类型数据需要匹配相同的stack属性值
          data: dataC,
          areaStyle: {},
          // 选中高亮状态
          emphasis: {
            focus: "series",
          },
        },
        {
          name: "蔬菜",
          type: "line",
          // 数据的堆叠
          stack: "num", // 同类型数据需要匹配相同的stack属性值
          data: dataD,
          areaStyle: {},
          // 选中高亮状态
          emphasis: {
            focus: "series",
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
