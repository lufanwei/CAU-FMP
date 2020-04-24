<template>
  <div ref="BarChart" :id="id" :class="className" :style="{height:height,width:width}"></div>
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
        default: 'BarChart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '300px'
      },
      BarData: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        BarChart: null
      }
    },
    watch: {
      BarData: {
        deep: true,
        handler(val) {
          console.log('watch in bar')
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
      if (!this.BarChart) {
        return
      }
      this.BarChart.dispose()
      this.BarChart = null
    },
    methods: {
      initChart() {
        this.BarChart = echarts.init(document.getElementById(this.id))
        this.setOptions(this.BarData)
      },
      setOptions(usingData) {
        this.BarChart.setOption(
          {
          title: {
            text: 'IoT 统计'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data: ['养殖池数量', '设备数量', '监测指标数量']
          },
          grid: {
            left: 100
          },
          toolbox: {
            show: true,
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'value',
            name: '数量',
            axisLabel: {
              formatter: '{value}'
            }
          },
          yAxis: {
            type: 'category',
            inverse: true,
            data: ['循环水', '鱼菜共生', '海水稻'],
            axisLabel: {
              formatter: function (value) {
                return value;
              }
            }
          },
          series: [
            {
              name: '养殖池数量',
              type: 'bar',
              data: usingData.pound_num,
              label: {
                normal: {
                  show: true,
                  textBorderColor: '#333',
                  textBorderWidth: 2
                }
              },
            },
            {
              name: '设备数量',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  textBorderColor: '#333',
                  textBorderWidth: 2
                }
              },
              data: usingData.device_num
            },
            {
              name: '监测指标数量',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  textBorderColor: '#333',
                  textBorderWidth: 2
                }
              },
              data: usingData.index_num
            }
          ]
        }
        );
      }
    }
  }
</script>

<style scoped>

</style>
