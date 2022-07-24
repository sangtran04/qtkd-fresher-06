<template>
  <div class="side-bar-left">
    <div class="saved_filter">
      <p>Bộ lọc đã lưu</p>
      <div><div class="icon-down"></div></div>
    </div>
    <div class="lead-filter">
      <p>LỌC TIỀM NĂNG THEO</p>
      <div><div class="icon-search"></div></div>
    </div>
    <div class="fillters">
      <div v-for="filter in LEAD_FILTERS" :key="filter.id" class="filter-item">
        <BaseCheckbox :id="filter.id" />
        <div class="filter-content">{{ filter.filter }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCheckbox from '../base/BaseCheckbox.vue'
import LEAD_FILTERS from '../../constants/lead-filters'
export default {
  name: 'TheSideBarLeft',
  components: {
    BaseCheckbox,
  },
  data() {
    return {
      LEAD_FILTERS,
    }
  },
}
</script>

<style scoped>
.icon-down {
  cursor: pointer;
}
.side-bar-left {
  border-right: 1px solid rgb(222, 225, 230);
  padding: 0 16px;
  padding-top: 20px;
}

.saved_filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.saved_filter > p {
  text-transform: uppercase;
  color: #586074;
}
.saved_filter > div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  cursor: pointer;
}
.saved_filter > div:hover {
  background-color: #e2e4e9;
}
.lead-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.lead-filter > p {
  text-transform: uppercase;
  color: #586074;
}
.filter-item {
  display: flex;
  margin-bottom: 16px;
}

.filter-content {
  margin-left: 8px;
}
</style>
