<template>
  <div>{{ readersNumber }} {{ book.title }}7777</div>
</template>
<script lang="ts">
import { ref, reactive, defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const readersNumber = ref(0);
    const book = reactive({ title: "Vue 3 Guide" });

    // expose to template
    return {
      readersNumber,
      book,
    };
  },
});
</script>
<style scoped></style>
