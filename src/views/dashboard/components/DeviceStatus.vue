<template>
  <el-row :gutter="18" class="mgb20">
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
             class="image">
        <div style="padding: 10px;">
          <span>设备总数量</span>
          <div class="bottom clearfix">
            <router-link to="/equipmentInformation">查看详情</router-link>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
             class="image">
        <div style="padding: 10px;">
          <span>开机设备总数量</span>
          <div class="bottom clearfix">
            <router-link to="/equipmentInformation">查看详情</router-link>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
             class="image">
        <div style="padding: 10px;">
          <span>关机设备总数量</span>
          <div class="bottom clearfix">
            <router-link to="/equipmentInformation">查看详情</router-link>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
             class="image">
        <div style="padding: 10px;">
          <span>异常设备总数量</span>
          <div class="bottom clearfix">
            <router-link to="/equipmentInformation">查看详情</router-link>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "DeviceStatus"
  }
</script>

<style scoped>
  .mgb20 {
    margin-bottom: 20px;
  }
</style>
