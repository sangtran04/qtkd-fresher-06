<template>
  <div class="sidebar__left">
    <div class="sidebar__left--saved">
      <div class="saved-title">BỘ LỌC ĐÃ LƯU</div>
      <div class="icon-up"></div>
    </div>

    <div class="sidebar__left--filter">
      <div class="filter-title">LỌC TIỀM NĂNG THEO</div>
      <div class="icon-search"></div>
    </div>

    <div class="sidebar__left--listfilter">
      <BaseCheckbox
        v-for="filt in filter"
        :key="filt.id"
        :nameFilter="filt.tagFilter"
      ></BaseCheckbox>
    </div>
  </div>
</template>
<script>
import FILTER_LIST from "@/constants/FilterList";
import { ref } from "vue";
import BaseCheckbox from "../base/BaseCheckbox.vue";
export default {
  components: { BaseCheckbox },
  setup() {
    const filter = ref(FILTER_LIST);
    return {
      filter,
    };
  },
};
</script>
<style>
@import url("../../assets/icon.css");
.sidebar__left {
  display: flex;
  flex-direction: column;
  width: 240px;
  border-right: solid 1px #ccc;
}

.sidebar__left--saved {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding-right: 14px;
}
.icon-down .saved-title {
  height: 32px;
}

.sidebar__left--filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding-right: 14px;
  list-style: none;
}
</style>
