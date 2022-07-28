<template>
    <div class="dialog" id="dialogPopup">
            <div class="popup">
                <div class="popup__header">
                    <div class="popup__title">{{titleText}}</div>
                    <div class="popup__close"><i style="font-size:16px; opacity: 0.4;" class="fas fa-times"></i></div>
                </div>
                <div class="popup__subtitle">{{contentText}}</div>
                <div class="popup__footer">
                    <BaseButton style="margin: 0 8px;" hasTertiary backgroundColor="#e2e4e9" buttonText="Hủy"></BaseButton>
                    <BaseButton hasPrimaryRed buttonText="Đồng ý"></BaseButton>
                </div>
            </div>
        </div>
</template>
<script>
import BaseButton from './BaseButton.vue';
export default {
    props: {
        contentText: {
            type: String,
            default: () => "nội dung thông báo"
        },
        titleText: {
            type: String,
            default: () => "Thông báo"
        }
    },
    components: { BaseButton }
}
</script>
<style>
.popup {
    box-sizing: border-box;
    width: 432px;
    min-height: 99px;
    border-radius: 4px;
    box-shadow: 0px 8px 16px rgba(31, 34, 41, 0.16);
    padding: 16px;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
}

.dialog {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 50px;
    background: rgba(0, 0, 0, 0.16);
    z-index: 999999;
}

.popup__header {
    display: flex;
    justify-content: space-between;
}

.popup__title {
    font-size: 16px;
    color: #1F2229;
    font-weight: 500;
}

.popup__subtitle {
    margin-top: 16px;
    flex-shrink: 0;
    height: auto;
}

.popup__footer {
    display: flex;
    justify-content: flex-end;
    width: 400px;
    height: 32px;
    margin-top: 16px;
    box-sizing: border-box;
}

</style>