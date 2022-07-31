<template>
  <div class="sidebar__left" id="sidebar__left">
    <div class="filter-save">
      BỘ LỌC ĐÃ LƯU
      <div class="icon icon--up"></div>
    </div>
    <div class="filter-by">
      LỌC TIỀM NĂNG THEO
      <div class="icon--search"></div>
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

      <div class="xem-them">
        <hr width="68" size="30" />
        <span>Xem thêm</span>
        <hr width="68" size="30" />
      </div>

      <!-- test các component -->
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
    // BaseTag,
    // BaseToastMessage,
    // BaseTextField,
    // BaseDropdown,
    // BaseCombobox,
    // BaseSelect,
  },
  data() {
    return {
      listItem: [
        { checkboxId: 1, checkboxLabel: "Thẻ" },
        { checkboxId: 2, checkboxLabel: "Xưng hô" },
        { checkboxId: 3, checkboxLabel: "Họ và tên" },
        { checkboxId: 4, checkboxLabel: "Chức danh" },
        { checkboxId: 5, checkboxLabel: "ĐT di động" },
        { checkboxId: 6, checkboxLabel: "ĐT cơ quan" },
        { checkboxId: 7, checkboxLabel: "Email cơ quan" },
        { checkboxId: 8, checkboxLabel: "Email tổ chức" },
        { checkboxId: 8, checkboxLabel: "Tổ chức" },
        { checkboxId: 8, checkboxLabel: "Địa chỉ" },
        { checkboxId: 8, checkboxLabel: "Tỉnh/Thành phố " },
        { checkboxId: 8, checkboxLabel: "Quận/Huyện" },
        { checkboxId: 8, checkboxLabel: "Phường/Xã" },
        { checkboxId: 8, checkboxLabel: "Nguồn gốc" },
        { checkboxId: 8, checkboxLabel: "Loại hình" },
        { checkboxId: 8, checkboxLabel: "Lĩnh vực" },
        { checkboxId: 8, checkboxLabel: "Mô tả" },
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
        category: "",
        title: "",
        description: "",
        location: "",
        pets: 1,
        extras: {
          catering: false,
          music: false,
        },
      },
    };
  },
  props: {
    return: {},
  },
};
</script>

<style>
</style>