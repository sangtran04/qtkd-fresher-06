<template>
  <div class="crm-popup" :class="{popup__show : isShowPopup}">
    <div class="popup__container">
        <div class="popup__header">
            <div class="popup__title">{{popupTitle}}</div>
            <div class="popup__center"></div>
            <div class="popup__close"><div class="icon-close"></div></div>
        </div>
        <div class="popup__content">
            {{popupContent}}
        </div>
        <div class="popup__footer">
            <div class="popup__center"></div>
            <div class="popup__button">
                <BaseButton buttonContent="Hủy" :hasIcon="false" backgroundColor="#fff" backgroundColorHover="#E2E4E9" color="#000000"/>
            </div>
            <div class="popup__button">
                <BaseButton buttonContent="Đồng ý" :hasIcon="false" backgroundColor="#EC4141" backgroundColorHover="#EA2E2E" color="#fff" />
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
export default {
    name: 'BasePopup',
    components: {
        BaseButton
    },
    props: {
        hasShowPopup: {
            type: Boolean,
            default: true,
        },

        popupTitle: {
            type: String,
            default: "Thông báo",
        },

        popupContent: {
            type: String,
            default: "",
        },
    },
    computed: {
        isShowPopup() {
            return this.hasShowPopup ? true : false;
        }
    }
}
</script>

<style>
    .crm-popup {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
    }

    .popup__show {
        display: flex;
    }

    .popup__container {
        display: flex;
        flex-direction: column;
        position: fixed;
        min-width: 432px;
        height: auto;
        position: absolute;
        background-color: #ffffff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 4px;
        box-shadow: 10px 10px 8px rgba(31,34,41,0.16);
    }

    .popup__header {
        margin-top: 16px;
        height: 19px;
        display: flex;
        padding: 0 16px;
    }

    .popup__title {
        color: #1F2229;
        font-family: Regular;
        font-weight: bold;
    }

    .popup__center {
        flex: 1;
    }

    .popup__close {
        width: 16px;
        height: 16px;
    }

    .popup__content {
        padding: 0 16px;
        margin-top: 16px;
    }

    .popup__footer {
        display: flex;
        padding: 0 16px;
        margin-bottom: 16px;
        margin-top: 16px;
    }

    .popup__button {
        margin-left: 8px;
    }

</style>