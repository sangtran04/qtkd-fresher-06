<template>
  <div class="tag-input" :style="{background}">
    <div 
    v-for="(tag, index) in tags" 
    :key="tag" 
    class="tag">
      {{ tag }}
      <span @click="removeTag(index)"><div class="icon icon--plus"></div></span>
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
  props: {
    background: {
      type: String,
      default: "#F6A2A2",
    }
  }
};
</script>

<style scope>
.tag {
  min-height: 20px;
  float: left;
  background-color: #F6A2A2;
  line-height: 16px;
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
  box-sizing: border-box;
}
.tag:hover {
  position: relative;
  padding: 4px 24px 4px 8px;
  background-position-y: center;
}
.tag .icon {
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 8px;
  margin-right: 4px;
}

.tag > span {
  cursor: pointer;
  opacity: 0.75;
}



.tag-input_text {
  border: 1px solid #ccc;
  outline: none;
  font-size: 0.9em;
  line-height: 50px;
  background: none;
}
</style>