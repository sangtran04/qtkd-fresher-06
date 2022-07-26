<template>
  <div class="item" @click="onClick">
    <slot></slot>
    <div class="icon-selected"></div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    closeDropdown: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    // Bắt sự kiện on click
    onClick() {
      // Đóng Dropdown
      this.closeDropdown()

      // Chuyển đổi nội dung của dropdown
      this.$emit('changeContent', this.item.text)
    },
  },
}
</script>

<style scoped>
.item.activeItem {
  color: #4262f0;
}
.item.activeItem > .icon-selected {
  width: 16px;
  height: 16px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -336px -144px;
}
.item {
  width: 100%;
  cursor: pointer;
  text-align: left;
  padding: 9px 11px 8px 16px;
  display: flex;
  align-items: center;
  min-height: 32px;
  justify-content: space-between;
}
.item:hover {
  background: #f0f2f4 !important;
  color: #1f2229;
}
</style>
