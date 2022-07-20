<template>
    <div class="menu">
        <div class="menu__row1">
            <div class="menu__row__left">
                <div class="left__icon all">
                    <div class="icon--24">
                        <div class="icon--menu"></div>
                    </div>
                </div>
                <div class="left__logo">
                    <div class="icon--logo"></div>
                </div>
            </div>
            <div class="menu__row__mid">
                <div :class="{'icon--search':hasIconSearch}">
                </div>
                <TextField hasIconSearch width="300px" placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng"/>
            </div>
            <div class="menu__row__right ">
                <div class="item__icon__right">
                    <div class="icon--facebook"></div>
                </div>
                <div class="item__icon__right">
                    <div class="icon--3d"></div>
                </div>
                <div class="item__icon__right">
                    <div class="icon--calender"></div>
                </div>
                <div class="item__icon__right">
                    <div class="icon--noti"></div>
                </div>
                <div class="item__icon__right">
                    <div class="icon--setting"></div>
                </div>
                <div class="item__icon__right">
                    <div class="icon--help"></div>
                </div>
                <div class="item__icon__right">
                    <div class="icon--avatar"></div>
                </div>
            </div>
        </div>
        <div class="menu__row2">
            <div class="list__function">
                <BaseTab v-for="tab in tabs" :key="tab.id" :tabContent="tab.contentTab" :checked="tab.checked">
                <div class="icon--desk"></div>
                </BaseTab>

                <!-- <div class="list__item">
                    <div class="icon--banlamviec"></div>
                    <div class="item__text">Bàn làm việc</div>
                </div>
                <div class="list__item">
                    <div class="icon--tiemnang"></div>
                    <div class="item__text " style="color:#4262F0;">Tiềm năng</div>
                    <div class="item--selected"></div>
                </div>
                <div class="list__item">
                    <div class="icon--chaohang"></div>
                    <div class="item__text">Chào hàng</div>
                </div>
                <div class="list__item">
                    <div class="icon--lienhe"></div>
                    <div class="item__text">Liên hệ</div>
                </div>
                <div class="list__item">
                    <div class="icon--khachhang"></div>
                    <div class="item__text">Khách hàng</div>
                </div>
                <div class="list__item">
                    <div class="icon--cohoi"></div>
                    <div class="item__text">Cơ hội</div>
                </div>
                <div class="list__item">
                    <div class="icon--baogiac"></div>
                    <div class="item__text">Báo giá</div>
                </div> -->
                <!-- <div class="list__item">
                    <div class="icon--donhang"></div>
                    <div class="item__text">Đơn hàng</div>
                </div>
                <div class="list__item">
                    <div class="icon--hoadon"></div>
                    <div class="item__text">Hóa đơn</div>
                </div>
                <div class="list__item">
                    <div class="icon--aocohoi"></div>
                    <div class="item__text">Ao cơ hội</div>
                </div> -->
                <!-- <div class="list__item">
                    <div class="icon--hoatdong"></div>
                    <div class="item__text">Hoạt động</div>
                </div>
                <div class="list__item">
                    <div class="icon--muctieu"></div>
                    <div class="item__text">Mục tiêu</div>
                </div>
                <div class="list__item">
                    <div class="icon--chiendich"></div>
                    <div class="item__text">Chiến dịch</div>
                </div>
                <div class="list__item">
                    <div class="icon--baocao"></div>
                    <div class="item__text">Báo cáo</div>
                </div>
                <div class="list__item">
                    <div class="icon--khac"></div>
                    <div class="item__text">Khác</div>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import LIST_TAB from '@/constants/listtab'
import { ref } from 'vue'
import BaseTab from '../../components/base/BaseTab.vue'
import TextField from '../../components/base/BaseTextField.vue'
export default {
    components: {
        TextField,BaseTab
    },
    data(){
        const propsInputText ={
            placeholder: 'my placeholder',
            labelContent: '',
            leftLabel: false,
            hasIconSearch: true,
            readOnly: false,
        }
        return propsInputText;
    },
    setup() {
    const tabs = ref(LIST_TAB)
    return {
      tabs,
    }
  },
}
</script>
<style scoped>
@import url(../../css/layout/menu.css);
</style>