<template>
        <div class="crm-tooltip">
            {{contentTooltip}}
        </div>
</template>

<script>
    export default {
        props: {
            contentTooltip:{
                type: String,
                default: ""
            },
            width:{
                type: String,
                default: "auto"
            }
        }
    }
</script>

<style scoped>
.crm-tooltip {
    box-sizing: border-box;
    width: v-bind(width);
    max-width:320px;
    background-color: #424857;
    max-height: 32px;
    border-radius: 4px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 12px;
    color: #fff;
    position: absolute;
    top: 50px;
    left: -30px;
    display: none;
    animation: tooltipGrow ease 0.1s;
}
@keyframes tooltipGrow {
    from{
        opacity: 0;
        transform:scale(0);
    }to{
        opacity: 1;
        transform:scale(1);
    }
    
}

</style>

