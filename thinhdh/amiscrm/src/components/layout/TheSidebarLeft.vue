<template>
  <div class="sidebarleft">
            <div class="sidebarleft__heading filter-down">
                <div class="heading">
                    BỘ LỌC ĐÃ LƯU
                </div>
                <div class="layout__center"></div>
                <div class="icon-up"></div>
            </div>
            <div class="count-heading">

            </div>
            <div class="sidebarleft__heading filter-search">
                <div class="heading">
                    LỌC TIỀM NĂNG THEO
                </div>
                <div class="layout__center"></div>
                <div class="icon-search"></div>
            </div>
            <ul class="list-filter">
                <li class="filter-item">
                    <BaseCheckbox CheckboxText="Thẻ"/>
                </li>
                <li class="filter-item">
                    <BaseCheckbox CheckboxText="Xưng hô"/>
                </li>
                <li class="filter-item">
                    <BaseCheckbox CheckboxText="Họ và tên"/>
                </li>
                <li class="filter-item">
                    <BaseCheckbox CheckboxText="Chức danh"/>
                </li>
                <li class="filter-item">
                    <BaseCheckbox CheckboxText="ĐT di động"/>
                </li>
                <li class="filter-item">
                    <BaseCheckbox CheckboxText="Email"/>
                </li>
                <li class="filter-item">
                    <BaseCheckbox CheckboxText="Địa chỉ"/>
                </li>
                <li class="filter-item">
                    <BaseCheckbox CheckboxText="Tỉnh/Thành phố"/>
                </li>
                <li class="filter-item">
                    <BaseCheckbox CheckboxText="Quận/Huyện"/>
                </li>
                <li class="filter-item">
                    <BaseCheckbox CheckboxText="Phường/Xã"/>
                </li>
                <li class="filter-item">
                    <BaseCheckbox CheckboxText="Lĩnh vực"/>
                </li>
            </ul>
        </div>
</template>

<script>
import BaseCheckbox from "../base/BaseCheckbox.vue";
export default {
    name: 'TheSidebarLeft',
    components: {
        BaseCheckbox
    }
}
</script>

<style>
    .sidebarleft {
        border-right: solid 1px #ccc;
    }

    .count-heading {
        height: 32px;
    }

    .sidebarleft__heading {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        padding: 0 16px;
    }

    .filter-down {
        margin: 8px 0px 0px;
    }

    .filter-search {

    }

    .sidebarleft__heading .heading {
        font-size: 13px;
    }

    .potential__items {
        padding: 8px;
    }
    .list-filter {
        list-style: none;
        margin: 0px 0px 0px 0px;
        padding: 0 16px;
    }
    .filter-item {
        
    }
</style>