<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <box-card/>
      <MessageBox/>
    </el-col>
    <el-card :span="12">
      <fieldset>
        <legend>检测场景</legend>
        <ScenePlay/>
      </fieldset>
      <fieldset>
        <legend>设备情况</legend>
        <DeviceStatus/>
      </fieldset>
    </el-card>
    <el-col>
      <fieldset>
        <legend>监测指标概览</legend>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card shadow="hover">
              <IoTStaticChart :BarData="IoTStaticData"></IoTStaticChart>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover">
              <DeviceStatusChart :PieData="DeviceStatusData"></DeviceStatusChart>
            </el-card>
          </el-col>
        </el-row>
      </fieldset>
    </el-col>
    <el-col :span="24">
      <fieldset>
        <legend>养殖场景地图</legend>
        <el-row>
          <el-card shadow="hover">
            <BaiduMap/>
          </el-card>
        </el-row>
      </fieldset>
    </el-col>
  </el-row>
</template>

<script>
  import {mapGetters} from 'vuex'
  import DeviceStatus from './components/DeviceStatus'
  import BoxCard from './components/BoxCard'
  import ScenePlay from './components/ScenePlay'
  import MessageBox from "./components/MessageBox";
  import IoTStaticChart from '@/components/Charts/BarChart'
  import DeviceStatusChart from '@/components/Charts/PieChart'
  import BaiduMap from "@/components/BaiduMap";
  import {getIotIndexStatic, getDeviceStatusStatic} from '@/api/dashboard'

  export default {
    name: 'Dashboard',
    components: {
      DeviceStatus,
      MessageBox,
      BoxCard,
      ScenePlay,
      IoTStaticChart,
      DeviceStatusChart,
      BaiduMap
    },
    data() {
      return {
        IoTStaticData: {},
        DeviceStatusData: [],
      }
    },
    mounted() {
      // 刚刚进入页面时请求数据
      getIotIndexStatic().then(response => {
        // console.log("前端收到的返回数据")
        this.IoTStaticData = response.data
      })
      getDeviceStatusStatic().then(
        response => {
          console.log("前端收到的返回数据")
          console.log(response.data)
          this.DeviceStatusData = response.data
        })
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }

</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }
    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }

  .map {
    width: 100%;
    height: 300px;
  }
</style>
