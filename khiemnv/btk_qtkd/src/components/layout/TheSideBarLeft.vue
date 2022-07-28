<template>
  <div class="sidebar__left">
    <div class="sidebar__left--saved">
      <div class="saved-title">BỘ LỌC ĐÃ LƯU</div>
       <div class="saved-icon"><div class="icon-up"></div></div>
    </div>

    <div class="sidebar__left--filter">
      <div class="filter-title">LỌC TIỀM NĂNG THEO</div>
      <div class="filter-search">      <div class="icon-search"></div></div>

    </div>

    <div class="sidebar__left--listfilter">
      <BaseCheckbox
        v-for="filt in filter"
        :key="filt.id"
        :nameFilter="filt.tagFilter"
      ></BaseCheckbox>
    </div>
    <div class="sidebar__left--viewmore">
      <div class="viewmore-line1"></div>
      <div class="viewmore-text" @click="viewMore">Xem thêm</div>
      <div class="viewmore-line2"></div>
     
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
<style scoped>
@import url("../../assets/icon.css");
* {
  color: #586074;
  font-size: 13px;
  font-family: Roboto Arial, Helvetica, sans-serif;
}
.sidebar__left {
  display: flex;
  flex-direction: column;
  width: 250px;
  border-right: solid 1px #ccc;
  position: relative;
}

.sidebar__left--saved {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 16px;
  margin: 8px 0 0;
}
.icon-down .saved-title {
  height: 32px;
}
/* .sidebar__left--listfilter{
  margin-top: 96px;
  position: fixed;
  width: inherit;
  overflow: scroll;
  height: 100%;
} */
.sidebar__left--filter {

  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  min-height: 40px;
  margin: 8px 0 0;
  list-style: none;
  
}
.filter-title, .saved-title:hover{
 
        cursor: pointer;
         }

.filter-title{
  padding: 8px 16px;
}
.filter-search{
  padding: 0 16px 0 0;
}
.icon-search {
  margin: 4px 0 4px 4px;
}
.saved-icon {
  width: 24px;
  height: 24px;
}
.saved-icon:hover , .filter-search:hover {

       border-radius: 100%;
       background-color: #f0f2f4;

}
.sidebar__left--viewmore {
display: flex;
align-content: center;
justify-content: space-between;
align-items: center;
margin: 8px 8px;

}
.viewmore-line1 {
  height: 1px;
  align-self: center;
  background: #4262f0;
  width: 70px;
}
.viewmore-line2 {
    align-self: center;
      height: 1px;
  background:#4262f0;
    width: 70px;
}
  .viewmore-text {
    color: #4262f0;
  
  }
</style>
