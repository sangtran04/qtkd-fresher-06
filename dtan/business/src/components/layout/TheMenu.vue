<template>
  <div class="menu">
    <div class="menu__row1">
      <div class="menu__row__left">
        <div class="left__icon">
          <div class="icon--24">
            <div class="icon--menu"></div>
          </div>
        </div>
        <div class="left__logo">
          <div class="icon--logo"></div>
        </div>
      </div>
      <div class="menu__row__mid">
        <div :class="{ 'icon--search': hasIconSearch }"></div>
        <TextField
          hasIconSearch
          width="320px"
          placeholder="Tìm kiếm tiềm năng, liên hệ, khách hàng"
        />
      </div>
      <div class="menu__row__right">
        <div class="item__icon__right">
          <div class="icon--facebook"></div>
        </div>
        <div class="item__icon__right">
          <div class="icon--facebook"></div>
        </div>
        <div class="item__icon__right">
          <div class="icon--3d"></div>
        </div>
        <div class="item__icon__right">
          <div class="icon--calendar"></div>
        </div>
        <div class="item__icon__right">
          <div class="icon--noti"></div>
        </div>
        <div class="item__icon__right">
          <div class="icon--setting"></div>
        </div>
        <div class="item__icon__right">
          <div class="icon--help"></div>
        </div>
        <div class="item__icon__right">
          <div class="icon--avatar"></div>
        </div>
      </div>
    </div>
    <div class="menu__row2">
      <div class="list__function">
        <BaseTab
          v-for="tab in tabs"
          :key="tab.id"
          :tabContent="tab.contentTab"
          :checked="tab.checked"
        >
          <div :class="tab.iconTab"></div>
        </BaseTab>
      </div>
    </div>
  </div>
</template>
<script>
import LIST_TAB from "@/constants/listtab";
import { ref } from "vue";
import BaseTab from "../../components/base/BaseTab.vue";
import TextField from "../../components/base/BaseTextField.vue";
export default {
  components: {
    TextField,
    BaseTab,
  },
  data() {
    const propsInputText = {
      placeholder: "my placeholder",
      labelContent: "",
      leftLabel: false,
      hasIconSearch: true,
      readOnly: false,
    };
    return propsInputText;
  },
  setup() {
    const tabs = ref(LIST_TAB);
    return {
      tabs,
    };
  },
};
</script>
<style scoped>
@import url(../../css/layout/menu.css);
</style>