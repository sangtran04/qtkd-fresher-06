<template>
  <div>
      <input
        class="input"
        :id="labelContent"
        type="text"
        :placeholder="placeholder"
        :readonly="readOnly"
        :class="{'input__icon input__icon--search': hasIconSearchFunction }"
      />
  </div>
</template>
<script>
export default {
  props: {
    // Thiết lập chiều ngang cho text field
    width: {
        type: String,
        default: '240px'
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
  },
  computed: {
    /**
     * Kiểm tra props truyền vào có label không ?
     * Author: ANDT 20/07/2022
     */
    hasLabel() {
      return this.labelContent ? true : false;
    },
    /**
     * Kiểm trả props truyền vào có icon search không ?
     * Author: ANDT 20/07/2022
     */
    hasIconSearchFunction() {
      return this.hasIconSearch ? true : false;
    },
  },
};
</script>
<style>
.input {
  box-sizing: border-box;
  min-width: v-bind(width);
  height: 32px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 8px 16px;
  outline: none;
  
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
  background-color: rgb(240 242 244);
  margin-top: 0px;
  width: 275px;
  border: none;
  margin-left: 32px;
}

.input__icon--search:hover {
  border: 1px solid#4262F0;
}

.input__icon--search:focus {
  border: 1px solid#4262F0;
}
</style>

