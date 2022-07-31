<template>
  <div class="dropdown">
    <div class="dropdown__select" @click="showDataOnclick()">
      <span class="">{{ text }}</span>
      <div class="dropdown-button-down center-item">
        <div v-if="this.showData == false" class="icon--down"></div>
        <div v-if="this.showData == true" class="icon--up"></div>
      </div>
    </div>
    <div class="drop__container" v-show="showData">
      <div class="dropdown__search">
        <input type="text" placeholder="Tìm kiếm" />
        <div class="button-search center-item">
          <div class="icon--search"></div>
        </div>
      </div>
      <div class="dropdown__data">
        <div class="dropdown__item">-Không chọn-</div>
        <div
          class="dropdown__item"
          @click="itemOnselect(item)"
          v-for="item in data"
          :key="item.id"
          :selected="item == 'khong chon'"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTextField from "./BaseTextField.vue";
export default {
  data() {
    return {
      showData: false,
      data: [
        { id: 1, name: "dong" },
        { id: 2, name: "anh" },
      ],
      text: null,
    };
  },
  props: {
    url: String,
    propText: String,
    PropValue: String,
    isLoadData: {
      type: Boolean,
      default: true,
    },
  },

  created() {
    /**
    thực hiện lấy dữ liệu từ API ?
    author: dongdv 31/07/2022
     */
    if (this.isLoadData) {
      fetch(this.url)
        .then((res) => res.json())
        .then((res) => {
          this.data = res;
        })
        .catch((res) => {
          console.log(res);
        });
    }
  },

  methods: {
    /**
    thực hiện ẩn hiện các item 
    author: dongdv 31/07/2022
     */
    showDataOnclick() {
      this.showData = !this.showData;
    },
    /**
    thực hiện chọn một item
    author: dongdv 31/07/2022
     */
    itemOnselect(item) {
      this.text = item.name;
      this.showData = false;
    },
  },
};
</script>

<style scoped>
.dropdown {
  width: 100%;
  min-width: 200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
}
.dropdown__select {
  width: 100%;
  min-width: 200px;
  height: 32px;
  border: 1px solid var(--border-input-color);
  /* primary-color-blue */
  /* border:  1px solid var(--primary-color); */
  border-radius: 4px;
  background-color: #fff;
  padding-left: 16px;
  color: #1f2229;
  padding-right: 30px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
}

.drop__container {
  /* display: none; */
  box-sizing: border-box;
  box-shadow: 0 2px 6px #00000052;
  position: absolute;
  top: 29px;
  left: 0;
  right: 0;
  border-radius: 0 0 4px 4px;
  border-top: 1px solid var(--border-input-color);
  z-index: 100;
  background-color: #fff;
}

.dropdown-button-down {
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
.dropdown__data {
  width: 100%;
  min-width: 200px;
  box-sizing: border-box;
}

.dropdown__search {
  position: relative;
  height: 40px;
  border: 1px solid var(--border-input-color);
  border-left: none;
  border-right: none;
  border-top: none;
}

.dropdown__search input {
  width: 100%;
  height: 100%;
  padding: 8px 36px 8px 16px;
  box-sizing: border-box;
  border: none;
  outline: none;
}

.button-search {
  width: 32px;
  height: 32px;
  position: absolute;
  right: 0px;
  top: 4px;
  cursor: pointer;
}

.dropdown__item {
  width: 100%;
  height: 32px;
  padding: 6px 32px 6px 16px;
  border: 1px solid transparent;
  box-sizing: border-box;
  color: #1f2229;
  position: relative;
}

.item-selected::after {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -336px -144px;

  position: absolute;
  right: 12px;
  top: calc(50% - 10px);
}

.dropdown__item:hover {
  background-color: #f0f2f4;
}

.dropdown__item:active {
  color: var(--primary-color);
}

.dropdown__item:first-child:active {
  color: black;
}

.dropdown__item:first-child {
  margin-top: 8px;
}

.dropdown__item:last-child {
  margin-bottom: 8px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #99a1b2;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #99a1b2;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #99a1b2;
}
</style>