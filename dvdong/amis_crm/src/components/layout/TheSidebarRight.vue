<template>
  <div v-show="isHide" class="sidebar__right" id="sidebar__right">
    <div class="sidebar-right__head">
      <div class="sidebar-right__icon">
        <div class="icon icon--phone"></div>
      </div>
      <div class="sidebar-right__icon"><div class="icon icon--task"></div></div>
      <div class="sidebar-right__icon"><div class="icon icon--demo"></div></div>
      <div class="sidebar-right__icon">
        <div class="icon icon--email"></div>
      </div>
    </div>
    <div class="sidebar-right__title">Lịch sử giao dịch</div>
    <div class="sidebar-right__content">
      <div class="sidebar-right__note">
        <div class="note-icon">
          <div class="icon icon--note"></div>
        </div>
        <div class="note-detail">
          <div style="font-family: Roboto Bold; padding-bottom: 8px">Ghé thăm - Ông Nguyễn Văn A - Cty TTC</div>
          <div style="color=#333">ghi chú</div>
          <div class="note__content">Nguyễn Văn Hà (A006) - <span>12/08/2021</span></div>
        </div>
      </div>
      <!-- <div class="content-empty">
        <div class="icon-empty-small"></div>
        <span>Không có dữ liệu</span>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isHide: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style>
</style>