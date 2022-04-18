<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "CandlestickView",
  data() {
    return {
      kData: [
        // 柱状的上下沿，线的上下沿
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 15, 5, 42],
      ],
    };
  },
  computed: {
    newData() {
      return this.kData.map((v) => v[0]);
    },
  },
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      xAxis: {
        data: ["日化", "蔬菜", "电器", "美妆"],
      },
      yAxis: {},
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      series: [
        {
          type: "candlestick", // k线图
          data: this.kData,
          itemStyle: {
            color: "#ec5566", // 上涨颜色
            color0: "#00da3a", // 下跌颜色
            borderColor: "#8A0000",
            borderColor0: "#008f28",
          },
          markPoint: {
            data: [
              {
                name: "最大值",
                type: "max",
                valueDim: "highest", // 指定属性维度
              },
              {
                name: "最小值",
                type: "min",
                valueDim: "lowest", // 指定属性维度
              },
              {
                name: "平均值",
                type: "average",
                valueDim: "close", // 指定属性维度
              },
            ],
          },
        },
        {
          type: "line",
          smooth: true,
          data: this.newData,
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
