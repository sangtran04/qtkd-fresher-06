<template>
  <div
    class="crm-textfield"
    :class="{ leftLabel: leftLabel, topLabel: topLabel }"
  >
    <label :class="{ hasLabel: hasLabel }" :for="labelContent">{{
      labelContent
    }}</label>
    <div class="icon-position">
      <div class="icon-wrapper">
        <div v-if="hasIconSearch" class="icon-search"></div>
      </div>

      <div class="icon-success"></div>
      <input
        class="labelContent"
        :type="typeInput"
        :placeholder="placeHolder"
        :readonly="readOnly"
        :class="{ 'padding-left-32': hasIconSearchFunc }"
      />
      <span class="error-message">This is an error</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseTextField",
  props: {
    // Định nghĩa placeholder cho thẻ Input
    placeHolder: {
      type: String,
      default: "Tìm kiếm tiềm năng, liên hệ, khách hàng",
      require: true,
    },
    backgroundColor: {
      type: String,
      default: "#f0f2f4",
    },
    // Định nghĩa nhãn cho thẻ Input
    labelContent: {
      type: String,
    },
    // Có tồn tại nhãn nằm bên trên thẻ Input?
    topLabel: {
      type: Boolean,
    },
    typeInput: {
      type: String,
      default: "text",
    },
    width: {
      type: String,
      default: "320px",
    },
    // Có tồn tại nhãn nằm nằm bên trái trên thẻ Input?
    leftLabel: {
      type: Boolean,
    },
    type: {
      type: String,
      default: "text",
    },
    //Định dạng ô input là chỉ đọc hay không?
    isReadOnly: {
      type: Boolean,
      default: false,
    },
    //Có thêm icon tìm kiến vào ô input hay không?
    hasIconSearch: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    // Hàm kiểm tra có tồn tại nhãn
    hasLabel() {
      return this.labelContent ? true : false;
    },
    //hàm kiểm tra có tồn tại icon search không?
    hasIconSearchFunc() {
      return this.hasIconSearch ? true : false;
    },
  },
};
</script>

<style scoped>
* {
  font-size: 13px;
}
input {
  text-overflow: ellipsis;
}
.crm-textfield {
  display: flex;
  flex: 1;

  justify-content: center;
}
.crm-textfield.topLabel {
  flex-direction: column;
}
.crm-textfield.leftLabel {
  align-items: center;
}

.crm-textfield input {
  background-position: center;
  padding: 8px 16px 8px 30px;
  border-radius: 4px;
  height: 30px;
  border: 1px solid #f0f2f4;
  outline: none;
  width: v-bind(width);
  background-color: v-bind(backgroundColor);
}

.crm-textfield input::placeholder {
  font-size: 13px;
  color: #bbbbbb;
}
.crm-textfield input:hover {
  background-color: #e2e4e9;
  outline: none;
}
.crm-textfield input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50em;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -80px -16px;
  opacity: 0;
  pointer-events: none;
}
.crm-textfield input[type="search"]:focus::-webkit-search-cancel-button {
  opacity: 1;

  pointer-events: all;
}
.crm-textfield input[type="search"]:hover::-webkit-search-cancel-button {
  background-color: #d3d7de;
}

.crm-textfield input:focus {
  border: 1px solid #4262f0;
  background-color: #fff;
  outline: none;
}

.crm-textfield input[readonly]:focus {
  border: 1px solid #d3d7de;
}
.crm-textfield input[readonly]::placeholder {
  color: #586074;
}
.crm-textfield label {
  display: none;
}
.crm-textfield .topLabel label.hasLabel {
  margin-bottom: 8px;
  display: block;
}
.crm-textfield .leftLabel label.hasLabel {
  margin-right: 8px;
  display: block;
}
.crm-textfield .icon-position {
  position: relative;
  margin-left: 8px;
}
.crm-textfield .icon-search {
  position: absolute;
  top: 25%;
  transform: translate(-10%);
  margin-left: 8px;
  padding: 8px 0;
}

.padding-left-32 {
  padding-left: 32px !important;
}
.crm-textfield .error-message {
  display: none;
  position: absolute;
  color: #ec4141;
  left: 0;
  top: calc(100% + 8px);
}
.input-error {
  border-color: #ec4141;
}
.input-success {
  border-color: #31b491;
}
</style>
