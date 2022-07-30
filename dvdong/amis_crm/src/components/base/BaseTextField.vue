<template>
  <div class="input">
    <div v-if="hasIconSearch" class="icon icon--search"></div>
    <input
      class="input-text"
      type="text"
      id="myInput"
      :placeholder="placeholder"
      :class="{ 'input-search': hasIconSearch }"
      :backgroundColor="backgroundColor"
      :borderColor="borderColor"
      :readonly="readOnly"
      @blur="showIconClose()"
    />
    <div
      v-show="hasIconClose"
      @click="clearTextInputOnclick()"
      :class="{ 'icon-close-16px': hasIconClose }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasIconClose: {
        type: Boolean,
        default: false,
      },
    };
  },

  props: {
    hasIconSearch: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
      require: true,
    },
    backgroundColor: {
      type: String,
      default: "#fff",
    },
    borderColor: {
      type: String,
      default: "#d3d7de"
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    /**
     *  xóa text trong ô input
     * author: dvdong 30/07/2022
     */
    clearTextInputOnclick() {
      this.value = "";
      //document.getElementById("myInput").value = "";
    },

    /**
     * hàm ẩn hiện nút close ?
     * author: dvdong 30/07/2022
     */
    showIconClose() {
      var check = document.getElementById("myInput").value;
      console.log(check);
      if (check != "") {
        this.hasIconClose = true;
      }
    },
  },
};
</script>

<style scoped>
.input {
  position: relative;
  width: 100%;
}

.input-text {
  height: 32px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  padding: 8px 16px 8px 16px;
  box-sizing: border-box;
  border: 1px solid v-bind(borderColor);
  /* background-color: #f0f2f4 !important; */
  background-color: v-bind(backgroundColor);
  color: #99a1b2;
  text-overflow: ellipsis;
}

.input-search {
  padding: 8px 16px 8px 30px !important;
}

.input-text:focus {
  box-sizing: border-box;
  background-color: #fff ;
  border-color: #4262f0 !important;
  border: 1px solid;
  color: #1f2229;
}

.input .icon--search {
  position: absolute;
  top: 0;
  margin: 8px;
  cursor: pointer;
  margin-right: 30px;
}

.input .icon-close-16px {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}

input:read-only{
  pointer-events: none;
  background-color: #E2E4E9;
  border: 1px solid #D3D7DE;
}

.input .icon--search:read-only {
  pointer-events: none;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #99a1b2;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #99a1b2;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #99a1b2;
}
</style>