<template>
    <div class="header">
            <div class="header__sidebar">
                <div class="sidebar__left">
                    <div class="icon-toggle"></div>
                    <div class="logo-amis"></div>
                </div>
                <div class="sidebar__center">
                    <BaseTextField class="input-center" 
                    placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng" 
                    :isIconSearch="true"
                    width="275px"
                    />
                </div>
                <div class="sidebar__right">
                    <div class="boder-icon">
                        <div class="icon icon-avatar"></div>
                    </div>
                    <div class="boder-icon">
                        <div class="icon icon-help"></div>
                    </div>
                    <div class="boder-icon">
                        <div class="icon icon-noti"></div>
                    </div>
                    <div class="boder-icon">
                        <div class="icon icon-setting"></div>
                    </div>
                    <div class="boder-icon">
                        <div class="icon icon-calender"></div>
                    </div>
                    <div class="boder-icon">
                        <div class="icon icon-box"></div>
                    </div>
                    <div class="boder-icon">
                        <div class="icon icon-facebook"></div>
                    </div>
                </div>
            </div>
                
            <div class="menu">
                <BaseTags NameTag="Bàn làm việc"/>
                <div class="menu__item menu__active">
                    <div class="icon-tiemnang">
                            
                    </div>
                    <div class="context">
                        Tiềm năng
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-chaohang">
                            
                    </div>
                    <div class="context">
                        Chào hàng
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-lienhe">
                            
                    </div>
                    <div class="context">
                        Liên hệ
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-khachhang">
                            
                    </div>
                    <div class="context">
                        Khách hàng
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-cohoi">
                            
                    </div>
                    <div class="context">
                        Cơ hội
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-baogia">
                            
                    </div>
                    <div class="context">
                        Báo giá
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-donhang">
                            
                    </div>
                    <div class="context">
                        Đơn hàng
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-hoadon">
                            
                    </div>
                    <div class="context">
                        Hóa đơn
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-aocohoi">
                            
                    </div>
                    <div class="context">
                        Ao cơ hội
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-hoatdong">
                            
                    </div>
                    <div class="context">
                        Hoạt động
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-muctieu">
                            
                    </div>
                    <div class="context">
                        Mục tiêu
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-chiendich">
                            
                    </div>
                    <div class="context">
                        Chiến dịch
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-baocao">
                            
                    </div>
                    <div class="context">
                        Báo cáo
                    </div>
                </div>
                <div class="menu__item">
                    <div class="icon-khac">
                            
                    </div>
                    <div class="context">
                        Khác
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import BaseTags from "../base/BaseTags.vue";
import BaseTextField from '../base/BaseTextField.vue'
export default {
    name: 'TheMenu',
    components: {
        BaseTextField, BaseTags
    }
}
</script>

<style>
    .header {
    display: flex;
    background-color: #fff;
    grid-column-start: 1;
    grid-column-end: 5;
    flex-direction: column;
    height: 84px;
    }
    .logo-amis {
        background-image: url('../../assets/Resource/img/Logo_Ban_hang.svg');
        background-repeat: no-repeat;
        height: 30px;
        width: 100%;
        margin-left: 16px;
    }
    .header__sidebar {
        display: flex;
        align-items: center;
        height: 50%;
    }

    .sidebar__left {
        display: flex;
        width: 240px;
    }

    .sidebar__center {
        flex: 1;
        text-align: center;
    }

    .sidebar__right {
        display: flex;
        width: 320px;
        align-items: center;
        flex-direction: row-reverse;
        padding-right: 16px;
    }

    .menu {
        display: flex;
        height: 50%;
        align-items: center;
    }

    .menu__item {
        cursor: pointer;
        display: flex;
        margin-left: 16px;
        height: 42px;
        align-items: center;
    }

    .context {
        color: #1F2229;
        margin-left: 4px;
        font-size: 13px;
    }

    .menu__active {
        border-bottom: solid 2px #4262F0;
    }
</style>