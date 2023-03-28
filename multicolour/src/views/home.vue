<template>
  <header>
    <!-- 头部菜单栏 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-sub-menu index="1">
        <template #title>Workspace</template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>Workspace</template>
        <el-menu-item index="3-1">item one</el-menu-item>
        <el-menu-item index="3-2">item two</el-menu-item>
        <el-menu-item index="3-3">item three</el-menu-item>
      </el-sub-menu>
      <div class="search-icon">
        <el-icon class="el-input__icon" @click="handleIconClick">
          <Search />
        </el-icon>
      </div>
    </el-menu>

    <!-- 搜索 -->
    <div class="search-container">
      <el-autocomplete
        size="large"
        v-model="state"
        :fetch-suggestions="querySearch"
        popper-class="my-autocomplete"
        placeholder="请输入搜索内容"
        @select="handleSelectInput"
      >
        <template #prefix>
          <el-icon class="search-icon-static"> <Search /> </el-icon
        ></template>
        <template #default="{ item }">
          <div class="value">{{ item.value }}</div>
          <el-image
            style="width: 100px; height: 80px"
            :src="item.url"
            fit="scale-down"
          />
        </template>
      </el-autocomplete>
    </div>
  </header>

  <!-- 视频 -->
  <div class="video-container">
    <video
      muted="true"
      loop="true"
      autoplay="true"
      src="//china-img.soulapp.cn/admin/2020-06-24/302e6662-a360-4cdd-8a87-966ed18c4554.mp4"
      class="video"
      id="video-home"
      data-object-fit=""
    ></video>
  </div>

  <!-- 轮播 -->
  <el-carousel arrow="never" trigger="click" height="500px">
    <el-carousel-item v-for="item in pictures" :key="item">
      <el-image
        style="width: 100vw; height: 500px"
        :src="item.url"
        fit="fill"
      />
    </el-carousel-item>
  </el-carousel>
</template>
<script lang="ts">
import { ref, reactive, defineComponent, onMounted } from "vue";
import { Search } from "@element-plus/icons-vue";
interface LinkItem {
  value: string;
  url: string;
}
export default defineComponent({
  name: "Home",
  components: { Search },
  setup() {
    // head 1
    const activeIndex = ref("0");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };

    // head 2
    const state = ref("");
    const links = ref<LinkItem[]>([]);

    const querySearch = (queryString: string, cb: any) => {
      const results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value;
      // call callback function to return suggestion objects
      cb(results);
    };
    const createFilter = (queryString: any) => {
      return (restaurant: any) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    };
    const loadAll = () => {
      return [
        {
          value: "vue",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          value: "element",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          value: "cooking",
          url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ];
    };
    const handleSelectInput = (item: LinkItem) => {
      console.log(item);
    };

    const handleIconClick = (ev: Event) => {
      console.log(ev);
    };

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
      {
        url: "https://img2.baidu.com/it/u=140409170,1251714078&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
      },
      {
        url: "https://img2.baidu.com/it/u=917382917,4109985544&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
      },
      {
        url: "https://img2.baidu.com/it/u=2802398382,3317105349&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
      },
    ]);
    onMounted(() => {
      links.value = loadAll();
    });
    return {
      activeIndex,
      handleSelect,
      handleSelectInput,
      state,
      querySearch,
      handleIconClick,
      pictures,
    };
  },
});
</script>
<style scoped>
.el-menu-demo {
  display: flex;
  justify-content: center;
}
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete li .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete li .highlighted .addr {
  color: #ddd;
}
/* 搜索icon */
.search-icon {
  position: absolute;
  display: flex;
  align-items: center;
  height: 5em;
  width: 5em;
  right: 2px;
}
.el-icon {
  cursor: pointer;
  font-size: 24px;
  color: aliceblue;
}
.search-icon-static {
  color: rgba(91, 91, 91, 0.486);
}
.search-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(152, 218, 249);
  height: 60px;
  width: 100vw;
  z-index: 10000;
}
</style>
