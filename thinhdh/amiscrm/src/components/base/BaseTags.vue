<template>
    <div class="crm-tag" :class="{checked: isChecked}">
        <slot></slot>
        <div class="context">
            {{tagContent}} 
        </div>
    </div>                 
</template>

<script>

export default {
    name: 'BaseTag',
    props: {
        //Thiết lập tên của tab
        tagContent: {
            type: String,
            required: true,
        },
        //Thiết lập hiệu ứng tab có được chọn hay không
        checked: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isChecked() {
            return this.checked
        },
    },
}
</script>

<style>

    .crm-tag {
        cursor: pointer;
        display: flex;
        margin-left: 16px;
        height: 42px;
        align-items: center;
        justify-content: center;
    }

    .context {
        color: #1F2229;
        margin-left: 4px;
        font-size: 13px;
    }

    .checked {
        border-bottom: solid 2px #4262F0;
    }

    .checked > .context {
        color: #4262F0;
    }

    .checked > slot {
        color: #4262F0;
    }
</style>