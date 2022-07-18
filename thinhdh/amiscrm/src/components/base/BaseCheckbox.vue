<template>
  <div class="base-checkbox">
    <input type="checkbox" class="checkbox" id="checkboxId">
    <span class="title-checkbox">{{CheckboxText}}</span>
  </div>
</template>

<script>
export default {
    name: 'BaseCheckbox',
    components: {

    },
    props: {
        CheckboxText: {
            type : String,
            default: "CheckBox",
        },
        Checked: {
          type: String,
          default: "false",
        },
    },
    computed: {
      /**
      * Thiết lập trang trạng thái checkbox
      * Author: DHTHINH (18/07/2022)
      */
      // setChecked() {
      //   var getCheckbox = document.getElementById('checkboxId');
      //   console.log(getCheckbox);
      //   if(this.Checked == 'true') {
      //     document.getElementById("checkboxId").checked = true;
      //   }
      //   else {
      //     document.getElementById("checkboxId").checked = false;
      //   }
      //   return getCheckbox;
      // }
    }
}
</script>

<style>
    .base-checkbox {
      display: flex;
      padding: 7px 0px;
    }
    .checkbox {
        width: 16px;
        height: 16px;
        margin: 0px;
    }
    .title-checkbox {
      font-family: Regular;
      font-size: 13px;
      padding-left: 8px;
    }
</style>