<template>
  <div style="display: inline-block">
    <div style="display: flex">
      <div
        class="button"
        :class="{
          'button-dropdown': hasDropdown,
          'button-icon': hasIcon,
          disable: hasDisable,
        }"
        :style="{ backgroundColor, color}"
      >
        <div class="icon icon--plus"></div>
        {{ buttonText }}
      </div>
      <div v-if="hasDropdown" class="button-drop">
        <div class="icon--down-white"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Thêm mới",
    },
    hasDropdown: {
      type: Boolean,
      default: false,
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
    hasDisable: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
  },
};
</script>
<style scoped>
.button {
  display: inline-block;
  text-decoration: none;
  border: none;
  outline: none;
  padding: 0 16px;
  border-radius: 4px;
  min-width: 20px;
  height: 32px;
  line-height: 32px;
  background-color: #4262f0;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
}

.button:hover {
  background-color: #2B4EEE;
}

.button:active {
  background-color: #133BEC;
}

.button-icon {
  position: relative;
  padding: 0px 16px 0px 32px;
  box-sizing: border-box;
}

.icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
}

.button-dropdown {
  border-radius: 4px 0 0 4px;
 
}

.button-drop {
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-color: #4262f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 4px 4px 0;
  border-left: 1px #ffffff solid;
  box-sizing: border-box;
}

.button-drop:hover {
  background-color: #2B4EEE;
}

.button-drop:active {
  background-color: #133BEC;
}

.button-secondary--blue {
  background-color: #e7ebfd;
  color: #4262f0;
}

.button-secondary--green {
  background-color: #d7f4ec;
  color: #31b491;
}

.button-secondary--red {
  background-color: #fad1d1;
  color: #ec4141;
}

.button-tertiary {
  background-color: #e2e4e9;
  color: #1f2229;
}

.button-tertiary--ouline {
  background-color: #e2e4e9;
  color: #1f2229;
  border: 1px #d3d7de solid;
}

.button__drop {
  display: flex;
}

.button-comboprimary {
  min-width: 20px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  display: flex;
  align-items: center;
  border-radius: 4px 0 0 4px;
  border-right: 1px #2b4eee solid;
}

.button-comboprimary .icon {
  display: inline-block;
  margin-right: 8px;
}

.button--dropdown {
  width: 32px;
  height: 32px;
  background-color: #4262f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 4px 4px 0;
  border-left: 1px #2b4eee solid;
}

.disable {
  opacity: 0.6;
  pointer-events: none;
}
</style>