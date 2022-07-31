<template>
    <div class="v">
        <textarea class="textarea" :class="{'textarea--error':hasErrorMessageFunc}"></textarea>
        <label v-if="hasErrorMessageFunc" for="">{{contentError}}</label>
    </div>
</template>
<script>
export default { 
    props: {
        width: {
            type: String,
            default: "240px"
        },
        height: {
            type: String,
            default: "76px"
        },
        // có error không?
        hasError:{
            type: Boolean,
            default: false
        },
        isReadonly:{
            type: Boolean,
            default: false
        },
        contentError:{
            type: String,
            default: "Error message"
        },
        hasErrorMessage:{
            type: Boolean,
            default: false
        }
    },
    computed: {
        /**
         * Hàm kiểm tra xem có error không?
         * AUTHOR: ANDT (22/7/2022)
         */
        hasErrorMessageFunc(){
            return this.hasErrorMessage;
        }
    }
}
</script>
<style scoped>
.v > label {
    color: red;
}
textarea{
    box-sizing: border-box;
    width: v-bind(width);
    height: v-bind(height);
    resize: none;
    border-radius: 4px;
    border-color: #ccc;
    padding: 8px 16px;
}
textarea:focus{
    border-color:#4262f0 ;
    outline: none;
}
.textarea--error{
    border-color:red ;
}
</style>