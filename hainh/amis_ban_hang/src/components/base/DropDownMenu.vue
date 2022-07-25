<template>
  <div :id="id" class="dropdown">
    <button
      type="button"
      @click="isOpen = !isOpen"
      :class="{ isActive: isOpen }"
    >
      <div class="test">{{ dropdownContent }}</div>
      <div class="icon-down icon"></div>
    </button>
    <div class="dropdown-list" v-if="isOpen">
      <DropDownItem
        v-for="(item, index) in arrays"
        :key="index"
        :item="item"
        :closeDropdown="callToClose"
      >
        {{ item.text }}
      </DropDownItem>
    </div>
  </div>
</template>

<script>
import DropDownItem from './DropDownItem.vue'
import uuid from '@/utils/random-id'
export default {
  components: {
    DropDownItem,
  },
  setup() {
    return {
      id: uuid(),
    }
  },
  data() {
    return {
      isOpen: false,
    }
  },
  props: {
    arrays: {
      type: Array,
      default: () => [],
    },
    dropdownContent: {
      type: String,
      required: true,
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
button {
  position: relative;
  padding: 0 8px 0 16px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.3s;
  height: 32px;
  width: 100%;
  border: 1px solid #d3d7de;
  padding-left: 16px;
  padding-right: 8px;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button:focus {
  outline: 0px;
}

.dropdown {
  position: relative;
  width: fit-content;
  cursor: pointer;
  background: #ffffff;
  min-width: 182px;
  position: relative;
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
}
</style>
