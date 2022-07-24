<template>
  <div class="combobox">
    <input class="combobox-input" placeholder="- None -"/>
    <div class="combobox-icon">
      <div class="icon icon--down"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.combobox {
  display: flex;
}

.combobox:hover {
    outline: 1px solid #7C869C;
    border-radius: 4px;
}

.combobox-input {
  border: 1px #d3d7de solid;
  outline: none;
  height: 32px;
  width: 210px;
  padding: 0 0 0 16px;
  box-sizing: border-box;
  line-height: 32px;
  color: #1F2229;
  border-radius: 4px 0 0 4px;
}

.combobox-input:hover {
    outline: 1px solid #7C869C;
}

.combobox-icon {
  border: 1px #d3d7de solid;
  width: 32px;
  height: 32px;
  border-radius: 0 4px 4px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left:none ;
}

.combobox-icon:hover {
    outline: 1px solid #7C869C;
}
</style>