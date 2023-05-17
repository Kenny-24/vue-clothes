<template>
  <header>
    <!-- 头部菜单栏 -->
    <div class="header">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#fff"
        text-color="black"
        active-text-color="grey"
        @select="handleSelect"
      >
        <div>
          <img src="../assets/logo.svg" class="logo" alt="logo" />
        </div>
        <div class="menu-item">
          <el-menu-item index="1"> 春 </el-menu-item>
          <el-menu-item index="2"> 夏 </el-menu-item>
          <el-menu-item index="3"> 秋 </el-menu-item>
          <el-menu-item index="4"> 冬 </el-menu-item>
        </div>
        <div class="search-icon" @click="handleIconClick">
          <el-icon v-if="!isSearch" class="el-input__icon">
            <Search />
          </el-icon>
          <div v-else>取消</div>
        </div>
      </el-menu>
      <SearchContent v-if="isSearch" />
    </div>
  </header>
  <div style="height: 58px"></div>

  <!-- 视频 -->
  <div class="video-container">
    <video
      muted="true"
      loop="true"
      autoplay="true"
      src="https://images.all-free-download.com/footage_preview/mp4/wild_butterfly_flying_on_beautiful_flowers_6892048.mp4"
      class="video"
      id="video-home"
      data-object-fit=""
    ></video>
  </div>
  <!-- 轮播 -->
  <Carousel />
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import Carousel from "@/common/carousel.vue";
import SearchContent from "@/common/search.vue";
import { Search } from "@element-plus/icons-vue";
export default defineComponent({
  name: "Home",
  components: { Search, Carousel, SearchContent },
  setup() {
    // 顶部菜单
    const isSearch = ref(false);

    const activeIndex = ref("0");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleIconClick = (ev: Event) => {
      // console.log(ev);
      isSearch.value = !isSearch.value;
    };
    onMounted(() => {});
    return {
      isSearch,
      activeIndex,
      handleSelect,
      handleIconClick,
    };
  },
});
</script>
<style scoped>
.logo {
  height: 2em;
}
.header {
  position: fixed;
  z-index: 999;
}

.el-menu-demo {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}
.menu-item {
  display: flex;
  flex-direction: row;
}

.search-icon {
  user-select: none;
  cursor: pointer;
  display: flex;
  width: 50px;
}

/* 视频 */
.video-container {
  padding: 30px 0;
}
.video {
  width: 100vw;
  height: 300px;
}
</style>
