<template>
  <div ref="myChart" id="myChart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "GraphView",
  data() {
    return {
      // 节点数据
      list: [
        {
          name: "韦小宝",
          id: "1",
          symbolSize: 30, // 点大小
        },
        {
          name: "方怡",
          id: "2",
          symbolSize: 30, // 点大小
        },
        {
          name: "双儿",
          id: "3",
          symbolSize: 30, // 点大小
        },
        {
          name: "茅十八",
          id: "4",
          symbolSize: 30, // 点大小
        },
        {
          name: "吴六奇",
          id: "5",
          symbolSize: 30, // 点大小
        },
      ],
      // 关系数据
      num: [
        {
          source: "1", // 节点名称
          target: "2", // 目标节点名称
          relation: {
            name: "老婆",
            id: "1",
          },
        },
        {
          source: "1", // 节点名称
          target: "4", // 目标节点名称
          relation: {
            name: "兄弟",
            id: "1",
          },
        },
        {
          source: "4", // 节点名称
          target: "1", // 目标节点名称
          relation: {
            name: "兄弟",
            id: "1",
          },
        },
        {
          source: "3", // 节点名称
          target: "5", // 目标节点名称
          relation: {
            name: "义妹",
            id: "1",
          },
        },
      ],
    };
  },
  mounted() {
    let myEcharts = echarts.init(this.$refs.myChart);
    let option = {
      series: [
        {
          type: "graph", // 设置漏斗图
          data: this.list,
          layout: "force", // 引导布局
          itemStyle: {
            color: "#95dcb2",
          },
          label: {
            show: true,
            position: "bottom",
            distance: 6, // 距离图形的位置
            fontSize: 16,
            align: "center",
          },
          force: {
            repulsion: 100, // 点与点间距离
            gravity: 0.01, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢
            edgeLength: 200, // 边距
          },
          links: this.num,
          edgeLabel: {
            show: true,
            position: "middle",
            formatter: (params) => {
              return params.data.relation.name;
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
