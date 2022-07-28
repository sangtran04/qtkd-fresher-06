<template>
  <div class="crm-checkbox">
    <input type="checkbox" class="checkbox" />
    <span class="checkbox-name">{{ nameFilter }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  components: {},
  props: {
    nameFilter: {
      type: String,
      default: "CheckBox",
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
};
</script>

<style>
.crm-checkbox {
  display: flex;
  padding: 8px 16px;
  height: 32px;


}
.checkbox {
  width: 16px;
  height: 16px;
padding: 7px 0 7px 24px;
border: 1px solid #7c869c !important;
    border-radius: 4px;
}
.checkbox:hover {
    border-color: #2b4eee;   ;
}
.checkbox-name {
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 13px;
  padding: 0 0 0 24px;
  position: absolute;
}
.crm-checkbox:hover{
    cursor: pointer;

}
</style>
