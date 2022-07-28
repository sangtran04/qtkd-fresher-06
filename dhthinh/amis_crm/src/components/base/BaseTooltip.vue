<template>
  <div class="crm-tooltip">
    <p class="subtitle-two content">{{ contentTooltip }}</p>
  </div>
</template>

<script>
export default {
  name: 'BaseTooltip',
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

.crm-tooltip {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  font-size: 13px;
  font-family: Roboto;
  transform: translateX(-50%);
  border-radius: 4px;
  background: #424857;
  box-shadow: 0 0 10px #d5d5d5;
  z-index: 10;
  display: none;
  width: max-content;
  padding: 12px;
  min-height: 32px;
  max-width: 250px;
}

.crm-tooltip::after {
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

.crm-tooltip > .content {
  color: #fff;
  text-align: center;
  margin: 0;
}

.show-tooltip:hover .crm-tooltip {
  display: block;
}
</style>
