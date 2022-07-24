<template>
  <div
    class="base-input-text-field"
    :class="{
      leftLabel: leftLabel,
      topLabel: topLabel,
      hoverBackground: hasBackgroundColorInProps,
    }"
  >
    <label :class="{ hasLabel: hasLabel }" :for="labelContent">{{
      labelContent
    }}</label>
    <div class="absoluted">
      <div v-if="hasIconSearchFunction" class="icon-search"></div>
      <div class="icon-success"></div>
      <input
        :id="labelContent"
        type="text"
        :placeholder="placeholder"
        :readonly="readOnly"
        :class="{ 'padding-left-32': hasIconSearchFunction }"
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
    hasIconSearch: {
      type: Boolean,
    },
    // Chỉ định màu nền khi hover
    backgroundColorWhenHover: {
      type: String,
    },
    // chỉ định màu nền
    backgroundColor: {
      type: String,
      default: '#f0f2f4',
    },
    // Chỉ định chiều dài cho button
    width: {
      type: String,
      default: '320px',
    },
  },
  computed: {
    /**
     * Kiểm tra props truyền vào có label không ?
     * Author: hainh 17/07/2022
     */
    hasLabel() {
      return this.labelContent ? true : false
    },
    /**
     * Kiểm trả props truyền vào có icon search không ?
     * @Author: hainh 17/07/2022
     */
    hasIconSearchFunction() {
      return this.hasIconSearch ? true : false
    },
    /**
     *
     */
    hasBackgroundColorInProps() {
      return this.backgroundColorWhenHover
    },
  },
}
</script>

<style scoped>
.hoverBackground input:hover {
  background-color: v-bind(backgroundColorWhenHover);
}
.base-input-text-field {
  display: flex;
}
.base-input-text-field.topLabel {
  flex-direction: column;
}
.base-input-text-field.leftLabel {
  align-items: center;
}
.base-input-text-field input {
  height: 32px;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  outline: none;
  width: v-bind(width);
  background-color: v-bind(backgroundColor);
}

.base-input-text-field input:hover {
  border-color: #7c869c;
}

.base-input-text-field input:focus {
  border: 1px solid #4262f0;
  background-color: #fff;
}

.base-input-text-field input[readonly] {
  background-color: #e2e4e9;
}

.base-input-text-field input[readonly]::placeholder {
  color: #586074;
}

.base-input-text-field input[readonly]:focus {
  border: 1px solid #d3d7de;
}

.base-input-text-field input[readonly]:hover {
  border: 1px solid #d3d7de;
}

.base-input-text-field label {
  display: none;
}

.leftLabel label.hasLabel {
  margin-right: 16px;
  display: initial;
}

.topLabel label.hasLabel {
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
