<template>
  <div class="tooltip">
    <p class="subtitle-two content">{{ contentTooltip }}</p>
  </div>
</template>

<script>
export default {
  name: 'TooltipComp',
  props: {
    contentTooltip: {
      type: String,
      default: 'Test Tooltip',
    },
  },
}
</script>

<style>
.show-tooltip {
  position: relative;
}

.tooltip {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 4px;
  background: #424857;
  box-shadow: 0 0 10px #d5d5d5;
  z-index: 3;
  display: none;
  width: max-content;
  padding: 12px;
  min-height: 32px;
  max-width: 250px;
}

.tooltip::after {
  position: absolute;
  content: '';
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #424857;
}

.tooltip > .content {
  color: #fff;
  text-align: left;
  margin: 0;
  line-height: 18px;
}

.show-tooltip:hover .tooltip {
  display: block;
}
</style>
