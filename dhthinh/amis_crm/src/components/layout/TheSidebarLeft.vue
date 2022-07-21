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
    }

    /* .count-heading {
        height: 32px;
    } */

    .sidebarleft__heading {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        padding: 0 16px;
        margin: 8px 0px 0px;
        color: #586074;
    }

    .filter-down {
       
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
        color: #586074  ;
    }
    .filter-item {
        
    }
</style>