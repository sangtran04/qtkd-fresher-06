<template>
<div class="menu">
            <div class="menu__top">
                <div class="menu__top__left">
                    <div class="sibar"></div>
                    <div class="logo"></div>
                </div>
                <div class="menu__top__mid">
                    <div class="abc" >
                        <!-- <div class="icon--16">
                            <div class="input__icon"></div>
                        </div>
                        <input class="input " type="text" placeholder="Tìm kiếm tiềm năng,liên hệ ,khách hàng"> -->
                                <BaseTextField placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng"
                                 :hasIconSearch="true" />
                    </div>
                </div>
                <div class="menu__top__right">
                    <div class="icon--fb"></div>
                    <div class="icon--lapphuong "></div>
                    <div class="icon--lich"></div>
                    <div class="icon--chuong"></div>
                    <div class="icon--thietlap"></div>
                    <div class="icon--hoi"></div>
                    <div class="icon--avt"></div>
                </div>
            </div>
            <div class="menu__bottom">
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--dashboard"></div>
                    <div class="menu__text">Bàn làm việc</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--potential"></div>
                    <div class="menu__text tab__selected">Tiềm năng</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--offer"></div>
                    <div class="menu__text">Chào hàng</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--contact"></div>
                    <div class="menu__text">Liên hệ</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--customer"></div>
                    <div class="menu__text">Khách hàng</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--opportunity"></div>
                    <div class="menu__text">Cơ hội</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--quote"></div>
                    <div class="menu__text">Báo giá</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--order"></div>
                    <div class="menu__text">Đơn hàng</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--receipt"></div>
                    <div class="menu__text">Hóa đơn</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--pond"></div>
                    <div class="menu__text">Ao cơ hội</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--active"></div>
                    <div class="menu__text">Hoạt động</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--target"></div>
                    <div class="menu__text">Mục tiêu</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--campaign"></div>
                    <div class="menu__text">Chiến dịch</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--report"></div>
                    <div class="menu__text">Báo cáo</div>
                </div>
                <div class="menu__bottom__item">
                    <div class="icon icon-16 icon--other"></div>
                    <div class="menu__text">Khác</div>
                </div>

            </div>
        </div>
</template>

<script>
import BaseTextField from '../base/BaseTextField.vue'
export default {
  components: {
    BaseTextField,
  },
}
</script>
<style>
.menu{
    width:100%;
    height:84px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    padding: 10px 0;
}
.menu__top{
    width: 100%;
    height:42px;
    display: flex;
    justify-content: space-between;
}
.menu__top__left{
    display: flex;
    align-items: center;
    margin-left: 10px;
}
    .sibar{
        background: url('../../assets/img/icon_collection.svg') no-repeat -371px -227px;
        width: 10px;
        height: 10px;
        margin-right: 10px;
    }
    .logo{
        background-image: url(../../assets/img/Logo_Ban_hang.svg);
        height:32px;
        width:129px;
    }
.menu__top__mid{

}

.menu__top__right{
    display: flex;
    align-items: center;
}

.menu__bottom{
    display: flex;
    align-items: center;
    padding: 10px 10px;
    margin-left: 10px;
}
.menu__bottom__item{
    display: flex;
    align-items: center;
    margin-right: 16px;
}
.menu__text{
    margin-left: 8px;
}
.menu__bottom__item2{
    display: flex;
    align-items: center;
    margin-right: 16px;
    background-color: #a1b0ee;
    border-bottom: 1px solid  #7189F4;
}
</style>