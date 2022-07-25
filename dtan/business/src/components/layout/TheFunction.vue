<template>
    <div class="function">
        <div class="function__left">
            <div class="function__left__title">Tất cả tiềm năng</div>
            <div class="icon__menu--16">
                <div class="icon--downblack--small"></div>
            </div>
            <div class="function__left__text">Sửa</div>
            <div class="icon--refresh"></div>
        </div>
        <div class="function__right" style="position:relative;">
            <div style="display:flex">
            <div class="icon--search"></div>
            <BaseTextField 
            backgroundColor="white"
            width="240px"
            hasIconSearch
            placeholder="Tìm kiếm theo Địa chỉ, Tổ chức, ..."
            style="margin-right: 8px"
            ></BaseTextField>
                <div class="all">
                    <div class="icon--16">
                        <div class="icon--plus"></div>
                    </div>
                    <router-link to="/add">
                        <Button buttonText="Thêm" hasHoverAndActivePrimaryBlue hasIcon hasBorderRight/>
                    </router-link>
                  
                </div>
                <div class="all">
                    <div class="icon--16">
                        <div class="icon--down"></div>
                    </div>
                    <Button hasHoverAndActivePrimaryBlue hasBorderLeft/>
                </div>
            </div>
            <div class="all right__threedot--32">
                <div class="icon--16">
                    <div class="icon--threedot"></div>
                </div>
            </div>
            <div class="all right__threedot--64">
                <div class="icon--16">
                    <div class="icon--threecol"></div>
                </div>
                <div class="icon--16">
                    <div class="icon--downblack--small downblack__position"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Button from '../../components/base/BaseButton.vue'
import BaseTextField from '../base/BaseTextField.vue'
export default {
    components: {
    Button,
    BaseTextField
}
}
</script>
<style>
@import url(../../css/layout/function.css);
</style>