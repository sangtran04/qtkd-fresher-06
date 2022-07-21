<template>
    <div class="crm-tags">
        <div class="crm-tag" :class="{tag__active: isChecked}">
        <slot></slot>
        <div class="tag__context">
            {{tagContent}} 
        </div>
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
    .crm-tags {
        cursor: pointer;
        padding: 12px 16px 0px 16px;
    }

    .crm-tags:hover {
        background-color: #f0f2f4;
        border-radius: 4px;
    }

    .crm-tag {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        justify-content: center;
        box-sizing: border-box;
    }

    .tag__context {
        color: #1F2229;
        margin-left: 8px;
        font-size: 13px;
    }
    .crm-tags.tag__active {
        pointer-events: none;
        cursor: none;
    }

    .tag__active {
        border-bottom: solid 2px #4262F0;
    }

    .tag__active > .tag__context {
        color: #4262F0;
    }
</style>