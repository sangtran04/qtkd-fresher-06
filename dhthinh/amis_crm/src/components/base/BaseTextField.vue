<template>
  <div class="crm-textfield" :class="{ leftLabel: leftLabel, topLabel: topLabel }">
    <label :class="{ haveLabel: isHaveLabel }" :for="labelContent">{{
      labelContent
    }}</label>
    <div class="absoluted" :class="{inputborder: isBorder}">
      <div v-if="isIconSearchFunction" class="icon-search"></div>
      <div class="icon-success"></div>
      <input
        :id="labelContent"
        :type="typeInput"
        :placeholder="placeholder"
        :readonly="readOnly"
        :class="{ 'padding-left-32': isIconSearchFunction }"
      />
      <span class="error-msg">Error message</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Chỉ định placeholder cho thẻ input
    placeholder: {
      type: String,
      required: true,
    },
    // Chỉ định attribute chỉ đọc cho thẻ input
    readOnly: {
      type: Boolean,
      default: false,
    },
    // Chỉ định nội dung thẻ label
    labelContent: {
      type: String,
    },
    // Label nằm ngang hàng với thẻ input
    leftLabel: {
      type: Boolean,
    },
    // Label nằm bên trên thẻ input
    topLabel: {
      type: Boolean,
    },
    // thêm icon tìm kiếm vào thẻ input
    isIconSearch: {
      type: Boolean,
    },
    // thiết lập chiều rộng cho input
    width: {
      type: String,
      default: "auto",
    },
    //Thiết lập màu nền cho input
    backgroundColor: {
      type: String,
      default: "rgb(240, 242, 244)",
    },
    //Có border không
    hasBorder: {
      type: Boolean,
      default: false,
    },
    colorBoder: {
      type: String,
      default: "#ccc"
    },
    typeInput: {
      type: String,
      default: "text"
    },
  },
  computed: {
    // Kiểm tra props truyền vào có label không ?
    isHaveLabel() {
      return this.labelContent ? true : false;
    },
    // Kiểm trả props truyền vào có icon search không ?
    isIconSearchFunction() {
      return this.isIconSearch ? true : false;
    },
    // Kiểm tra xem có border không
    isBorder() {
      return this.hasBorder ? true : false;
    },
    
  },
};
</script>

<style scoped>
.crm-textfield {
  display: flex;
  width: 100%;
}
.crm-textfield .topLabel {
  flex-direction: column;
}
.crm-textfield .leftLabel {
  align-items: center;
}
.crm-textfield input {
  height: 32px;
  padding: 0 16px;
  border-radius: 4px;
  border: 0;
  outline: none;
  background-color: v-bind(backgroundColor);
  width: v-bind(width);
}
.inputborder {
  border: solid 1px v-bind(colorBoder);
  border-radius: 4px;
}
.crm-textfield input::placeholder {
  font-size: 13px;
}

.crm-textfield input:hover {
  border-color: #7c869c;
}

.crm-textfield input:focus {
  border: 1px solid #4262f0;
}

.crm-textfield input[readonly] {
  background-color: #e2e4e9;
}

.crm-textfield input[readonly]::placeholder {
  color: #586074;
}

.crm-textfield input[readonly]:focus {
  border: 1px solid #d3d7de;
}

.crm-textfield input[readonly]:hover {
  border: 1px solid #d3d7de;
}

.crm-textfield label {
  display: none;
}

.leftLabel label.haveLabel {
  margin-right: 16px;
  display: initial;
}

.topLabel label.haveLabel {
  margin-bottom: 8px;
  display: initial;
}

.absoluted {
  position: relative;
  width: 100%;
}

.icon-search {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
}
.padding-left-32 {
  padding-left: 32px !important;
}

.error-msg {
  display: none;
  position: absolute;
  color: #ec4141;
  left: 0;
  top: calc(100% + 8px);
}

.error > input {
  border-color: #ec4141;
}

.error .error-msg {
  display: initial;
}

.success input {
  border-color: #31b491 !important;
}

.icon-success {
  display: none;
}

.success .icon-success {
  display: block;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
