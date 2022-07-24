<template>
        <div class="tooltip">
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
                default: "240px"
            }
        }
    }
</script>

<style scoped>
.tooltip {
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
    animation: tootipGrow ease 0.1s;
}
@keyframes tootipGrow {
    from{
        opacity: 0;
        transform:scale(0);
    }to{
        opacity: 1;
        transform:scale(1);
    }
    
}

/* .tooltip::before {
    position: absolute;
    top: 16px;
    left: -16px;
    content: "";
    border: 8px solid;
    border-color: transparent #424857 transparent transparent;
} */
</style>