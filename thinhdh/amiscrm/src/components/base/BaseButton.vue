<template>

        <button class="crm-button-basic">
            {{buttonContent}}
        </button>

</template>

<script>
import { computed } from '@vue/runtime-core'

 export default {
    name: 'BaseButton',
    components: {
        
    },
    props: {
        //Thiết lập nội dung cho button
        buttonContent: {
            type: String,
            default: "Button"
        },
        //Thiết lập chiều rộng cho button
        width: {
            type: String,
            default: "80px",
        },

        // thiết lập chiều cao
        height: {
            type: String,
            default: "32px",
        },

        //Thiết lập màu chữ
        color: {
            type: String,
            default: "#fff",
        },

        //Thiết lập màu nền cho button
        backgroundColor: {
            type: String,
            default: "#4262F0",
        },

        //Biết button ở dang outline hay dạng thường
        isOutline: {
            type: Boolean,
            default: false,
        }
    },

    computed: {
        /**
         * Hàm xét hiệu ứng outline cho button
         * 
         */
    }
 }
</script>

<style>
    .crm-button-basic {
        min-width: v-bind(width);
        height: v-bind(height);
        color: v-bind(color);
        background-color: v-bind(backgroundColor);
        padding: 0 16px;
        border-radius: 4px;
        border: 0;
    }


    /*Thuộc tính dưới không cần dùng đến chuyển sang dạng props*/
    .button__primary--blue {
        background-color: #4262F0;
    }

    .button__primary--green {
        background-color: #31B491;
    }

    .button__primary--red {
        background-color: #EC4141;
    }

    .button__primary--blue:hover {
        background-color: #2B4EEE;
    }

    .button__primary--green:hover {
        background-color: #2EA888;
    }

    .button__primary--red:hover {
        background-color: #EA2E2E;
    }

    .button__primary--blue:active {
        background-color: #133BEC;
    }

    .button__primary--green:active {
        background-color: #268C71;
    }

    .button__primary--red:active {
        background-color: #E81717;
    }

    .button__secondary--blue {
        background-color: #E7EBFD;
        color: #4262F0;
    }

    .button__secondary--green {
        background-color: #D7F4EC;
        color: #31B491;
    }

    .button__secondary--red {
        background-color: #FAD1D1;
        color: #EC4141;
    }

    .button__secondary--blue:hover {
        background-color: #D0D8FB;
    }

    .button__secondary--green:hover {
        background-color: #C3EFE3;
    }

    .button__secondary--red:hover {
        background-color: #FAD1D1;
    }

    .button__secondary--blue:active {
        background-color: #B8C4F9;
    }

    .button__secondary--green:active {
        background-color: #AFE9DA;
    }

    .button__secondary--red:active {
        background-color: #F8B9B9;
    }

    .button__secondary--outlinered {
        background-color: #FFFFFF;
        border: 1px solid #EC4141;
        color: #EC4141;
    }

    .button__secondary--outlinegreen {
        background-color: #FFFFFF;
        border: 1px solid #31B491;
        color: #31B491;
    }

    .button__secondary--outlineblue {
        background-color: #FFFFFF;
        border: 1px solid #4262F0;
        color: #4262F0;
    }

    .button__secondary--outlinered:hover {
        background-color: #FDE8E8;
    }

    .button__secondary--outlinegreen:hover {
        background-color: #D7F4EC;
    }

    .button__secondary--outlineblue:hover {
        background-color: #E7EBFD;
    }

    .button__secondary--outlinered:active {
        background-color: #FAD1D1;
    }

    .button__secondary--outlinegreen:active {
        background-color: #C3EFE3;
    }

    .button__secondary--outlineblue:active {
        background-color: #D0D8FB;
    }

</style>