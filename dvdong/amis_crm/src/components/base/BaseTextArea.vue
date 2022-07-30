<template>
  <div class="crm-basetextarea">
    <textarea
      name="crm-textarea"
      class="crm-textarea"
      :readonly="readOnly"
      :class="{ error: isErrorTextArea }"
      :cols="columns"
      :rows="rows"
      :placeholder="placeholder"
    ></textarea>
    <span class="error-msg" :class="{ error: isErrorTextArea }"
      >{{messageError}}</span
    >
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
  props: {
    //Chỉ định nội dung cho text area
    textContent: {
      type: String,
    },
    //Chỉ định nội dung gợi ý
    placeholder: {
      type: String,
      default: "",
    },

    //Chỉ định độ rộng của text area
    width: {
      type: String,
      default: "100%",
    },

    //Chỉ định chiều cao cho text ara
    height: {
      type: String,
      default: "76px",
    },

    //Xác định chiều rộng của text area
    columns: {
      type: String,
      default: "",
    },

    //Xác định số hàng của text area
    rows: {
      type: String,
      default: "3",
    },

    //Trạng thái báo lỗi có lỗi hay không
    hasError: {
      type: Boolean,
      default: false,
    },

    // Chỉ định nội dung báo lỗi
    messageError: {
      type: String,
      default: "Message Error",
    },

    // Chỉ định attribute chỉ đọc cho thẻ textarea
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isErrorTextArea() {
      return this.hasError ? true : false;
    },
  },
};
</script>

<style>
.crm-basetextarea {
  position: relative;
}

.crm-textarea {
  width: v-bind(width);
  height: v-bind(height);
  border: solid 1px #99a1b2;
  padding: 8px 16px;
  border-radius: 4px;
  resize: none;
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