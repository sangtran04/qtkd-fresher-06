<template>
  <div class="tag-input">
    <div 
    v-for="(tag, index) in tags" 
    :key="tag" 
    class="tag-input_tag">
      <span @click="removeTag(index)">x</span>
      {{ tag }}
    </div>
    <input
      type="text"
      placeholder="EnteraTag"
      class="tag-input_text"
      @keydown="addTag"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ["hello", "world"],
    };
  },
  methods: {
    addTag(event) {
      if (event.code == "Comma" || event.code == "Enter") {
        event.preventDefault();
        var val = event.target.value.trim();
        if (val.length > 0) {
          this.tags.push(val);
          event.target.value = "";
        }
      }
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
  },
};
</script>

<style>
.tag-input {
  width: 100%;
  border: 1px solid #eee;
  font-size: 0.9em;
  height: 50px;
}
.tag-input_tag {
  height: 30px;
  float: left;
  margin-right: 10px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 05px;
  border-radius: 5px;
}

.tag-input_tag > span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input_tag > span {
  cursor: pointer;
  opacity: 0.75;
}

.tag-input_text {
  border: none;
  outline: none;
  font-size: 0.9em;
  line-height: 50px;
  background: none;
}
</style>