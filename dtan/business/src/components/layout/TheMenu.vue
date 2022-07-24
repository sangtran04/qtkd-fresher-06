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
        <div class="item__icon__right" 
        v-for="contact in contacts"
        :key="contact.id"
        >
          <div :class="contact.iconContact"></div>
          <BaseTooltip class="show__tooltip" 
          :contentTooltip="contact.tooltip"
          :width="contact.width"
          />
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
import LIST_CONTACT from "@/constants/contact";
import LIST_TAB from "@/constants/listtab";
import { ref } from "vue";
import BaseTab from "../../components/base/BaseTab.vue";
import TextField from "../../components/base/BaseTextField.vue";
import BaseTooltip from "../base/BaseTooltip.vue";

export default {
  components: {
    TextField,
    BaseTab,
    BaseTooltip
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
    const contacts = ref(LIST_CONTACT);
    return {
      tabs,contacts
    };
  },
};
</script>
<style scoped>
@import url(../../css/layout/menu.css);
</style>