<template>
<div class="toastmessage">
            <div class="toast__left">
                <i class="fa-solid fa-circle-check"></i>
            </div>
            <div class="toast__mid">{{content}}</div>
            <div class="toast__right"><i class="fa-solid fa-xmark"></i></div>
        </div>
</template>
<script>
export default {
    setup() {
        
    },
    props: {
        content: {
            type: String,
            default: 'Status message'
        },
        width: {
            type: String,
            default: () => "200px",
        }
        
    },
    data() {
       return {
        selected: true,
        success: "Thành công",
         }
    },
}

</script>
<style>
@import url(../../css/base/toast.css);
</style>