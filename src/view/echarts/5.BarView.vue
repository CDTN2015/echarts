<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "BarView",
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let xData = ["美食", "数码", "日化", "蔬菜"];
    let yData = [99, 67, 45, 87];
    let option = {
      title: {
        text: "主标题",
      },
      xAxis: {
        data: xData,
        type: "category", //坐标轴类型，value数据轴，category类目轴
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: yData,
          barWidth: 20, // 设置轴宽
          // color: red,
          //单独设置轴色
          itemStyle: {
            color: function (params) {
              let colorList = ["#c23531", "#2f4554", "#61a0a8", "#91c7ae"];
              return colorList[params.dataIndex];
            },
          },
          // 最值
          markPoint: {
            data: [
              //数据数组
              {
                type: "max",
                name: "最大值",
              },
              {
                type: "min",
                name: "最小值",
              },
            ],
          },
          // 图表标线
          markLine: {
            data: [
              {
                type: "average",
                name: "平均值",
              },
            ],
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
