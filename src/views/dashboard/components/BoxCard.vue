<template>
  <el-card shadow="hover" class="mgb20" style="height:252px;">
    <div class="user-info">
      <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" class="user-avator" alt/>
      <div class="user-info-cont">
        <div class="user-info-name">{{name}}</div>
        <!--<div>{{role}}</div>-->
      </div>
    </div>
    <div class="user-info-list">
      上次登录时间：
      <span>2019-12-15</span>
    </div>
    <div class="user-info-list">
      上次登录地点：
      <span>yantai</span>
    </div>
  </el-card>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    filters: {
      statusFilter(status) {
        const statusMap = {
          success: 'success',
          pending: 'danger'
        }
        return statusMap[status]
      }
    },
    data() {
      return {
        statisticsData: {
          article_count: 1024,
          pageviews_count: 1024
        }
      }
    },
    computed: {
      ...mapGetters([
        'name',
        'avatar',
        'roles'
      ])
    }
  }
</script>


<style scoped>
  /*"用户信息"： 样式控制*/
  .user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
  }

  .user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  .user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
  }

  .user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
  }

  .user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
  }

  .user-info-list span {
    margin-left: 70px;
  }

  .mgb20 {
    margin-bottom: 20px;
  }
</style>
