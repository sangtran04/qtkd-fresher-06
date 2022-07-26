<template>
  <div :id="id" class="dropdown">
    <div
      class="crm-combo-box"
      @click="onClickDropBox"
      :class="{ isActive: isOpen }"
    >
      <div class="input">
        <span class="placeholder" :class="{ selected: isSelected }">{{
          refContent
        }}</span>
      </div>
      <div class="selection-arrow"></div>
    </div>
    <div class="dropdown-list" v-if="isOpen">
      <div class="select-search-dropdown">
        <input
          ref="danhInput"
          placeholder="Tìm kiếm"
          type="search"
          class="select-search__field"
        />
      </div>
      <DropDownItem
        :class="{ activeItem: this.refContent === item.text }"
        @changeContent="changeContent"
        v-for="(item, index) in arrays"
        :key="index"
        :item="item"
        :closeDropdown="callToClose"
        @click="ifSelected"
      >
        {{ item.text }}
      </DropDownItem>
    </div>
  </div>
</template>

<script>
import DropDownItem from './DropDownItem.vue'
import uuidv4 from '@/utils/random-id'
export default {
  components: {
    DropDownItem,
  },
  setup() {
    return {
      id: uuidv4(),
    }
  },
  data() {
    return {
      isOpen: false,
      refContent: '- Không chọn -',
      isSelected: false,
    }
  },
  props: {
    arrays: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    // Hàm thực hiện việc đóng DropDown
    callToClose() {
      this.isOpen = false
    },
    // Nếu click ra ngoài, drop down menu tắt
    onClick(event) {
      if (!document.getElementById(this.id).contains(event.target)) {
        this.isOpen = false
      }
    },
    // Thay đổi content của dropmenu
    changeContent(content) {
      this.refContent = content
    },
    // Kiểm tra props được truyền vào có input search không ?
    //
    onClickDropBox() {
      this.isOpen = !this.isOpen
      this.$refs?.danhInput?.focus()
      console.log(this.$refs.danhInput)
    },
    //
    ifSelected() {
      this.isSelected = true
    },
  },
  computed: {
    hasInputSearch() {
      return this.inputSearch
    },
  },
  created() {
    window.addEventListener('click', this.onClick)
  },
  beforeUnmount() {
    window.removeEventListener('click', this.onClick)
  },
}
</script>

<style scoped>
.select-search-dropdown {
  padding: 4px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: solid 1px #d3d7de !important;
}

.select-search-dropdown::after {
  content: '';
  display: inline-block;
  margin-right: 8px;
  width: 16px;
  height: 16px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -32px 0px;
}

.select-search__field {
  width: 100%;
  padding: 4px 4px 4px 16px;
  border: none;
  outline: none;
}

.dropdown {
  position: relative;
  width: fit-content;
  cursor: pointer;
  background: #ffffff;
  min-width: 182px;
  position: relative;
  width: 100%;
}
.dropdown-list {
  padding-top: 8px;
  padding-bottom: 8px;
  -ms-box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.32);
  -o-box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.32);
  box-shadow: 0 -1px 8px #00000052;
  background: #ffffff;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  width: 100%;
  bottom: 32px;
  right: 0px;
  position: absolute;
  z-index: 1000;
}
</style>

<style scoped>
.crm-combo-box {
  width: 100%;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #d3d7de;
  border-radius: 4px;
  height: 32px;
  cursor: pointer;
  user-select: text;
  height: 32px;
  position: relative;
  padding: 0 30px 0 16px;
}
.crm-combo-box .input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
}
.placeholder {
  line-height: 29px;
  color: #99a1b2;
}

.placeholder.selected {
  color: #1f2229;
}
.selection-arrow {
  background-repeat: no-repeat;
  background-position: center center;
  height: 100% !important;
  width: 32px !important;
  position: absolute;
  top: 0px;
  right: 0px;
}

.selection-arrow::after {
  content: '';
  width: 16px;
  height: 16px;
  display: inline-block;
  position: absolute;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -48px -31px;
  top: 7px;
  right: 8px;
}
</style>
