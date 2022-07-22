<template>
  <div class="crm-tooltip" data-tooltip="thinh day nha"></div>
</template>

<script>
export default {
  name: "BaseTooltip",
  props: {
    tooltipContent: {
      type: String,
      default: "tool tip",
    },
    // isLeft: {
    //     type: Boolean,
    //     default: "false",
    // },
    // isRight: {
    //     type: Boolean,
    //     default: "false",
    // },
    // isTop: {
    //     type: Boolean,
    //     default: "false",
    // },
    // isBottom: {
    //     type: Boolean,
    //     default: "false",
    // },
  },

  computed: {

  }
};
</script>

<style>
.crm-tooltip {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
}
div[data-tooltip] {
  
  position: relative;
}
div[data-tooltip]::before {
  content: attr(data-tooltip);
  position: absolute;
  background-color: #333;
  font-size: 13px;
  color: #fff;
  text-align: center;
  padding: 3px 5px;
  border-radius: 4px;
  bottom: 0;
  line-height: 1rem;
  left: -40%;
  right: -40%;
  transform: scale(0);
  opacity: 0;
  transition: 0.25s ease-in-out;
}
div[data-tooltip]::after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  left: calc(50% - 2.5px);
  bottom: 100%;
  transform: scale(0);
  opacity: 0;
  transition: 0.25s ease-in-out;
}

/* Mặc định thì cho ẩn đi khi hover chuột vào mới hiện lên */
div[data-tooltip]:hover::before {
  transform: scale(1);
  bottom: 100%;
  opacity: 1;
}
div[data-tooltip]:hover::after {
  transform: scale(1);
  bottom: calc(100% - 5px);
  opacity: 1;
}
</style>