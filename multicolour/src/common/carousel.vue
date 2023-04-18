<template>
  <div class="carousel-picture">
    <el-carousel arrow="never" trigger="click" height="300px" pause-on-hover>
      <el-carousel-item v-for="item in pictures" :key="item">
        <el-image style="height: 300px" :src="item.url" fit="fill" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "Carousel",
  components: {},
  setup() {
    // 轮播
    const pictures = ref([
      {
        url: "https://img0.baidu.com/it/u=202361835,3806649081&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
      },
      {
        url: "https://img0.baidu.com/it/u=3384203889,1866860131&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
      },
      {
        url: "https://img2.baidu.com/it/u=2988589017,2923917558&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
      },
    ]);

    return {
      pictures,
    };
  },
});
</script>
<style scoped>
/* 轮播图 */
.carousel-picture {
  margin: 0 auto;
  width: 500px;
}
</style>
