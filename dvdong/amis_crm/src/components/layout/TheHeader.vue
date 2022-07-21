<template>
  <div class="header">
    <div class="header__top">
      <div class="header__left">
        <div class="icon icon--toggle"></div>
        <div class="icon icon--logo"></div>
        <div class="title">Bán hàng</div>
      </div>
      <div class="header__center">
        <BaseTextField/>
        <div class="header__search">
          <input
            type="text"
            placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng"
            class="text-field"
          />
          <div class="icon icon--search"></div>
        </div>
      </div>
      <div class="header__right">
        <div class="icon icon--facebook"></div>
        <div class="icon icon--3d"></div>
        <div class="icon icon--calendar"></div>
        <div class="icon icon--noti"></div>
        <div class="icon icon--setting"></div>
        <div class="icon icon--help"></div>
        <div class="icon icon--avatar"></div>
      </div>
    </div>
    <div class="header__menu">
      <div class="menu__item">
        <div class="icon icon--banlamviec mr-8"></div>
        <p>Bàn làm việc</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--tiemnang mr-8"></div>
        <p>Tiềm năng</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--chaohang mr-8"></div>
        <p>Chào hàng</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--lienhe mr-8"></div>
        <p>Liên hệ</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--khachhang mr-8"></div>
        <p>Khách hàng</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--cohoi mr-8"></div>
        <p>Cơ hội</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--baogiac mr-8"></div>
        <p>Báo giá</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--donhang mr-8"></div>
        <p>Đơn hàng</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--hoadon mr-8"></div>
        <p>Hóa đơn</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--aocohoi mr-8"></div>
        <p>Ao cơ hội</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--hoatdong mr-8"></div>
        <p>Hoạt động</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--muctieu mr-8"></div>
        <p>Mục tiêu</p>
      </div>
      <div class="menu__item">
        <div class="icon icon--chiendich mr-8"></div>
        <p>Chiến dịch</p>
      </div>
      <!-- <div class="menu__item">
                    <div class="icon icon--baocao  mr-8"></div>
                    <p>Báo cáo</p>
                </div> -->
      <div class="menu__item">
        <div class="icon icon--khac mr-8"></div>
        <p>Khác</p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTextField from "./../base/BaseTextField.vue";
export default {
  components: {
    BaseTextField,
  },
  data() {
    const propsInputText = {
      placeholder: "my placeholder",
      labelContent: "",
      leftLabel: true,
      isIconSearch: false,
      readOnly: false,
    };
    return {
      propsInputText,
    };
  },
};
</script>

<style>

</style>