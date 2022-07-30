<template>
  <div class="input">
    <div v-if="hasIconSearch" class="icon icon--search"></div>
    <input
      class="input-text"
      type="search"
      id="search"
      :placeholder="placeholder"
      :class="{ 'input-search': hasIconSearch }"
      :backgroundColor="backgroundColor"
      :borderColor="borderColor"
      :readonly="readOnly"
    />
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
      default: "#d3d7de",
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    
  },
};
</script>

<style scoped>
.input {
  position: relative;
  width: 100%;
}

.input-text {
  pointer-events: all;
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
  background-color: #fff;
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

input:read-only {
  pointer-events: none;
  background-color: #e2e4e9;
  border: 1px solid #d3d7de;
}

.input .icon--search:read-only {
  pointer-events: none;
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

#search::-webkit-search-cancel-button {
  -webkit-appearance: none;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -80px -16px;
}

#search::-webkit-search-cancel-button:hover {
  background-color: #d3d7de;
  border-radius: 50%;
  width: 16px;
  height: 16px;
}
</style>