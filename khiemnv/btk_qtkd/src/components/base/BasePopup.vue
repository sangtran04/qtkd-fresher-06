<template>
    <div class="crm-popup" id="popupdialog">
            <div class="popup">
                <div class="popup__header">
                    <div class="popup__title">{{title}}</div>
                    <div class="popup__close icon-bin"></div>
                </div>
                <div class="popup__content">{{content}}</div>
                <div class="popup__button">
                    <div class="basebutton">
                              <BaseButton buttonContent="Hủy"> </BaseButton>
                    </div>
              
                          <div class="basebutton">
                              <BaseButton backgroundColor="red" buttonContent="Xóa"></BaseButton>
                    </div>
               
            
                </div>
            </div>
        </div>
</template>
<script>
import BaseButton from './BaseButton.vue';
export default {
    props: {
        content: {
            type: String,
            default: () => "Bạn có chắc?"
        },
        title: {
            type: String,
            default: () => "Xóa tiềm năng"
        }
    },
    components: { BaseButton }
}
</script>
<style>
.crm-popup {
    z-index: 999;
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
.popup__header {
    display: flex;
    justify-content: space-between;
}
.popup__text{
    font-size: 16px;
    color: #1F2229;
    font-weight: 500;
}
.popup__content    {
    margin-top: 16px;
    flex-shrink: 0;
    height: auto;
}
.popup__button{
    display: flex;
   
    justify-content: flex-end;
    width: 400px;
    height: 32px;
    margin-top: 16px;
    box-sizing: border-box;
}
.popup__button .basebutton {
    margin-right: 14px;
    
    
}
</style>