<template>
  <!-- 容器默认宽高为0 -->
  <div ref="mychart" id="demoDiv"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "IntroductoryView",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    myEcharts.setOption({
      title: {
        // echarts 标题
        text: "hello world",
      },
      xAxis: {
        // x轴上数据
        data: ["EZ", "VN", "NOC", "MF"],
      },
      yAxis: {}, // y轴上数据
      series: {
        // 系列，设置图表样式
        name: "lol英雄大全",
        type: "bar",
        data: [6300, 4800, 3200, 600],
      },
    });
  },
};
</script>

<style scoped>
#demoDiv {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>
