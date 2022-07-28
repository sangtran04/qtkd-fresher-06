<template>
  <div class="crm-datepicker">
    <input type="date" name="date" class="input--date">
  </div>
</template>

<script>
export default {
    name: 'BaseDatePicker',
    components: {

    },
    props: {
        //set màu nền 
        backgroundColor: {
            type: String,
            default: "#fff",
        },
        color: {
            type: String,
        }
    }
}
</script>

<style>
    .input--date {
        width: 100%;
        height: 32px;
        border-radius: 4px;
        background-color: v-bind(backgroundColor);
        color: v-bind(color);
        border: solid 1px #ccc;
        padding: 0 8px;
    }
</style>