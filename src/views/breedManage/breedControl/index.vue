<template>
  <div style="padding:30px;">
    <panel-group @handleSetLineChartData="handleSetLineChartData"/>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <DynamicLineChart :DynamicData="lineChartData"/>
    </el-row>
  </div>
</template>
<script>
  import DynamicLineChart from '@/components/Charts/DynamicDataChart'
  // import DataChart from './components/DataChart'
  import PanelGroup from './components/PanelGroup'
  import {getTodayData} from '@/api/breed-control'

  export default {
    name: 'breedControl',
    components: {
      PanelGroup,
      DynamicLineChart,
      // DataChart,
    },
    data() {
      return {
        lineChartData: [],
        index: 'Temperature',
      }
    },
    mounted() {
      // 刚刚进入页面时请求数据
      getTodayData({
        indexName: this.index,
        todayDate: '2020-02-02',
      }).then(response => {
        // console.log("前端收到的返回数据")
        this.lineChartData = response.data
      })
      // 定时请求数据
      this.showRealData(this.index)
    },
    destroyed() {
      clearInterval(window.Timer);
    },

    methods: {
      handleSetLineChartData(changeIndex) {
        console.log('点击方块请求')
        getTodayData({
          indexName: changeIndex,
          todayDate: '2020-02-02',
        }).then(response => {
          // console.log("前端收到的返回数据")
          this.lineChartData = response.data
          this.index = changeIndex
        })
      },
      showRealData() {
        //注意作用域的问题
        let self = this
        window.Timer = setInterval(function () {
          console.log('定时')
          console.log(self.index)
          getTodayData({
            indexName: self.index,
            todayDate: '2020-02-02',
          }).then(response => {
            console.log("前端定时收到的返回数据")
            console.log(response.data[0].value[1])
            self.lineChartData = response.data
          })
        }, 10000);
      },
    }
  }
</script>
