<template>
  <baidu-map class="map" :center="pound_pos" :zoom="zoom" @ready="handler">
    <bm-marker :position="pound_pos" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="pound_name" :labelStyle="labelStyle" :offset="offset"/>
    </bm-marker>
  </baidu-map>
</template>

<script>
  import Vue from 'vue'
  import BaiduMap from 'vue-baidu-map'
  Vue.use(BaiduMap, {
    ak: '5DMd5GmUZKC7NVtYx75kRQ74GU9LmYgC'
  });

  export default {
    name: "index",
    data() {
      return {
        pound_name: '',
        pound_pos: {lng: 0, lat: 0},
        labelStyle: {color: '', fontSize: ''},
        offset: {width: 0, height: 0},
        zoom: 0
      }
    },
    methods: {
      handler({BMap, map}) {
        console.log(BMap, map);
        this.pound_pos.lng = 116.404;
        this.pound_pos.lat = 39.915;
        this.zoom = 15;
        this.labelStyle.color = 'red';
        this.labelStyle.fontSize = '14px';
        this.offset.width = -35;
        this.offset.height = 30;
      }
    },
  }

</script>

<style scoped>

</style>
