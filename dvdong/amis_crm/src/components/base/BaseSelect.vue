<template>
  <label v-if="label">{{ label }}</label>
  <div class="styled-select">
    <select
      class="field"
      :value="modelValue"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value);
        },
      }"
    >
      <option value="" disabled selected hidden>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  <div class="icon icon--down"></div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "- None -",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.styled-select {
  display: inline-block;
  position: relative;
}

.field {
  width: 180px;
  height: 32px;
  border: 1px solid #d3d7de;
  padding: 0 0 0 16px;
  border-radius: 4px;
  outline: none;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
}

option {
  
  width: 50px;
  height: 50px;
}

.icon {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>