<template>
  <div class="search-container">
    <el-autocomplete
      style="width: 300px"
      v-model="state"
      :fetch-suggestions="querySearch"
      popper-class="my-autocomplete"
      placeholder="请输入搜索内容"
      @select="handleSelectInput"
    >
      <template #default="{ item }">
        <div class="value">{{ item.value }}</div>
        <el-image
          style="width: 100px; height: 80px"
          :src="item.url"
          fit="fill"
        />
      </template>
      <template #prefix>
        <el-icon class="search-icon-static"> <Search /> </el-icon
      ></template>
    </el-autocomplete>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted } from "vue";
import Carousel from "@/common/carousel.vue";
import { Search } from "@element-plus/icons-vue";
interface LinkItem {
  value: string;
  url: string;
}
export default defineComponent({
  name: "SearchContent",
  components: { Search, Carousel },
  setup() {
    // 搜索container
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
          value: "玫瑰",
          url: "https://i.pinimg.com/474x/2c/3b/92/2c3b92bebf217f75b578f153d1a85184.jpg",
        },
        {
          value: "芍药",
          url: "https://i.pinimg.com/474x/07/c4/27/07c427116962828c0be452a090ffa02c.jpg",
        },
        {
          value: "郁金香",
          url: "https://i.pinimg.com/474x/23/68/27/2368272816d0ac01b670f94b00bfa2ef.jpg",
        },
      ];
    };
    const handleSelectInput = (item: LinkItem) => {
      console.log(item);
    };

    onMounted(() => {
      links.value = loadAll();
    });
    return {
      handleSelectInput,
      state,
      querySearch,
    };
  },
});
</script>
<style scoped>
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

/* 搜索icon */

.el-icon {
  font-size: 24px;
}
.search-icon-static {
  font-size: 18px;
  color: rgba(91, 91, 91, 0.486);
}
.search-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(199, 199, 199, 0.636);
  height: 230px;
  width: 100vw;
  z-index: 1000;
}
</style>
