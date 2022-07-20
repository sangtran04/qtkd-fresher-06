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
                <div class="buttonadd mgr-8">
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
export default {
    name: 'TheFunction',
    component: {

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

</style>