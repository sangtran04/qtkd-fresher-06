<template>
    <div class="function" style="height: 64px">
        <div class="function__left">
            <div class="function__left__title">Thêm tiềm năng</div>
            <div class="function__left__titlebonus">Mẫu tiêu chuẩn</div>
            <div class="function__left__text">Sửa bố cục</div>
        </div>
        <div class="function__right">
            <BaseButton backgroundColor="#ffffff" hasTertiary buttonText="Hủy bỏ"/>
            <BaseButton style="margin:0 8px;" hasSecondaryOutLine buttonText="Lưu và thêm"/>
            <BaseButton hasHoverAndActivePrimaryBlue buttonText="Lưu"/>
        </div>
    </div>
    <div class="add__content">
        <div class="title__image">Ảnh tiềm năng</div>
        <div class="avatar__image"><div class="icon__avatar"></div></div>
        <div class="add__form">
            <div class="title__image">Thông tin chung</div>
            <div class="form__row">
                <div class="form__col1">
                    <div class="form__item">
                        <label for="">Xưng hô</label>
                        <TextField contentLabel="" width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tên <span style="color:red">*</span></label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Phòng ban</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">ĐT di động</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Email cơ quan</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Mã số thuế</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Nguồn gốc</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Zalo</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Phân loại khách hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Loại học bổng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Điểm HSKK</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Điểm HSK</label>
                        <TextField width="465px"/>
                    </div>
                    <div isTextArea class="form__item">
                        <label for="">Chia sẻ cá nhân</label>
                        <BaseTextArea style="margin-left: 10px"  width="465px"/>
                    </div> 
                </div>
                <div class="form__col2">
                    <div class="form__item">
                        <label for="">Họ và tên</label>
                        <TextField readOnly width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Họ và đệm</label>
                        <TextField  width="465px"/>
                    </div> 
                    <div class="form__item">
                        <label for="">Chức danh</label>
                        <TextField  width="465px"/>
                    </div> 
                    <div class="form__item">
                        <label for="">ĐT cơ quan</label>
                        <TextField  width="465px"/>
                    </div> 
                    <div class="form__item">
                        <label for="">Email cá nhân</label>
                        <TextField  width="465px"/>
                    </div> 
                    <div class="form__item">
                        <label for="">Tổ chức</label>
                        <TextField  width="465px"/>
                    </div> 
                    <div class="form__item">
                        <label for="">Mã ngân sách</label>
                        <TextField  width="465px"/>
                    </div> 
                    <div class="form__item">
                        <label for="">Quy mô</label>
                        <TextField  width="465px"/>
                    </div> 
                    <div class="form__item">
                        <label for="">Học vấn hiện tại</label>
                        <TextField  width="465px"/>
                    </div> 
                    <div class="form__item">
                        <label for="">Trường học</label>
                        <TextField  width="465px"/>
                    </div> 
                    <div class="form__item">
                        <label for="">Hình thức học mong muốn</label>
                        <TextField  width="465px"/>
                    </div> 
                    <div isTextArea class="form__item">
                        <label for="">Hồ sơ</label>
                        <BaseTextArea style="margin-left: 10px"  width="465px"/>
                    </div> 
                    <div class="form__item">
                        <label for="">Thời gian dự định du học</label>
                        <TextField  width="465px"/>
                    </div> 
                    <div class="form__item">
                        <label for="">Test chuyển đổi</label>
                        <TextField  width="465px"/>
                    </div> 
                </div>
            </div>
            <div class="title__image" style="margin-top:48px">Thông tin tổ chức</div>
            <div class="form__row">
                <div class="form__col1">
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                </div>
                <div class="form__col2">
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                </div>
            </div>
            <div class="title__image" style="margin-top:48px">Thông tin địa chỉ</div>
            <div class="form__row">
                <div class="form__col1">
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div isTextArea class="form__item">
                        <label for="">Địa chỉ</label>
                         <BaseTextArea style="margin-left: 10px" width="465px"/>
                    </div>
                </div>
                <div class="form__col2">
                    <div class="form__item">
                        <label for="">Địa chỉ</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                    <div class="form__item">
                        <label for="">Tài khoản ngân hàng</label>
                        <TextField width="465px"/>
                    </div>
                </div>
            </div>
            <div class="title__image" style="margin-top:48px">Thông tin mô tả</div>
            <div class="form__row">
                <div class="form__col1">
                    <div isTextArea class="form__item">
                        <label for="">Mô tả</label>
                        <BaseTextArea style="margin-left: 10px"  width="1210px"/>
                    </div>
                </div>
            </div>
            <div class="title__image" style="margin-top:48px">Thông tin hệ thống</div>
            <div class="form__row">
                <div class="form__col1">
                    <div class="form__item">
                        <label for="">Dùng chung</label>
                        <BaseCheckbox style="margin-left: 10px"/>
                    </div>
                    <TextField hasLabel contentLabel="Mã tiềm năng" placeholder="Mã tự sinh" width="465px"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
div[isTextArea]{
    height: 76px;
    display: flex;
    align-items: start;
    margin: 6px 0;
}
div[isTextArea] > label {
    height: 32px;
    display: flex;
    align-items: center;
}
.function__left__titlebonus{
    font-size: 16px;
    font-weight: 500;
    padding-left: 16px;
}
.add__content{
    padding: 32px 56px 0 56px;
    overflow:auto ;
    height: calc(100vh - 176px);
}
.add__content .title__image{
    
    color:#1F2229;
    font-size: 18px;
    font-weight: 500;
}
.avatar__image{
    width: 48px;
    height: 48px;
    background-color: #f0f2f4;
    border-radius: 50%;
    margin: 16px 0 40px 0;
}
.icon__avatar{
    content:"";
    display: inline-block;
    width: 48px;
    height: 48px;
    background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)     no-repeat -144px -848px;;

    /* -144px -848px; */
    
}
.form__row{
    padding: 8px 0;
    display: flex;
}
.form__col1{
    margin-right: 80px;
}
.form__col1 label, .form__col2 label
{
    min-width: 190px;
    /* max-width: 160px; */
    max-height: 32px;
}
.form__item{
    display: flex;
    align-items: center;
    height: 40px;
    padding: 2px 0;
}
</style>
<script>
import TextField from '../../components/base/BaseTextField'
import BaseButton from '../../components/base/BaseButton.vue'
import BaseCheckbox from '../../components/base/BaseCheckbox.vue'
import BaseTextArea from '../../components/base/BaseTextArea.vue'
export default {
    name: "NewPotential",
    components: {
        BaseButton,TextField,BaseCheckbox,BaseTextArea
    }
    
}
</script>