<template>
    <div class="menu__item">
        <div class="icon-tag"></div>
        <div class="content">
            {{tagName}}
        </div>
    </div>                 
</template>

<script>
export default {
    name: 'BaseTag',
    props: {
        //tag name
        tagName: {
            type: String,
            required: true,
            default: "Base Tag"
        },
    } }
</script>

<style>
    .menu__item {
        cursor: pointer;
        display: flex;
        margin-left: 16px;
        height: 42px;
        align-items: center;
        justify-content: center;
    }
    .content {
        color: #1F2229;
        margin-left: 4px;
        font-size: 13px;
    }
    .menu__active {
        border-bottom: solid 2px #4262F0;
    }
</style>