<template>
            <div class="function">
            <div class="function__left">
                <div class="function__left__item">
                    <div class="function__left__item__text1">Tất cả tiềm năng</div>
                    <div class="function__left__item__icon1"></div>
                </div>
                <div class="function__left__item">
                    <div class="function__left__item__text2">Sửa</div>
                    <div class="function__left__item__icon2"></div>
                </div>
            </div>

            <div class="fuction__right">
                 <BaseButton buttonContent="Thêm" hasIcon />

                <div class="function__right__option">
                    <button class="function__right__option__button"></button>
                </div>
                <div class="function__right__value">
                    <button class="function__right__value__button1 "></button>
                    <button class="function__right__value__button2 "></button>
                </div>
            </div>
        </div>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'
export default {
  components: {
    BaseButton,
  },
}
</script>
<style>
@import url(../../css/layout/function.css);
</style>