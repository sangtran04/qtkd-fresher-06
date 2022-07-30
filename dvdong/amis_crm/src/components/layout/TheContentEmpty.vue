<template>
  <div class="content">
    <div class="sidebar-right-close" onclick="closeSidebar()">
      <div class="icon-next-page"></div>
    </div>
    <div class="sidebar-left-close">
      <div class="icon-pre-page"></div>
    </div>
    <div class="table__content">
      <div class="abc">
        <!-- hiển thị màn hình khi không có bản ghi nào -->
        <div class="content-empty">
          <div class="icon-empty-big"></div>
          <span style="margin-top: 8px">Không có bản ghi nào</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function closeSidebar() {
  console.log("adsdas");
}

import BaseCheckbox from "../base/BaseCheckbox.vue";
export default {
  components: {
    BaseCheckbox,
  },
  methods: {
    closeSidebar() {
      console.log("dấdgjiu");
    },
  },
};
</script>

<style>
.btn-settings-column {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.icon-sticky-setting-column {
  z-index: 1001;
  top: 9px;
  right: 2px;
  background-color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  /* overflow: hidden; */
  box-shadow: 0 2px 6px #00000052;
}
.icon-sticky-setting-column:hover {
  background-color: #d3d7de;
  border-radius: 50%;
}
</style>