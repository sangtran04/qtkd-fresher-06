<template>
  <div class="crm-basetextarea">
    <textarea
      name="crm-textarea"
      class="crm-textarea"
      :readonly="readOnly"
      :class="{ error: isErrorTextArea }"
      :cols="textareaCols"
      :rows="textareaRows"
      :placeholder="placeholder"
    ></textarea>
    <span class="error-msg" :class="{ error: isErrorTextArea }"
      >Error message</span
    >
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
  props: {
    //Chỉ định nội dung cho text area
    txtContent: {
      type: String,
    },
    //Chỉ định nội dung gợi ý
    placeholder: {
      type: String,
      default: "Placeholder",
    },

    //Chỉ định độ rộng của text area
    textareaWidth: {
      type: String,
      default: "240px",
    },

    //Chỉ định chiều cao cho text ara
    textareaHeight: {
      type: String,
      default: "76px",
    },

    //Xác định chiều rộng của text area
    textareaCols: {
      type: String,
      default: "30",
    },

    //Xác định số hàng của text area
    textareaRows: {
      type: String,
      default: "10",
    },

    //Trạng thái báo lỗi
    textareaError: {
      type: Boolean,
      default: false,
    },

    // Chỉ định attribute chỉ đọc cho thẻ textarea
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isErrorTextArea() {
      return this.textareaError ? true : false;
    },
  },
};
</script>

<style>
.crm-basetextarea {
  position: relative;
}

.crm-textarea {
  width: v-bind(textareaWidth);
  height: v-bind(textareaHeight);
  border: solid 1px #99a1b2;
  padding: 8px 16px;
  border-radius: 4px;
}

.crm-textarea:focus {
  outline: none !important;
  border: solid 1px #4262f0;
}

.crm-textarea::placeholder {
  font-size: 13px;
  font-family: Regular;
  color: #99a1b2;
}

.crm-textarea-error {
  outline: none !important;
  border: solid 1px #e81717;
}

.crm-textarea textarea[readonly="readonly"] {
  background-color: #e2e4e9;
}

.crm-textarea textarea[readonly="readonly"]::placeholder {
  color: #586074;
}

.crm-textarea textarea[readonly="readonly"]:focus {
  border: 1px solid #d3d7de;
}

.crm-textarea textarea[readonly="readonly"]:hover {
  border: 1px solid #d3d7de;
}

.error-msg {
  display: none;
  position: absolute;
  color: #ec4141;
  left: 0;
  font-size: 13px;
  top: calc(100% + 8px);
}

.error.crm-textarea {
  border: solid 1px #ec4141;
}

.error.error-msg {
  display: initial;
}
</style>