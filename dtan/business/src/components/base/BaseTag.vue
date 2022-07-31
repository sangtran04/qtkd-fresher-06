<template>
  <div class="tagname">
    <div class="tagname__content">{{ contentText }}</div>
    <div v-if="hasIconCloseFunc" class="tagname__icon">
      <div class="tagname__icon__close"></div> 
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // Nội dung của tag
    contentText: {
      type: String,
      default: () => "tagname",
    },
    // đặt chiều ngang cho tag
    width: {
      type: String,
      default: "90px",
    },
    // màu tag
    backgroundColor: {
      type: String,
      default: "#C5C9D3",
    },
    // tag có icon close không
    hasIconClose: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // Hàm kiểm tra icon close có hay không?
    hasIconCloseFunc(){
        return this.hasIconClose;
    }

  }
};
</script>
<style>
.tagname {
  width: v-bind(width);
  height: 24px;
  background-color: v-bind(backgroundColor);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tagname__content {
  padding-left: 8px;
}

.tagname__icon__close {
  background: url(../../assets/img/icon_collection.svg) no-repeat -84px -20px;
  width: 8px;
  height: 8px;
}

.tagname__icon {
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
}
</style>