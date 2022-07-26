<template>
  <div
    v-if="!hasLabel && type !== 'CRMComboBox'"
    class="base-input-text-field witdth-100"
    :class="{
      hoverBackground: hasBackgroundColorInProps,
    }"
  >
    <div class="relative witdth-100">
      <div v-if="hasIconSearchFunction" class="icon-search"></div>
      <div class="icon-success"></div>
      <input
        class="witdth-100"
        type="text"
        :placeholder="placeholder"
        :readonly="readOnly"
        :class="[
          {
            'padding-left-32': hasIconSearchFunction,
          },
          { preventHover: this.preventHover },
        ]"
      />
      <span class="error-msg">Error message</span>
    </div>
  </div>
  <!-- Text trong form thê mới -->
  <div class="row-item" v-if="hasLabel && type !== 'CRMComboBox'">
    <div class="label-wrap">
      <label class="misa-label show-tooltip" :class="{ required: required }"
        >{{ labelContent }}
        <TooltipComp :contentTooltip="labelContent" />
      </label>
      <div v-if="this.hasToolTipIcon" class="icon-tooltip show-tooltip">
        <TooltipComp :contentTooltip="fullToolTipContent" />
      </div>
    </div>
    <div class="combobox-content">
      <div class="input-control">
        <div class="input-wrap">
          <BaseTextField
            borderColor="#d3d7de"
            backgroundColor="#fff"
            preventHover
            :readOnly="readOnly"
            :placeholder="placeholder"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- CRM Combo box trong form thêm mới -->
  <div class="row-item" v-if="hasLabel && type === 'CRMComboBox'">
    <div class="label-wrap">
      <label class="misa-label show-tooltip" :class="{ required: required }"
        >{{ labelContent }}
        <TooltipComp :contentTooltip="labelContent" />
      </label>
      <div v-if="this.hasToolTipIcon" class="icon-tooltip show-tooltip">
        <TooltipComp :contentTooltip="fullToolTipContent" />
      </div>
    </div>
    <div class="combobox-content">
      <div class="input-control">
        <div class="input-wrap">
          <CRMComboBox :arrays="CHANGE_PAGE_SIZE" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TooltipComp from './TooltipComp.vue'
import BaseTextField from './BaseTextField.vue'
import CRMComboBox from './CRMComboBox.vue'
import CHANGE_PAGE_SIZE from '@/constants/change-page-size'
export default {
  props: {
    // Chỉ định placeholder cho thẻ input
    placeholder: {
      type: String,
      default: '',
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
      default: '100%',
    },
    // Chỉ định màu của border
    borderColor: {
      type: String,
      default: 'transparent',
    },
    // Ngăn các sự kiện liên quan đến hover của thẻ input
    preventHover: {
      type: Boolean,
      default: false,
    },
    // Chỉ định trường có required không ?
    required: {
      type: Boolean,
      default: false,
    },
    // Có tooltip icon ở phần label không ?
    hasToolTipIcon: {
      type: Boolean,
      default: false,
    },
    // Nội dung tooltip của icon tooltip
    fullToolTipContent: {
      type: String,
      default: '',
    },
    // Chọn kiểu [CRMComboBox,text]
    type: {
      type: String,
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
  components: {
    TooltipComp,
    BaseTextField,
    CRMComboBox,
  },
  data() {
    return {
      CHANGE_PAGE_SIZE,
    }
  },
}
</script>

<style scoped>
.witdth-100 {
  width: 100%;
}
.combobox-content {
  flex-grow: 1;
}
.input-control {
  width: 100%;
  height: 100%;
}
.icon-tooltip {
  margin-right: 8px;
  margin-left: 8px;
  cursor: pointer;
  display: inline-block;
  width: 16px;
  height: 16px;
  cursor: pointer;
}
.icon-tooltip::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -208px 0px;
}
.row-item {
  display: flex;
  padding: 4px 0;
  margin: 2px 0;
  align-items: center;
}

.label-wrap {
  width: 160px;
  height: 32px;
  line-height: 32px;
  align-items: center;
  display: flex;
}
.misa-label.required::after {
  color: #ec4243;
  content: ' *';
}
.input-wrap {
  border-radius: 4px;
  /* overflow: hidden; */
  width: 100%;
  position: relative;
  display: flex;
}

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
  outline: none;
  width: v-bind(width);
  background-color: v-bind(backgroundColor);
  border: 1px solid v-bind(borderColor);
  -webkit-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.base-input-text-field input:hover {
  border-color: transparent;
}
.base-input-text-field .preventHover:hover {
  border-color: v-bind(borderColor);
}
.base-input-text-field input:focus,
.base-input-text-field .preventHover:focus {
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
  border: 1px solid #d3d7de !important;
  background-color: #e2e4e9 !important;
}

.base-input-text-field input[readonly]:hover {
  border: 1px solid #d3d7de !important;
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

.relative {
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
