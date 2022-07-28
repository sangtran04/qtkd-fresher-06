<template>
  <div class="function">
    <div class="function__left">
      <div class="function__left--title">Tiềm năng đã chuyển đổi</div>
      <div class="function__left--icon icon-down"></div>
      <div class="function__left--edit">Sửa</div>
      <div class="function__left--icon icon-refresh"></div>
    </div>
    <div class="function__right">
      <div class="button__group">
        <BaseTextField placeHolder= "Tìm kiếm theo Địa chỉ, Tổ chức, Email cá nhân, Họ và tên, ĐT di động, ĐT cơ quan, Email cơ quan, Mã số thuế" width="240px" backgroundColor="#fff"></BaseTextField>
<BaseButton :buttonContent="btn" hasIcon display="block"></BaseButton>
       <div class="button__group--left">
                    <button class="icon-threedot"></button>
                </div>
                <div class="button__group--right">
               <button class="button-right2 "></button>
                </div>
   
      </div>
    </div>
  </div>
</template>

<script>

import BaseButton from "../base/BaseButton.vue";
import BaseTextField from "../base/BaseTextField.vue";
export default {
  name: "TheFunction",
  components: { BaseButton, BaseTextField },
  data() {
    return {
      btn: "Thêm",
      hasIcon: true,
    };
  },
};
</script>

<style>
.function {
  display: flex;
  background-color: #e2e4e9;
  grid-column: 1/4;
  grid-row: 2;
  align-items: center;
 padding: 0 16px;
  justify-content: space-between;

  border-bottom: 1px solid rgb(214, 218, 224);
}
.function__left {
  display: flex;
  align-items: center;

  justify-content: space-between;
}
.button__group--left{

    background-color: white;
    width: 32px;
    height:30px;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius: 4px;

}

.button__group--right{
  padding: 7px;
    background-color: white;
    width: 50px;
    height:30px;
    display: flex;
    justify-content:space-around;
    align-items: center;
    border-radius: 4px;
}    

.button__group--right:hover, .button__group--left:hover {
  cursor: pointer;
}
    .button-right1{
        background: url('../../assets/img/icon_collection.svg') no-repeat -129px -306px;
        width: 13px;
        height: 13px;
        border: 0px;
    }
    .button-right2{
        background: url('../../assets/img/icon_collection.svg') no-repeat -338px -32px;
        width: 14px;
        height: 16px;
        border: 0px;
    }
.function__left--title {
  margin-left: 16px;
  font-weight: 500;
  font-size: 20px;
  margin: 0 4px 0 0;
}
.function__left--edit {
  margin-left: 16px;
  color: #4262f0;
  font-size: 13px;

}
.icon-refresh {
  margin-left: 8px;
  padding: 4px 0 0;
 }
.button__group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 6px;
}
</style>
