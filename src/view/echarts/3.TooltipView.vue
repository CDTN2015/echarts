<template>
  <div ref="main" id="demoDiv"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "TooltipView",
  mounted() {
    let myEcharts = echarts.init(this.$refs.main);
    myEcharts.setOption({
      title: {
        text: "我是标题",
      },
      tooltip: {
        trigger: "axis", // 触发类型："axis"坐标轴触发，"item"图形内触发
        // 坐标轴指示器
        axisPointer: {
          type: "shadow", // line实线，shadow阴影，cross十字准星
        },
        // showContent: false, //是否显示提示信息
        // triggerOn: 'mouseover' // 触发时机'click'鼠标点击时触发
        // 悬浮层样式
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 5,
        textStyle: {
          color: "yellow",
        },
        // 自定义提示框信息，字符串模板/回调函数
        // 模板变量{a}/{b}/{c},分别表示系列名/数据名/数据值
        // formatter: '{a}--{b}的成绩是{c}'
        formatter(params) {
          for (let i = 0; i < params.length; ++i) {
            return (
              "名字:" +
              params[i].name +
              "--价格:" +
              params[i].data.value +
              "--采摘日期:" +
              params[i].data.date
            );
          }
        },
      },
      xAxis: {
        data: ["苹果", "西瓜", "香蕉", "橘子"],
      },
      yAxis: {},
      series: {
        name: "水果",
        type: "bar",
        // 数组对象
        data: [
          { value: "5", date: "2020-1-1" },
          { value: "6", date: "2023-1-1" },
          { value: "8", date: "2028-1-1" },
          { value: "10", date: "2030-1-1" },
        ],
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
