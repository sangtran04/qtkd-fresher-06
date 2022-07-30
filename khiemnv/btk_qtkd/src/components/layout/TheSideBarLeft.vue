<template>

  <div v-if="showLeftSidebar" class="sidebar__left">
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
 data() {
        return {

       showLeftSidebar: true
        }
    },
      methods: {
    //Hàm ẩn hiện sidebar
    toggleLeftSidebar() {
     this.showLeftSidebar = !this.showLeftSidebar;
    },

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
  .collapse__left {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  cursor: pointer;
  box-shadow: 1px 0 4px #00000029;
  border-radius: 0 6px 6px 0;
  background-color: #fff;
  z-index: 1;
  position: absolute;
  left: 249px;
  top: calc(50% - 20px);
  width: 12px !important;
  height: 40px !important;
  padding: 12px 0 !important;
}
.collapse__left--hide {
  display: none;
  flex-direction: row-reverse;
  align-items: center;
  cursor: pointer;
  box-shadow: 1px 0 4px #00000029;
  border-radius: 0 6px 6px 0;
  background-color: #fff;
  z-index: 1;
  position: absolute;
  left: 0px;
  top: calc(50% + 50px);
  width: 12px !important;
  height: 40px !important;
  padding: 12px 0 !important;
}
.collapse__left--hide:hover {
  width: 20px !important;
}
.collapse__left:hover {
  width: 20px !important;
}
.collapse {
  position: absolute;
  top: 50%;
  left: 90%;
  background-color: red;
}
</style>
