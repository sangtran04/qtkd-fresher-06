<template>
  <div class="baseTag">
    <button type="button" :class="{ 'tag-icon': hasIconFunction }">
      {{ tagContent }}
      <div v-if="hasIconFunction" class="icon-multip"></div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    // chỉ định nội dung thẻ tag
    tagContent: {
      type: String,
      required: true,
    },
    // chỉ định màu nền
    backgroundColor: {
      type: String,
      default: '#C5C9D3',
    },
    // chỉ định có icon không ?
    hasIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // kiểm tra prop hasIcon có được truyền vào không ?
    hasIconFunction() {
      return this.hasIcon
    },
  },
}
</script>

<style scoped>
.baseTag > button {
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 8px;
  height: 24px;
  border: none;
  cursor: pointer;
  background-color: v-bind(backgroundColor);
}

.icon-multip {
  margin: 0 4px;
}

.tag-icon {
  padding: 0 0 0 8px !important;
}
</style>
