<template>
  <div class="crm-textarea">
    <textarea
      name="crm-textarea"
      class="crm-basetextarea"
      :readonly="readOnly"
      :class="{ error: isError}"
      :column="columns"
      :row="row"
      :placeHolder="placeholder"
    >
    </textarea>
    <span class="error-message" :class="{ error: isError}"
      >{{mesageError}}</span
    >
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
  props: {
    textContent: {
      type: String,
    },
    placeHolder: {
      type: String,
      default: "Placeholder",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "76px",
    },
    columns: {
      type: String,
      default: "",
    },
    row: {
      type: String,
      default: "3",
    },
    isError: {
      type: Boolean,
      default: false,
    },
    mesageError: {
      type: String,
      default: "Error happen",
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isErrorTextArea() {
      return this.isError ? true : false;
    },
  },
};
</script>

<style>
.crm-textarea {
  position: relative;
}
.crm-textarea {
  width: v-bind(width);
  height: v-bind(height);
  border: solid 1px #99a1b2;
  padding: 8px 16px;
  border-radius: 4px;
}
.crm-textarea:focus {
  outline: none !important;
  border: solid 1px #4262f0;
}
.crm-textarea::placeHolder {
  font-size: 13px;
  font-family: Regular;
  color: #99a1b2;
}
.error-message {
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
.error.error-message {
  display: initial;
}
.crm-textarea-error {
  outline: none !important;
  border: solid 1px #e81717;
}
.crm-textarea textarea[readonly="readonly"] {
  background-color: #e2e4e9;
}
.crm-textarea textarea[readonly="readonly"]::placeHolder {
  color: #586074;
}
.crm-textarea textarea[readonly="readonly"]:focus {
  border: 1px solid #d3d7de;
}
.crm-textarea textarea[readonly="readonly"]:hover {
  border: 1px solid #d3d7de;
}

</style>