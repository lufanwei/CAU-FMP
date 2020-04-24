<template>
  <el-carousel :interval="4000" type="card" indicator-position="outside">
    <el-carousel-item v-for="item in imgList" :key="item.id">
      <div class="sceneName" v-text="item.mySceneName"></div>
      <router-link :to="item.url">
        <img :src="item.idView" class="banner_img"/>
      </router-link>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: "ScenePlay",
    data() {
      return {
        name: localStorage.getItem('ms_username'),
        // 图片需要引入, 否则无法显示
        imgList: [
          {
            id: 0,
            //url:'../FishVegetableEditor.vue',
            url: '/fishVegetableEditor',
            mySceneName: '鱼菜共生实时监测',
            idView: require('../../../assets/scene_images/鱼菜共生.jpg')
          },
          {
            id: 1,
            url: '/aquacultureEditor',
            mySceneName: '水产养殖实时监测',
            idView: require('../../../assets/scene_images/水产养殖.jpg')
          },
          {
            id: 2,
            url: '/seaRiceEditor',
            mySceneName: '海水稻实时监测',
            idView: require('../../../assets/scene_images/海水稻.jpg')
          },
        ],
      };
    }
  }
</script>

<style scoped>
  .sceneName {
    width: 100%;
    height: 30px;
    background-color: Transparent;
    font-family: "small", "PingFang SC", "微软雅黑", Arial, sans-serif;
  }

  .banner_img {
    width: 100%;
  }
</style>
