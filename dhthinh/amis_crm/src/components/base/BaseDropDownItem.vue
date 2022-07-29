<template>
  <div class="item" @click="doFunction">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseDropDownItem",
  props: {
    //Truyền vào một mảng các item
    item: {
      type: Object,
      required: true,
    },
    //Truyền vào một function
    closeDropdown: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    doFunction() {
      console.log(this.item.link);
      this.closeDropdown();
    },
  },
};
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
  font-size: 13px;
}
.item:hover {
  background: #f0f2f4 !important;
  color: #1f2229;
}
</style>