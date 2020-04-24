<template>
  <div style="padding:30px;">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          养殖基地管理
          <baseInfoTable />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          养殖车间管理
          <workshopInfoTable />
        </div>
      </el-col>
    </el-row>
    <!--<el-row>-->
      <!--<el-col :span="24">-->
        <!--<div class="grid-content bg-purple-dark">-->
          <!--养殖池管理-->
          <!--<poolInfoTable />-->
        <!--</div>-->
      <!--</el-col>-->
    <!--</el-row>-->
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import baseInfoTable from '../components/baseInfoTable'
  import workshopInfoTable from '../components/workshopInfoTable'
  import poolInfoTable from '../components/poolInfoTable'
  export default {
    components:{
      baseInfoTable,
      workshopInfoTable,
      poolInfoTable,
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>
<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }
</style>
