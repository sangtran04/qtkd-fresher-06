<template>
  <div class="content">
    <div class="sidebar-right-close">
      <div class="icon--next1"></div>
    </div>
     <div class="sidebar-left-close">
      <div class="icon--pre1"></div>
    </div>
    <div class="table__content">
      <div class="abc">
        <table class="table">
          <thead>
            <tr>
              <th style="width: 36px">
                <div
                title="Tùy chỉnh cột"
                class="btn-settings-column icon-sticky-setting-column"
              >
                <span class="icon-add-column"></span>
              </div>
              </th>
              <th style="width: 28px" class="text-align-right">
                <BaseCheckbox/>
              </th>
              <th class="text-align-left" style="width: 150px;">
                Thẻ

                </th>
              <th class="text-align-left" style="width: 100px;">Xưng hô</th>
              <th class="text-align-left" style="width: 180px;">Họ và tên</th>
              <th class="text-align-left" style="width: 120px;">Chức danh</th>
              <th class="text-align-left" style="width: 150px">ĐT di động</th>
              <th class="text-align-left" style="width: 150px">ĐT cơ quan</th>
              <th class="text-align-left" style="width: 180px">
                Email cơ quan
              </th>
              <th class="text-align-left" style="width: 180px">
                Email cá nhân
              </th>
              <th class="text-align-left" style="width: 300px">Tổ chức</th>
              <th class="text-align-left" style="width: 200px">Địa chỉ</th>
              <th class="text-align-left" style="width: 120px">
                Tỉnh/Thành phố
              </th>
              <th class="text-align-left" style="width: 150px">Quận/Huyện</th>
              <th class="text-align-left" style="width: 150px">Phường/Xã</th>
              <th class="text-align-left" style="width: 200px">Nguồn gốc</th>
              <th class="text-align-left" style="width: 180px">Loại hình</th>
              <th class="text-align-left" style="width: 180px">Lĩnh vực</th>
              <th class="text-align-left" style="width: 200px">Mô tả</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style="width: 36px">
                
              </td>
              <td style="width: 28px" class="text-align-right">
                <BaseCheckbox/>
              </td>
              <td style="width: 150px" class="text-align-left">Thẻ</td>
              <td class="text-align-left" style="width: 180px">Anh</td>
              <td class="text-align-left text--blue" style="width: 100px">
                Đỗ Việt Anh
              </td>
              <td class="text-align-left" style="width: 120px">Nhân viên</td>
              <td class="text-align-left text--blue" style="width: 150px">
                <div class="text--icon">
                  <div class="icon--tel"></div>
                  <span class="ml-8">098980748</span>
                </div>
              </td>
              <td class="text-align-left text--blue" style="width: 150px">
                <div class="text--icon">
                  <div class="icon--tel"></div>
                  <span class="ml-8">023423445</span>
                </div>
              </td>
              <td class="text-align-left text--blue" style="width: 180px">
                misa@gmail.com
              </td>
              <td class="text-align-left text--blue" style="width: 180px">
                vietanh@gmail.com
              </td>
              <td class="text-align-left" style="width: 300px">MISA</td>
              <td class="text-align-left" style="width: 200px">Duy Tân</td>
              <td class="text-align-left" style="width: 120px">
                Hà Nội
              </td>
              <td class="text-align-left" style="width: 150px">Cầu Giấy</td>
              <td class="text-align-left" style="width: 150px">Cầu Giấy</td>
              <td class="text-align-left" style="width: 200px">Cầu Giấy</td>
              <td class="text-align-left" style="width: 180px">-</td>
              <td class="text-align-left" style="width: 180px">-</td>
              <td class="text-align-left" style="width: 200px">-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="navigate">
        <div class="navigate__left">
          Tổng số: <span style="font-weight: 700">893</span>
        </div>
        <div class="navigate__right">
          <select class="navigate__select" name="" id="">
            <option value="">50 bản ghi trên trang</option>
            <option value="">50 bản ghi trên trang</option>
          </select>
          <div class="icon--pre2"></div>
          <div class="icon--pre1"></div>

          <span class="navigate__text" style="font-weight: 700">1</span>
          đến
          <span class="navigate__text" style="font-weight: 700">50</span>
          <div class="icon--next1"></div>
          <div class="icon--next2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from './../base/BaseCheckbox.vue'
export default {
  components: {
    BaseCheckbox,
  }
};
</script>

<style>
.btn-settings-column {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.icon-sticky-setting-column {
  z-index: 1001;
  top: 9px;
  right: 2px;
  background-color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  /* overflow: hidden; */
  box-shadow: 0 2px 6px #00000052;
}
.icon-sticky-setting-column:hover {
  background-color: #d3d7de;
  border-radius: 50%;
}

</style>