<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "RadarView",
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
      title: {
        text: "雷达图",
      },
      // 仅雷达图
      radar: [
        {
          shape: "circle",
          indicator: [
            { name: "蔬菜", max: 6500 },
            { name: "水果", max: 16000 },
            { name: "熟食", max: 30000 },
            { name: "数码", max: 38000 },
            { name: "家电", max: 52000 },
            { name: "日化", max: 25000 },
          ],
          // 半径
          radius: 120,
          // 坐标系的起始角度
          startAngle: 180,
          axisName: {
            // formatter: "{value}", // 有什么用
            color: "#428BD4",
          },
          // 层级数
          splitNumber: 4,
          splitArea: {
            // 分割区域效果
            areaStyle: {
              color: ["#77EADE", "#26C3BE", "#64AFE9", "#428BD4"],
              shadowColor: "0,0,0,.2",
              shadowBlur: 10,
            },
          },
        },
      ],
      series: [
        {
          type: "radar", // k线图
          data: [
            {
              value: [4200, 5300, 6666, 22345, 12340, 14567],
              areaStyle: {
                color: "rgba(225,225,0,.5)",
              },
            },
          ],
          lineStyle: {
            // 虚线效果
            type: "dashed",
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
