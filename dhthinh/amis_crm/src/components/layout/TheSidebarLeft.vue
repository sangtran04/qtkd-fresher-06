<template>
  <div class="sidebarleft">
            <div class="sidebarleft__heading filter-down">
                <div class="heading">
                    BỘ LỌC ĐÃ LƯU
                </div>
                <div class="layout__center"></div>
                <div class="icon-up"></div>
            </div>
            <!-- <div class="count-heading">

            </div> -->
            <div class="sidebarleft__heading filter-search">
                <div class="heading">
                    LỌC TIỀM NĂNG THEO
                </div>
                <div class="layout__center"></div>
                <div class="icon-search"></div>
            </div>
            <ul class="list-filter">
                <li class="filter-item">
                    <BaseCheckbox
                    v-for = "filter in filters"
                    :key="filter.id"
                    :filterContent="filter.contentFilter"
                    :checked="filter.checked"
                    />
                </li>
            </ul>
            <div class="collapse-left">
                <div class="icon-collapse-left"></div>
            </div>
        </div>
</template>

<script>
import BaseCheckbox from "../base/BaseCheckbox.vue";
import { ref } from "vue";
import ListFilter from "../../constants/ListFilter"
export default {
    name: 'TheSidebarLeft',
    components: {
        BaseCheckbox
    },
    setup() {
        const filters = ref(ListFilter)
        return {
            filters,
        }
    }
}
</script>

<style>
    .sidebarleft {
        border-right: solid 1px #ccc;
        position: relative;
    }
    .sidebarleft__heading {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        padding: 0 16px;
        margin: 8px 0px 0px;
        color: #586074;
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
        color: #586074  ;
    }
    .collapse-left {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        cursor: pointer;
        box-shadow: 1px 0 4px #00000029;
        border-radius: 0 6px 6px 0;
        background-color: #fff;
        z-index: 1;
        position: absolute;
        left: 249px;
        top: calc(50% - 20px);
        width: 12px!important;
        height: 40px!important;
        padding: 12px 0!important;
    }

    .collapse-left:hover {
        width: 20px!important;
    }
</style>