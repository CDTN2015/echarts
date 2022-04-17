<template>
  <div ref="mychart" id="demoDiv"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "TitleView",
  mounted() {
    let myEcharts = echarts.init(this.$refs.mychart);
    myEcharts.setOption({
      title: {
        show: true, // 控制显示
        text: "主标题",
        link: "https://www.baidu.com", // 主标题链接，默认新标签页打开
        textStyle: {
          //主标题样式， 副标题 subtextStyle
          color: "yellow",
          fontSize: 20,
        },
        subtext: "副标题",
        sublink: "https://www.google.com", //副标题链接，subtarget
        target: "self", // 当前页打开
        // textAlign/textVerticalAlign，整体的水平/垂直对齐
        // itemGap主副标题间距
        // z/zlevel，控制图形前后顺序，会增大内存开销
        backgroundColor: "pink", // 背景颜色
        borderColor: "red", // 边框颜色，支持 rgb
        borderWidth: 5, // 边框粗细
        // borderRadius: [5, 5, 0, 0] //（顺时针左上，右上，右下，左下）
        // shadowColor: 'rgba(0, 0, 0, 0.5)',
        // shadowBlur: 10 // 阴影模糊大小
        // shadowOffsetX/shadowOffsetY，阴影偏移距离
        left: "center", // 距容器左侧的距离，可选值：具体像素/百分比/left/center/right,right 同理
        // top/bottom，top/middle/bottom
        // padding 标题内边距， 默认5px
      },
      xAxis: {
        data: ["EZ", "VN", "NOC", "MF"],
      },
      yAxis: {},
      series: {
        name: "lol英雄大全",
        type: "bar",
        data: [6300, 4800, 3200, 600],
      },
    });
  },
};
</script>

<style>
#demoDiv {
  width: 500px;
  height: 500px;
  border: 1px solid red;
}
</style>
