<template>
  <div class="item" @click="doFunc">
    <slot></slot>
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
    doFunc() {
      console.log(this.item.link)
      this.closeDropdown()
    },
  },
}
</script>

<style scoped>
.item {
  width: 100%;
  cursor: pointer;
  text-align: left;
  padding: 9px 11px 8px 16px;
  display: flex;
  align-items: center;
  min-height: 32px;
  box-sizing: border-box;
}
.item:hover {
  background: #f0f2f4 !important;
  color: #1f2229;
}
</style>