<template>
  <div
    :style="{ background, color, content }"
    :class="[
      dark ? 'btn-dark' : '',
      green ? 'button--green' : '',
      'button',
    ]"
  >
    {{ buttonText }}
  </div>
</template>
<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Thêm mới",
    },
    dark: {
      type: Boolean,
      default: false,
    },
    green: {
      type: Boolean,
      default: false,
    },
    buttonDropdown: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
    background: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>
<style scoped>
.button {
  display: inline-block;
  text-decoration: none;
  /* background-color: transparent; */
  border: none;
  outline: none;
  padding: 0 8px;
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

.button-primary {
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
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

.button--blue {
  background-color: #4262f0;
}

.button--green {
  background-color: #31b491;
}

.button--red {
  background-color: #ec4141;
}

.btn-dark {
  background-color: black;
}
</style>