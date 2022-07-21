<template>
    <div class="function">
        <div class="function__left">
            <select name="" id="select"> 
              <option>Tất cả tiềm năng</option>
            </select>
            <div class="function__left__text">Sửa</div>

            <div class="icon--refresh"></div>
        </div>
        <div class="function__right">
            <div style="display:flex">
                <div class="all">
                    <div class="icon--16">
                        <div class="icon--plus"></div>
                    </div>
                   <Button buttonText="Thêm" hasIcon hasBorderRight/>
                    <!-- <Button buttonText="Thêm" :class="{'button button__icon button__primary--blue btn--cboleft': true}"/> -->
                </div>
                <div class="all">
                    <div class="icon--16">
                        <div class="icon--down"></div>
                    </div>
                    <Button hasBorderLeft/>
                    <!-- <Button buttonText="" :class="{'button button__primary--blue btn--32 btn--cboright': true}"/> -->
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
                    <div class="icon--downblack downblack__position"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Button from '../../components/base/BaseButton.vue'
export default {
    components: {
        Button
    }
}
</script>
<style>
@import url(../../css/layout/function.css);
</style>