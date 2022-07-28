<template>
  <div :class="[{ form__item: hasLabelFunc }]">
    <label :class="{ label: hasLabelFunc }" for="">
    <span>{{ contentLabel }} <span v-if="hasRequiedFunc" style="color:red"> *</span>
    <BaseTooltip class="show__tooltip"
      v-show="hasTooltipFunc"
      :contentTooltip="contentTooltip"/>
    </span>
    </label>
    <div class="inputeeee" style="box-sizing:border-box">
      <input
      :id="idInput"
      class="input"
      type="text"
      :placeholder="placeholder"
      :readonly="readOnly"
      :class="[{ 'input__icon input__icon--search': hasIconSearchFunction }]"
    />
      <div :id="classMessError" v-if="classMessError">{{contentError}}</div> 
    </div>
  </div>
</template>
<script>
import BaseTooltip from "./BaseTooltip.vue";
export default {
  props: {
    classMessError: String,
    idInput: String
    ,
    contentError: String,
    contentTooltip: {
      type: String,
      default: "this is default of tooltip",
    },
    backgroundColor: {
      type: String,
      default: "#fff",
    },
    // Thiết lập chiều ngang cho text field
    width: {
      type: String,
      default: "240px",
    },
    // Gợi ý cho text filed
    placeholder: {
      type: String,
      // required: true,
    },
    // Chỉ định attribute chỉ đọc cho thẻ input
    readOnly: {
      type: Boolean,
      default: false,
    },
    // Chỉ định nội dung thẻ label
    contentLabel: {
      type: String,
      default: "",
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
    hasIconSearchLeft: {
      type: Boolean,
    },
    hasLabel: {
      type: Boolean,
      default: false,
    },
    hasTooltip: {
      type: Boolean,
      default: false,
    },
    hasRequied:{
      type: Boolean,
      default: false,
    },
    hasError:{
      type: Boolean,
      default: false,
    }
  },
  computed: {
    /**
     * Kiểm tra props truyền vào có label không ?
     * Author: ANDT 20/07/2022
     */
    hasLabelFunc() {
      return this.hasLabel;
    },
    /**
     * Kiểm trả props truyền vào có icon search không ?
     * Author: ANDT 20/07/2022
     */
    hasIconSearchFunction() {
      return this.hasIconSearch ? true : false;
    },
    /**
     * Kiểm tra xem có tooltip không?
     */
    hasTooltipFunc() {
      return this.hasTooltip;
    },
    /**
     * Kiểm tra xem có tìm bắt buộc nhập không?
     */
    hasRequiedFunc(){
      return this.hasRequied;
    },
    /**
     * Author: ĐTAn 28/07/2022
     * Kiểm tra xem input nhập có lỗi không?
     */
    hasErrorFunc(){
      return this.hasError;
    },
  },
  components: { BaseTooltip },
  methods: {

    }
};
</script>
<style>
span:hover .show__tooltip {
  display: block !important;
  z-index: 1 !important;
  cursor: pointer;
}
.input {
  box-sizing: border-box;
  min-width: v-bind(width);
  max-width: 400px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #d3d7de;
  padding: 8px 16px;
  outline: none;
  background-color: v-bind(backgroundColor);
  margin-left: 10px;
}

.input:hover {
  border-color: #7c869c;
}

.input:focus {
  border-color: #4262f0;
}

.input:focus-visible {
  border-color: #4262f0;
}

.input--error {
  border-color: #ec4141;
}
.input--error:focus {
  border-color: #ec4141;
}
.input--error:hover {
  border-color: #ec4141;
}
.input--success {
  border-color: #31b491;
}

.input__icon {
  padding-left: 32px;
}

.input::placeholder {
  font-size: 13px;
  color: #bbbbbb;
}

.input__icon--search {
  margin-top: 0px;
  border: none;
  margin-left: 36px;
}
.input[readonly] {
  background-color: #e2e4e9;
}
.input[readonly]::placeholder {
  color: #586074;
}
.input[readonly]:focus {
  border: 1px solid #d3d7de;
}
.input[readonly]:hover {
  border: 1px solid #d3d7de;
}

/* .input__icon--search:hover {
  border: 1px solid#4262F0;
} */

.input__icon--search:focus {
  box-sizing: border-box;
  border: 1px solid#4262F0;
}

.label {
  padding-top: 0px;
  min-width: 190px;
  max-width:190px;
  max-height: 32px;
}
#message--error{
  box-sizing: border-box;
  color: red;
  margin-left: 10px;
  height: 28px;
  padding-top: 8px;
  display: none;
}
#message--error--test{
  box-sizing: border-box;
  color: red;
  margin-left: 10px;
  height: 28px;
  padding-top: 8px;
  display: none;
}
</style>

