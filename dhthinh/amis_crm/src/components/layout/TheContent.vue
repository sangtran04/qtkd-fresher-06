<template>
    <div class="content">
        <!-- <BaseToggle switchText="Switch" />
        <BaseToggle switchText="Switch Disabled" :switchDisabled="true"/> -->
        <div class="abc">
                <table class="table">
                    <thead>
                        <tr>
                            <th class="text-align-right" style="width: 50px">
                            <input class="checkbox" type="checkbox" name="" id=""></th>
                            <th style="width: 100px" class="text-align-left">Thẻ</th>
                            <th class="text-align-left" style="width: 80px;">Xưng hô</th>
                            <th class="text-align-left" style="width: 140px;">Họ và tên</th>
                            <th class="text-align-left" style="width: 120px;">Chức danh</th>
                            <th class="text-align-left" style="width: 100px;">ĐT di động</th>
                            <th class="text-align-left" style="width: 100px;">ĐT cơ quan</th>
                            <th class="text-align-left" style="width: 120px;">Email cơ quan</th>
                            <th class="text-align-left" style="width: 120px;">Email cá nhân</th>
                            <th class="text-align-left" style="width: 100px;">Tổ chức</th>
                            <th class="text-align-left" style="width: 100px;">Địa chỉ</th>
                            <th class="text-align-left" style="width: 100px;">Tỉnh/Thành phố</th>
                            <th class="text-align-left" style="width: 100px;">Quận/Huyện</th>
                            <th class="text-align-left" style="width: 100px;">Phường/Xã</th>
                            <th class="text-align-left" style="width: 100px;">Nguồn gốc</th>
                            <th class="text-align-left" style="width: 100px;">Loại hình</th>
                            <th class="text-align-left" style="width: 100px;">Lĩnh vực</th>
                            <th class="text-align-left" style="width: 100px;">Mô tả</th>
                            <th class="text-align-left" style="width: 100px;">Bố cục</th>
                            <th class="text-align-left" style="width: 100px;">Chủ sở hữu</th>
                            <th class="text-align-left" style="width: 100px;">Doanh thu</th>
                            <th class="text-align-left" style="width: 100px;">Dùng chung</th>
                            <th class="text-align-left" style="width: 100px;">Facebook</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-align-right" style="width: 50px">
                            <input class="checkbox" type="checkbox" name="" id=""></td>
                            <td style="width: 100px" class="text-align-left"></td>
                            <td class="text-align-left" style="width: 80px;">Anh</td>
                            <td class="text-align-left text--blue" style="width: 140px;">Đặng Hữu Thịnh</td>
                            <td class="text-align-left" style="width: 120px;">Nhân Viên</td>
                            <td class="text-align-left text--blue" style="width: 100px;">
                                <div class="text--icon">
                                    <div class="icon--tblcall"></div>
                                    <div>0878398141</div>
                                </div>
                            </td>
                            <td class="text-align-left text--blue" style="width: 100px;">
                                <div class="text--icon">
                                    <div class="icon--tblcall"></div>
                                    <div>0878398141</div>
                                </div>
                            </td>
                            <td class="text-align-left text--blue" style="width: 120px;">thinh191204033@gmail.com</td>
                            <td class="text-align-left text--blue" style="width: 120px;">thinh191204033@gmail.com</td>
                            <td class="text-align-left" style="width: 100px;">Hoàng Long</td>
                            <td class="text-align-left" style="width: 100px;">Vân Thị</td>
                            <td class="text-align-left" style="width: 100px;">Ninh Bình</td>
                            <td class="text-align-left" style="width: 100px;">Gia Viễn</td>
                            <td class="text-align-left" style="width: 100px;">Xã Gia Tân</td>
                            <td class="text-align-left" style="width: 100px;">Good boy</td>
                            <td class="text-align-left" style="width: 100px;">Dịch vụ</td>
                            <td class="text-align-left" style="width: 100px;">Kinh tế</td>
                            <td class="text-align-left" style="width: 100px;">it so fking nice</td>
                            <td class="text-align-left" style="width: 100px;">3 phần</td>
                            <td class="text-align-left" style="width: 100px;">Đặng Hữu Thịnh</td>
                            <td class="text-align-left" style="width: 100px;">280000000</td>
                            <td class="text-align-left" style="width: 100px;">Không</td>
                            <td class="text-align-left" style="width: 100px;">Đặng Hữu Thịnh</td>
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
</template>

<script>
// import BaseToggle from "../base/BaseToggle.vue";
export default {
    name: 'TheContent',
    components: {
        // BaseToggle
    }
}
</script>

<style>
    @import url(../../style/table.css);
    @import url(../../style/navigate.css);
    .content {
        position: relative;
    }
</style>