<template>
  <div class="sidebar__left">
    <div class="filter-save">
      BỘ LỌC ĐÃ LƯU
      <div class="icon icon--up"></div>
    </div>
    <div class="filter-by">
      LỌC TIỀM NĂNG THEO
      <div class="icon icon--search"></div>
    </div>
    <div class="filter-select">
      <div
        v-for="(item, index) in listItem"
        :key="index"
        class="filter-select__item"
      >
        <BaseCheckbox
          :checkboxId="item['checkboxId']"
          :checkboxLabel="item['checkboxLabel']"
          :checked="index == 4"
        />
      </div>
      <!-- <div class="filter-select__item">
      <BaseCheckbox  checkboxId="1" checkboxLabel="Thẻ" checked/>
      </div>
      <div class="filter-select__item">
      <BaseCheckbox  checkboxId="2" checkboxLabel="Xưng hô"/>
      </div>
      <div class="filter-select__item">
      <BaseCheckbox  checkboxId="3" checkboxLabel="Họ và tên"/>
      </div>
      <div class="filter-select__item">
      <BaseCheckbox  checkboxId="4" checkboxLabel="Chức danh"/>
      </div>
      <div class="filter-select__item">
      <BaseCheckbox  checkboxId="5" checkboxLabel="ĐT di động"/>
      </div>
      <div class="filter-select__item">
        <BaseCheckbox  checkboxId="6" checkboxLabel="ĐT cơ quan"/>
      </div>
      <div class="filter-select__item">
        <BaseCheckbox  checkboxId="7" checkboxLabel="Email cơ quan"/>
      </div>
      <div class="filter-select__item">
        <BaseCheckbox  checkboxId="8" checkboxLabel="Email cá nhân"/>
      </div> -->

      <BaseTag />
      <base-toast-message></base-toast-message>
      <BaseTextField labelContent="true" />
      <BaseDropdown :options="options" @click="updateOption(option)" />

      <div style="margin-left: 15px">
        <BaseButton  buttonText="Thêm mới" :hasDropdown="true" :hasIcon="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from "./../base/BaseCheckbox.vue";
import BaseButton from "./../base/BaseButton.vue";
import BaseTag from "./../base/BaseTag.vue";
import BaseToastMessage from "./../base/BaseToastMessage.vue";
import BaseTextField from "./../base/BaseTextField.vue";
import BaseDropdown from "./../base/BaseDropdown.vue";

export default {
  components: {
    BaseCheckbox,
    BaseButton,
    BaseTag,
    BaseToastMessage,
    BaseTextField,
    BaseDropdown,
  },
  data() {
    return {
      listItem: [
        { checkboxId: 1, checkboxLabel: "Thẻ" },
        { checkboxId: 2, checkboxLabel: "Thẻ2" },
        { checkboxId: 3, checkboxLabel: "Thẻ3" },
        { checkboxId: 4, checkboxLabel: "Thẻ4" },
        { checkboxId: 5, checkboxLabel: "Thẻ5" },
        { checkboxId: 6, checkboxLabel: "Thẻ6" },
        { checkboxId: 7, checkboxLabel: "Thẻ7" },
      ],
    };
  },
  props: {
    options: {
      return: [{ name: "drop1" }, { name: "drop2" }],
    },
  },
};
</script>

<style>
</style>