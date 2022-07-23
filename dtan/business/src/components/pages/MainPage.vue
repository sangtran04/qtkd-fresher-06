<template>
  <TheFunction />
      <div class="content">
    <div class="content__left">
      <div class="content__left__title">
        <div class="icon--downblack--small icon__content--positon"></div>
        BỘ LỌC ĐÃ LƯU
      </div>
      <div class="content__left__title">
        <div
          class="icon--search"
          style="position: absolute; top: 10px; left: calc(249px - 36px)"
        ></div>
        LỌC THEO TIỀM NĂNG
      </div>
      <div class="checkbox__list">
        <BaseCheckboxItem 
            v-for="item in checkboxs" 
            :key="item.id" 
            :contentLabel="item.contentLabel"/>
      </div>
      <div class="slideleft">
        <div class="icon--slideleft"></div>
      </div>
    </div>
    <div class="content__mid">
      <div class="abc">
        <table class="table">
          <thead>
            <tr>
              <th style="width: 36px">
                <div class="parent__td--icon">
                  <div class="icon--tdtable"></div>
                </div>
              </th>
              <th style="width: 28px" class="text-align-right">
                <BaseCheckbox id="10" style="margin: 0 12px" />
              </th>
              <th style="width: 150px" class="text-align-left">Thẻ</th>
              <th class="text-align-left" style="width: 100px">Xưng hô</th>
              <th class="text-align-left" style="width: 180px">Họ và tên</th>
              <th class="text-align-left" style="width: 120px">Chức danh</th>
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
              <td style="width: 36px"></td>
              <th style="width: 28px" class="text-align-right">
                <BaseCheckbox id="11" style="margin: 0 12px" />
              </th>
              <td style="width: 100px" class="text-align-left"></td>
              <td class="text-align-left" style="width: 100px">Anh</td>
              <td class="text-align-left text--blue" style="width: 180px">
                Đặng Thành An
              </td>
              <td class="text-align-left" style="width: 120px">Trưởng phòng</td>
              <td class="text-align-left text--blue" style="width: 150px">
                <div class="text--icon">
                  <div class="icon--tblcall"></div>
                  <div>0339541266</div>
                </div>
              </td>
              <td class="text-align-left text--blue" style="width: 150px">
                <div class="text--icon">
                  <div class="icon--tblcall"></div>
                  <div>0339541266</div>
                </div>
              </td>
              <td class="text-align-left text--blue" style="width: 180px">
                dangthanhan.c2ap@mail.com
              </td>
              <td class="text-align-left text--blue" style="width: 180px">
                dangthanhan.c2ap@gmail.com
              </td>
              <td class="text-align-left" style="width: 300px">Trùm mõm</td>
              <td class="text-align-left" style="width: 200px">Xóm 13</td>
              <td class="text-align-left" style="width: 120px">Nam Định</td>
              <td class="text-align-left" style="width: 150px">Trực Ninh</td>
              <td class="text-align-left" style="width: 150px">Xã Trực Thái</td>
              <td class="text-align-left" style="width: 200px">Good boy</td>
              <td class="text-align-left" style="width: 180px">Dịch vụ</td>
              <td class="text-align-left" style="width: 180px">Kinh tế</td>
              <td class="text-align-left" style="width: 200px">
                it so fking nice
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="navigate">
        <div class="navigate__left">Tổng số: 893</div>
        <div class="navigate__right">
          <div>
            <!-- <DropDownMenu
              :arrays="CHANGE_PAGE_SIZE"
              dropdownContent="20 Bản ghi trên trang"
            /> -->
          </div>
          <div class="icon--pre2"></div>
          <div class="icon--pre1"></div>

          <div class="navigate__text" style="font-weight: 500">1 đến 50</div>
          <div class="icon--next1"></div>
          <div class="icon--next2"></div>
        </div>
      </div>
    </div>
    <div class="content__right">
      <div class="slideright">
        <div class="icon--slideright"></div>
      </div>
      <div class="content__right__row1">
        <div class="item__icon__row1">
          <div class="icon--call"></div>
        </div>
        <div class="item__icon__row1">
          <div class="icon--complete"></div>
        </div>
        <div class="item__icon__row1">
          <div class="icon--calu"></div>
        </div>
        <div class="item__icon__row1">
          <div class="icon--email"></div>
        </div>
      </div>
      <div class="content__right__row2">
        <div class="content__row2__title">Lịch sử giao dịch</div>
        <div class="content__row2__item">
          <div class="item__logo">
            <div class="icon--ghichu"></div>
          </div>
          <div class="item__content">
            <div class="item__content__title">Ghi chú</div>
            <div class="item__content__text">
              Nguyễn Văn Hà (A006) - 12/08/2021
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BaseTag style="display: none" contentText="Chị" width="50px" hasIconClose />
</template>

<script>
import { ref } from "vue";
import BaseTag from '../base/BaseTag.vue';
import BaseCheckbox from '../base/BaseCheckbox.vue';
import TheFunction from '../layout/TheFunction.vue';
import LIST_CHECKBOX from '../../constants/listcheckbox';
import BaseCheckboxItem from "../base/BaseCheckboxItem.vue";


export default {
    components: { BaseTag, BaseCheckbox, TheFunction, BaseCheckboxItem },
     setup() {
    const checkboxs = ref(LIST_CHECKBOX);
    return {
      checkboxs,
    };
  },
}
</script>

<style scoped>
@import url(../../css/layout/content.css);
</style>