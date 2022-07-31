<template>
  <div class="base-checkbox">
    <input type="checkbox" class="checkbox" />
    <span class="title-checkbox">{{ filterContent }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  components: {},
  props: {
    //sửa lại cách đặt tên

    filterContent: {
      type: String,
      default: "CheckBox",
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /**
     * Thiết lập trang trạng thái checkbox
     * Author: DHTHINH (18/07/2022)
     */
  },
};
</script>

<style>
.base-checkbox {
  display: flex;
  padding: 8px 0px;
}
.checkbox {
  appearance: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin: 0px;
  border: 1px solid #7c869c;
}

.checkbox:checked {
  color: #fff;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background: transparent url(../../assets/Resource/img/icon_collection.svg)
    no-repeat -176px -16px;
  border: none;
}

.title-checkbox {
  font-family: Regular;
  font-size: 13px;
  padding-left: 8px;
}
</style>