<template>
  <div class="header">
    <div class="header__top">
      <div class="header__left">
        <div class="icon icon--toggle"></div>
        <div style="margin-top: 2px">
          <img src="./../../assets/img/Logo_CRM_App.svg" alt="" />
        </div>
      </div>
      <div class="header__center">
        <!-- <BaseTextField/> -->
        <!-- <BaseCombobox/> -->
        <div class="header__search">
          <div class="header__search-input">
            <input
              type="text"
              placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng"
              class="text-field"
              id="myInput"
            />
          </div>
          <div class="icon icon--search"></div>
          <div @click="clearTextInputOnclick()" class="icon-close-16px"></div>
        </div>
      </div>

      <div class="header__right">
        <div class="header__right-icon"><div class="icon--blog"></div></div>
        <div class="header__right-icon"><div class="icon--facebook"></div></div>
        <div class="header__right-icon"><div class="icon--3d"></div></div>
        <div class="header__right-icon"><div class="icon--calendar"></div></div>
        <div class="header__right-icon"><div class="icon--notify"></div></div>
        <div class="header__right-icon"><div class="icon--setting"></div></div>
        <div class="header__right-icon"><div class="icon--help"></div></div>
        <div class="header__right-icon"><div class="icon--avatar"></div></div>
      </div>
    </div>
    <div class="header__menu">
      <ul class="menu__tab">
        <li class="menu__item">
          <div class="icon icon--dashboard mr-8"></div>
          <p>Bàn làm việc</p>
        </li>
        <li class="menu__item menu__item-active">
          <a href="">
            <div class="menu__item-content">
              <div class="icon icon--lead mr-8"></div>
              <span>Tiềm năng</span>
            </div>
            <div class="row-active"></div>
          </a>
        </li>
        <li class="menu__item">
          <div class="icon icon--offer mr-8"></div>
          <p>Chào hàng</p>
        </li>
        <li class="menu__item">
          <div class="icon icon--contact mr-8"></div>
          <p>Liên hệ</p>
        </li>
        <li class="menu__item">
          <div class="icon icon--account mr-8"></div>
          <p>Khách hàng</p>
        </li>
        <li class="menu__item">
          <div class="icon icon--opportunity mr-8"></div>
          <p>Cơ hội</p>
        </li>
        <li class="menu__item">
          <div class="icon icon--quote mr-8"></div>
          <p>Báo giá</p>
        </li>
        <li class="menu__item">
          <div class="icon icon--order mr-8"></div>
          <p>Đơn hàng</p>
        </li>
        <li class="menu__item">
          <div class="icon icon--invoce-request mr-8"></div>
          <p>Hóa đơn</p>
        </li>
        <li class="menu__item">
          <div class="icon icon--oportunity-poo mr-8"></div>
          <p>Ao cơ hội</p>
        </li>
        <li class="menu__item">
          <div class="icon icon--activity mr-8"></div>
          <p>Hoạt động</p>
        </li>
        <!-- <li class="menu__item">
          <div class="icon icon--forcecast mr-8"></div>
          <p>Mục tiêu</p>
        </li> -->
        <!-- <li class="menu__item">
          <div class="icon icon--campaign mr-8"></div>
          <p>Chiến dịch</p>
        </li> -->
        <!-- <li class="menu__item">
          <div class="icon icon--report mr-8"></div>
          <p>Báo cáo</p>
        </li>
        <li class="menu__item">
          <div class="icon icon--product mr-8"></div>
          <p>Hàng hóa</p>
        </li> -->
      </ul>
      <div class="menu__item">
        <div class="icon icon--other mr-8"></div>
        <p>Khác</p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTextField from "./../base/BaseTextField.vue";
import BaseCombobox from "./../base/BaseCombobox.vue";

export default {
  components: {
    // BaseTextField,
    // BaseCombobox,
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
  methods: {
    clearTextInputOnclick() {
      let textCheck = document.getElementById("myInput").value;
      document.getElementById("myInput").value = " ";
    },
  },
};
</script>

<style>
</style>