<template>
  <div ref="PieChart" :id="id" :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  import resize from './mixins/resize'

  export default {
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      id: {
        type: String,
        default: 'PieChart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '300px'
      },
      PieData: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        PieChart: null
      }
    },
    watch: {
      PieData: {
        deep: true,
        handler(val) {
          console.log('watch in pie')
          console.log(val)
          this.setOptions(val)
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initChart()
      })
    },
    beforeDestroy() {
      if (!this.PieChart) {
        return
      }
      this.PieChart.dispose()
      this.PieChart = null
    },

    methods: {
      initChart() {
        this.PieChart = echarts.init(document.getElementById(this.id))
        this.setOptions(this.PieData)
      },
      setOptions(usingData) {
        this.PieChart.setOption({
          title: {
            text: '设备运行情况统计'
          },
          legend: {},
          tooltip: {},
          dataset: {
            source: usingData
          },
          series: [{
            type: 'pie',
            radius: 60,
            center: ['25%', '30%'],
            encode: {
              itemName: '养殖场景',
              value: '鱼菜共生'
            }
          }, {
            type: 'pie',
            radius: 60,
            center: ['75%', '30%'],
            encode: {
              itemName: '养殖场景',
              value: '水产养殖'
            }
          }, {
            type: 'pie',
            radius: 60,
            center: ['25%', '75%'],
            encode: {
              itemName: '养殖场景',
              value: '海水稻'
            }
          }]
        });
      }
    }
  }
</script>

<style scoped>

</style>
