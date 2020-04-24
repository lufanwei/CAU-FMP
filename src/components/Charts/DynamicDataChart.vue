<template>
  <div ref="DynamicChart" :id="id" :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
  import echarts from 'echarts'
  import resize from './mixins/resize'
  import {getTodayData} from '@/api/breed-control'

  export default {
    mixins: [resize],
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      id: {
        type: String,
        default: 'DynamicDataChart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '300px'
      },
      DynamicData: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        DynamicChart: null
      }
    },
    watch: {
      DynamicData: {
        deep: true,
        handler(val) {
          console.log('watch')
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
      if (!this.DynamicChart) {
        return
      }
      this.DynamicChart.dispose()
      this.DynamicChart = null
    },
    methods: {
      initChart() {
        this.DynamicChart = echarts.init(document.getElementById(this.id))
        this.setOptions(this.DynamicData)
      },
      setOptions(usingData) {
        this.DynamicChart.setOption(
          {
            title: {
              text: '动态数据 + 时间坐标轴'
            },
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                params = params[0];
                var date = new Date(params.name);
                return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
              },
              axisPointer: {
                animation: false
              }
            },
            xAxis: {
              type: 'time',
              splitLine: {
                show: false
              }
            },
            yAxis: {
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                show: false
              }
            },
            series: [{
              name: '模拟数据',
              type: 'line',
              showSymbol: false,
              hoverAnimation: false,
              data: usingData
            }]
          }
        );
      }
    }
  }
</script>

<style scoped>

</style>
