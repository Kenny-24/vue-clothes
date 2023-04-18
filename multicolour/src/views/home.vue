<template>
  <header>
    <!-- 头部菜单栏 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#fff"
      text-color="black"
      active-text-color="grey"
      @select="handleSelect"
    >
      <el-menu-item index="1"> 春 </el-menu-item>
      <el-menu-item index="2"> 夏 </el-menu-item>
      <el-menu-item index="3"> 秋 </el-menu-item>
      <el-menu-item index="4"> 冬 </el-menu-item>

      <div class="search-icon" @click="handleIconClick">
        <el-icon v-if="!isSearch" class="el-input__icon">
          <Search />
        </el-icon>
        <div v-else>取消</div>
      </div>
    </el-menu>

    <!-- 搜索 -->
    <SearchContent v-if="isSearch" />
  </header>

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
  <!-- <Carousel /> -->
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import Carousel from "@/common/carousel.vue";
import SearchContent from "@/common/search.vue";
import { Search } from "@element-plus/icons-vue";
interface LinkItem {
  value: string;
  url: string;
}
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
.el-menu-demo {
  display: flex;
  justify-content: center;
}
.search-icon {
  user-select: none;
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  top: 1.5em;
  width: 5em;
  right: 2px;
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
