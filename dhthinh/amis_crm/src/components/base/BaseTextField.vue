<template>
  <div
    class="textfield" :class="{ leftLabel: leftLabel, topLabel: topLabel }">
    <label :class="{ haveLabel: isHaveLabel }" :for="labelContent">{{
      labelContent
    }}</label>
    <div class="absoluted ">
      <div v-if="isIconSearchFunction" class="icon-search"></div>
      <div class="icon-success"></div>
      <input
        :id="labelContent"
        type="text"
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
    width: {
      type: String,
      default: '240px',
    },
    backgroundColor: {
      type: String,
      default: 'rgb(240, 242, 244)',
    }
  },
  computed: {
    // Kiểm tra props truyền vào có label không ?
    isHaveLabel() {
      return this.labelContent ? true : false
    },
    // Kiểm trả props truyền vào có icon search không ?
    isIconSearchFunction() {
      return this.isIconSearch ? true : false
    },
  },
}
</script>

<style scoped>
.textfield {
  display: flex;
  justify-content: center;
}
.textfield .topLabel {
  flex-direction: column;
}
.textfield .leftLabel {
  align-items: center;
}
.textfield input {
  height: 32px;
  padding: 0 16px;
  border-radius: 4px;
  border: 0;
  /* border: 1px solid #d3d7de; */
  outline: none;
  background-color: v-bind(backgroundColor);
  min-width: v-bind(width);
}
.textfield input::placeholder {
  font-size: 13px;
}

.textfield input:hover {
  border-color: #7c869c;
}

.textfield input:focus {
  border: 1px solid #4262f0;
}

.textfield input[readonly] {
  background-color: #e2e4e9;
}

.textfield input[readonly]::placeholder {
  color: #586074;
}

.textfield  input[readonly]:focus {
  border: 1px solid #d3d7de;
}

.textfield input[readonly]:hover {
  border: 1px solid #d3d7de;
}

.textfield label {
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
