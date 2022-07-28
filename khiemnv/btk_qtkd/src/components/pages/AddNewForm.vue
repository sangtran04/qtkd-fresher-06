<template>
  <div class="header">
    <div class="header__left">
      <h1 class="header__left--title">Thêm Tiềm Năng</h1>
      <div style="font-family: Roboto; font-size: 16px">Mẫu tiêu chuẩn</div>
      <div class="header__left--edit">Sửa bố cục</div>
    </div>
    <div class="header__center"></div>
    <div class="header__right">
      <BaseButton buttonContent="Hủy bỏ" backgroundColor="fff" border="1px solid black"></BaseButton>
        <BaseButton  buttonContent="Lưu và thêm" backgroundColor="fff" border="1px solid black"></BaseButton>
          <BaseButton  buttonContent="Lưu" backgroundColor="blue" ></BaseButton>
    </div>
  </div>
  <div class="content">
    <div class="content__avatar">
      <div class="content__avatar--title">Ảnh tiềm năng</div>
      <div class="content__avatar--image">
        <div class="icon-avatar"></div>
      </div>
    </div>
    <div class="content__wrapper">
      <div class="content__wrapper--title">Thông tin chung</div>
      <div class="content__wrapper--whole">
        <div class="content__column" style="margin-right: 80px">
          <div class="content__row">
            <div class="content__title">Xưng hô</div>
            <div class="content__input">
            <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">
              Tên<span style="color: red">*</span>
            </div>
            <div class="content__input">
            <BaseDropDown dropdownContent=""/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Phòng ban</div>
            <BaseDropDown/>
          </div>
          <div class="content__row">
            <div class="content__title">ĐT di động</div>
            <div class="content__input">
     <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Email cơ quan</div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Mã số thuế</div>
            <div class="content__input">
             <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Nguồn gốc</div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Zalo</div>
            <div class="content__input">
         <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Phân loại Khách hàng</div>
            <div class="content__input">
             <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Loại học bổng</div>
            <div class="content__input">
                <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Điểm HSKK</div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Điểm HSK</div>
            <div class="content__input">
               <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Chia sẻ cá nhân</div>
            <div class="content__input">
              <BaseTextArea />
            </div>
          </div>
        </div>
        <div class="content__column">
          
          <div class="content__row">
            <div class="content__title">Họ và tên</div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Họ và đệm</div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Chức danh</div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">ĐT cơ quan</div>
            <div class="content__input">
             <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Email cá nhân</div>
            <div class="content__input">
           <BaseDropDown/>>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Tổ chức</div>
            <div class="content__input">
             <BaseDropDown/>>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Mã ngân sách</div>
            <div class="content__input">
            <BaseDropDown/>/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Quy mô</div>
            <div class="content__input">
             <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Học vấn hiện tại</div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Trường học</div>
            <div class="content__input">
             <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Hình thức mong muốn</div>
            <div class="content__input">
               <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Hồ sơ</div>
            <div class="content__input">
              <BaseTextArea />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Thời gian dự định du học</div>
            <div class="content__input">
             <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Test chuyển đổi<span style="color:red">*</span></div>
            <div class="content__input">
                <BaseDropDown/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content__wrapper">
      <div class="content__wrapper--title">Thông tin tổ chức</div>
      <div class="content__wrapper--whole">
        <div class="content__column" style="margin-right: 80px">
          <div class="content__row">
            <div class="content__title">
              Tài khoản ngân hàng
            </div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">
              Ngày thành lập
            </div>
            <div class="content__input">
            <BaseDatePicker></BaseDatePicker>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">
              Lĩnh vực
            </div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Doanh thu/ Ngân sách</div>
            <div class="content__input">
             <BaseDropDown/>
            </div>
          </div>
        </div>
        <div class="content__column">
          <div class="content__row">
            <div class="content__title">
              Mở tại ngân hàng
            </div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Loại hình</div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Ngành nghề</div>
            <div class="content__input">
             <BaseDropDown/>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="content__wrapper">
      <div class="content__wrapper--title">Thông tin địa chỉ</div>
      <div class="content__wrapper--whole">
        <div class="content__column" style="margin-right: 80px">
          <div class="content__row">
            <div class="content__title">Quốc gia</div>
            <div class="content__input">
              <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Quận/huyện</div>
            <div class="content__input">
             <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">
              Số nhà, Đường phố
            </div>
            <div class="content__input">
         <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">
              Địa chỉ
            </div>
            <div class="content__input">
            <BaseTextArea />
            </div>
          </div>
        </div>
        <div class="content__column">
          <div class="content__row">
            <div class="content__title">
              Tỉnh/Thành phố
            </div>
            <div class="content__input">
  <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Phường/Xã</div>
            <div class="content__input">
       <BaseDropDown/>
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Mã vùng</div>
            <div class="content__input">
     <BaseTextArea/>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="content__wrapper">
      <div class="content__wrapper--title">Thông tin mô tả</div>
      <div class="content__wrapper--whole">
        <div class="content__column">
          <div class="content__row">
            <div class="content__title">Mô tả</div>
            <div class="content__input">
               <BaseTextArea textContent="" placeholder=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content__wrapper">
      <div class="content__wrapper--title">Thông tin hệ thống</div>
      <div class="content__wrapper--whole">
        <div class="content__column">
          <div class="content__row">
            <div class="content__title">Dùng chung</div>
            <div class="content__input">
    <BaseCheckbox />
            </div>
          </div>
          <div class="content__row">
            <div class="content__title">Mã tiềm năng</div>
            <div class="content__input">
          <BaseTextArea/>
            </div>
          </div>
        </div>
        <div class="content__column">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BaseTextArea from "../base/BaseTextArea.vue";
