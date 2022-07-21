<template>
    <div class="function">
            <div class="function__left">
                <div class="function__title">Tất cả tiềm năng</div>
                <div class="icon icon-dropdown"></div>
                <div class="function__edit">Sửa</div>
                <div class="icon-refresh"></div>
            </div>
            <div class="layout__center"></div>
            <div class="function__right">
                <div class="buttonadd mgr-8" data-tooltip="Đây là button">
                    <div class="button__plus">
                        <div class="icon-plus"></div>
                    </div>
                    <button class="button__add">
                        Thêm
                    </button>
                    <button class="button__dropdown mgr-8">
                        <div class="icon-down"></div>
                    </button>
                </div>
                <button class="button__future mgr-8">
                    <div class="icon-future"></div>
                </button>

                <div class="button__option mgr-8">
                    <div class="icon-threecol mgr-8"></div>
                    <div class="icon-dropdown"></div>
                </div>
            </div>
        </div>
</template>

<script>
import BaseTooltip from "../base/BaseTooltip.vue";
export default {
    name: 'TheFunction',
    component: {
        BaseTooltip
    }
}
</script>

<style>
.function {
    display: flex;
    background-color: #e2e4e9;
    grid-column-start: 1;
    grid-column-end: 5;
    align-items: center;
}

.function__left {
    display: flex;
    align-items: center;
}

.function__title {
    margin-left: 16px;
    font-weight: bold;
    font-size: 20px;
}

.function__edit {
    margin-left: 16px;
    color: #5973eb;
    font-size: 13px;
}

.layout__center {
    flex: 1;
}

.function__right {
    display: flex;
}


.crm-tooltip {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
}
div[data-tooltip] {
  position: relative;
}
div[data-tooltip]::before {
  content: attr(data-tooltip);
  position: absolute;
  background-color: #333;
  font-size: 13px;
  color: #fff;
  text-align: center;
  padding: 3px 5px;
  border-radius: 4px;
  bottom: 0;
  line-height: 1rem;
  transform: scale(0);
  opacity: 0;
  transition: 0.25s ease-in-out;
}
div[data-tooltip]::after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  left: calc(50% - 2.5px);
  bottom: 100%;
  transform: scale(0);
  opacity: 0;
  transition: 0.25s ease-in-out;
}

/* Mặc định thì cho ẩn đi khi hover chuột vào mới hiện lên */
div[data-tooltip]:hover::before {
  transform: scale(1);
  bottom: 100%;
  opacity: 1;
}
div[data-tooltip]:hover::after {
  transform: scale(1);
  bottom: calc(100% - 5px);
  opacity: 1;
}

</style>