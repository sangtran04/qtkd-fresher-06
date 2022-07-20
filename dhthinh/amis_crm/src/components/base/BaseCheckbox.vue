<template>
  <div class="base-checkbox">
    <input type="checkbox" class="checkbox">
    <span class="title-checkbox">{{filterContent}}</span>
  </div>
</template>

<script>
export default {
    name: 'BaseCheckbox',
    components: {

    },
    props: {
      //sửa lại cách đặt tên
      
        filterContent: {
            type : String,
            default: "CheckBox",
        },
        checked: {
            type : Boolean,
            default: false,
        },
    },
    computed: {
      /**
      * Thiết lập trang trạng thái checkbox
      * Author: DHTHINH (18/07/2022)
      */
    
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