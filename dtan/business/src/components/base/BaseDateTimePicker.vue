<template>
  <div class="crm__datepicker">
    <label v-if="hasLabelFunc" for="">{{ contentLabel }}</label>
    <input type="date" name="date" class="input__date" />
  </div>
</template>

<script>
export default {
  name: "BaseDatePicker",
  components: {},
  props: {
    //set màu nền
    backgroundColor: {
      type: String,
      default: "#fff",
    },
    color: {
      type: String,
    },
    hasLabel: {
      type: Boolean,
      default: false,
    },
    contentLabel: {
      type: String,
    },
    width: {
      type: String,
      default: "465px",
    },
  },
  computed: {
    hasLabelFunc() {
      return this.hasLabel;
    },
  },
};
</script>

<style>
.input__date {
  box-sizing: border-box;
  width: v-bind(width);
  height: 32px;
  border-radius: 4px;
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
  border: solid 1px #ccc;
  padding: 2px 8px;
  margin-left: 113px;
}
</style>