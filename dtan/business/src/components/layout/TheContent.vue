<template>
<div class="content">
    <div class="content__left">
        <div class="content__left__title">
            <div class="icon--downblack--small icon__content--positon"></div>
            BỘ LỌC ĐÃ LƯU
        </div>
            <div class="content__left__title">
                <div class="icon--search" style="position: absolute;top: 10px;left: calc(249px - 36px);"></div>
                LỌC THEO TIỀM NĂNG
        </div>
            <div class="checkbox__list">
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Thẻ</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Xưng hô</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Họ và tên</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Chức danh</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>ĐT di động</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>ĐT cơ quan</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Email cơ quan</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Email cá nhân</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Tổ chức</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Địa chỉ</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Tỉnh/Thành phố</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Quận/Huyện</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Phường/Xã</label>
                </div>
                <!-- <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Nguồn gốc</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Loại hình</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Lĩnh vực</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Mô tả</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Bố cục</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Chủ sở hữu</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Doanh thu</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Dùng chung</label>
                </div>
                <div class="checkbox__item">
                    <BaseCheckbox/>
                    <label>Facebook</label>
                </div> -->
        </div>
        <div class="slideleft">
                <div class="icon--slideleft"></div>
        </div>
    </div>
        <div class="content__mid ">
            <div class="abc">
                <table class="table">
                    <thead>
                        <tr>
                            <th style="width: 36px">
                                <div class="parent__tdicon">
                                    <div class="icon--tdtable"></div>
                                </div>
                            </th>
                            <th style="width: 28px;" class="text-align-right">
                            <BaseCheckbox  style="margin: 0 12px;"/></th>
                            <th style="width: 150px" class="text-align-left">Thẻ</th>
                            <th class="text-align-left" style="width: 100px;">Xưng hô</th>
                            <th class="text-align-left" style="width: 180px;">Họ và tên</th>
                            <th class="text-align-left" style="width: 120px;">Chức danh</th>
                            <th class="text-align-left" style="width: 150px;">ĐT di động</th>
                            <th class="text-align-left" style="width: 150px;">ĐT cơ quan</th>
                            <th class="text-align-left" style="width: 180px;">Email cơ quan</th>
                            <th class="text-align-left" style="width: 180px;">Email cá nhân</th>
                            <th class="text-align-left" style="width: 300px;">Tổ chức</th>
                            <th class="text-align-left" style="width: 200px;">Địa chỉ</th>
                            <th class="text-align-left" style="width: 120px;">Tỉnh/Thành phố</th>
                            <th class="text-align-left" style="width: 150px;">Quận/Huyện</th>
                            <th class="text-align-left" style="width: 150px;">Phường/Xã</th>
                            <th class="text-align-left" style="width: 200px;">Nguồn gốc</th>
                            <th class="text-align-left" style="width: 180px;">Loại hình</th>
                            <th class="text-align-left" style="width: 180px;">Lĩnh vực</th>
                            <th class="text-align-left" style="width: 200px;">Mô tả</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="width: 36px"></td>
                            <th style="width: 28px;" class="text-align-right">
                            <BaseCheckbox style="margin: 0 12px;"/></th>
                            <td style="width: 100px" class="text-align-left"></td>
                            <td class="text-align-left" style="width: 100px;">Anh</td>
                            <td class="text-align-left text--blue" style="width: 180px;">Đặng Thành An</td>
                            <td class="text-align-left" style="width: 120px;">Trưởng phòng</td>
                            <td class="text-align-left text--blue" style="width: 150px;">
                                <div class="text--icon">
                                    <div class="icon--tblcall"></div>
                                    <div>0339541266</div>
                                </div>
                            </td>
                            <td class="text-align-left text--blue" style="width: 150px;">
                                <div class="text--icon">
                                    <div class="icon--tblcall"></div>
                                    <div>0339541266</div>
                                </div>
                            </td>
                            <td class="text-align-left text--blue" style="width: 180px;">dangthanhan.c2ap@mail.com</td>
                            <td class="text-align-left text--blue" style="width: 180px;">dangthanhan.c2ap@gmail.com</td>
                            <td class="text-align-left" style="width: 300px;">Trùm mõm</td>
                            <td class="text-align-left" style="width: 200px;">Xóm 13</td>
                            <td class="text-align-left" style="width: 120px;">Nam Định</td>
                            <td class="text-align-left" style="width: 150px;">Trực Ninh</td>
                            <td class="text-align-left" style="width: 150px;">Xã Trực Thái</td>
                            <td class="text-align-left" style="width: 200px;">Good boy</td>
                            <td class="text-align-left" style="width: 180px;">Dịch vụ</td>
                            <td class="text-align-left" style="width: 180px;">Kinh tế</td>
                            <td class="text-align-left" style="width: 200px;">it so fking nice</td>
                        </tr>
                        
                    </tbody>
                </table>
               
            </div>
                <div class="navigate">
                    <div class="navigate__left">Tổng số: 893</div>
                    <div class="navigate__right">
                        <select class="navigate__select" name="" id="">
                            <option value="">50 bản ghi trên trang</option>
                            <option value="">50 bản ghi trên trang</option>
                        </select>
                        <div class="icon--pre2"></div>
                        <div class="icon--pre1"></div>

                        <div class="navigate__text" style="font-weight: 500;">1 đến 50</div>
                        <div class="icon--next1"></div>
                        <div class="icon--next2"></div>
                    </div>
                </div>
        </div>
        <div class="content__right ">
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
                        <div class="item__content__text">Nguyễn Văn Hà (A006) - 12/08/2021</div>
                    </div>
                </div>
            </div>
        </div>
</div>
<BaseTag style="display: none;" contentText="Chị" width="50px" hasIconClose/>
</template>
<script>
import BaseCheckbox from '../../components/base/BaseCheckbox.vue'
import BaseTag from '../../components/base/BaseTag.vue'
export default {
    components: {
        BaseTag,BaseCheckbox
    }
    
}
</script>
<style scoped> 
@import url(../../css/layout/content.css);
</style>