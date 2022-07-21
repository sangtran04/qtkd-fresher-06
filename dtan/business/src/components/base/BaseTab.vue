<template>
    <div class="list__item">
        <slot></slot>
        <div class="item__text" :class="{'item__text--selected':isChecked}">{{tabContent}}</div>
        <div :class="{'item--selected': isChecked}"></div>
    </div>
</template>
<script>
export default {
  props: {
    // chỉ định nội dung cho tab
    tabContent: {
      type: String,
      required: true,
    },
    // tab có đang được chọn không ?
    checked: {
      type: Boolean,
      default: false,
    },
    colorTextCheck:{
        type: String,
        default: '#4262F0',
    }
  },
  computed: {
    // hàm kiểm tra: slider tab có được chọn không ?
    isChecked() {
      return this.checked
    },
  },
}
</script>

<style>
.list__function {
    display: flex;
}

.list__item {
    display: flex;
    align-items: center;
    height: 37px;
    font-size: 13px;
    position: relative;
    cursor: pointer;
    padding: 0 16px;
}

.item__text {
    margin-left: 8px;
    position: relative;
    top: 1px;
}
.item__text--selected{
    color:#4262F0;
    font-weight: 500;
}

.list__item:hover {
    background-color: #f0f2f4;
    border-radius: 4px;
}

.list__function+.list__item {
    margin-left: 12px;
}

.item--selected {
    position: absolute;
    top: 37px;
    left: 18px;
    width: calc(100% - 32px);
    border-bottom: 4px solid #4262F0;
    width: 82px;
}
</style>