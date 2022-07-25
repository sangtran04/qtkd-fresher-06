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
      <!-- <BaseTextField labelContent="true" /> -->
      <BaseDropdown :options="options" @click="clickHandler(event)" />

      <div style="margin-top: 15px; margin-left: 15px">
        <BaseCombobox />
      </div>

      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />
    </div>
  </div>
</template>

<script>
import BaseCheckbox from "./../base/BaseCheckbox.vue";
import BaseTag from "./../base/BaseTag.vue";
import BaseToastMessage from "./../base/BaseToastMessage.vue";
// import BaseTextField from "./../base/BaseTextField.vue";
import BaseDropdown from "./../base/BaseDropdown.vue";
import BaseCombobox from "./../base/BaseCombobox.vue";
import BaseSelect from "./../base/BaseSelect.vue";

export default {
  components: {
    BaseCheckbox,
    BaseTag,
    BaseToastMessage,
    // BaseTextField,
    BaseDropdown,
    BaseCombobox,
    BaseSelect,
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
      options: [{ name: "sdasd" }, { name: "dasd2" }],
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      }
    };
  },
  props: {
    return: {},
  },
};
</script>

<style>
</style>