import BaseButton from "../base/BaseButton.vue";
import BaseDropDown from "../base/BaseDropDown.vue";
import BaseDatePicker from "../base/BaseDatePicker.vue";


export default {
  name: "TheFunction",
  components: {
    BaseTextArea,
    BaseButton,
    BaseDropDown,
    BaseDatePicker
},
};
</script>

<style scoped>

.header__left {
flex: 1;
}
.header {
  display: flex;
    width: 100%;
    justify-content: space-between;
  align-items: center;
}
.set-height {
  height: 62px;
}
.header__title {
  margin-left: 16px;
  font-size: 20px;
  font-weight: 500;
  font-family: Roboto;
  line-height: 1.428571429;
  color: #1f2229;
}
.header__left--edit {
  margin-left: 16px;
  color: #5973eb;
  font-size: 13px;
}
.header__center {
  flex: 1;
}
.header__right{
  display: flex;
  margin-right: 8px;
  flex: 1;
}

.content {
  padding: 32px 0 0;
  grid-column-start: 1;
  grid-column-end: 5;
  font-family: Roboto;
}
.content__avatar {
  margin: 0px 56px 40px 56px;
}
.content__avatar--title {
  margin-bottom: 16px;
  font-size: 18px;
}
.content__avatar--image {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 48px;
  height: 48px;
  background-color: #f0f2f4;
  border-radius: 50%;
  margin: 16px 0 40px 0;
}
.icon__avatar {
  content: "";
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: -50%;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -144px -848px;
}
.icon__avatar:hover {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -200px -808px;
}
.content__wrapper {
  margin-bottom: 20px;
}
.content__wrapper--title {
  margin: 0 56px 4px;
  font-size: 18px;
}
.content__wrapper--whole {
  display: flex;
  flex-direction: row;
  padding: 8px 56px;
}
.content__column {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.content__row {
  display: flex;
  padding: 4px 0;
  margin: 2px 0px;
  align-items: center;
}
.content__title {
  width: 160px;
  font-size: 13px;
  flex-shrink: 0;
  color: #1f2229;
  font-weight: 400;
}
.content__input {
  width: 100%;
}
</style>