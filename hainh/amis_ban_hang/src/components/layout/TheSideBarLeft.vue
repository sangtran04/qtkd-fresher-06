<template>
  <div class="side-bar-left">
    <div class="saved_filter">
      <p>Bộ lọc đã lưu</p>
      <div class="icon-down"></div>
    </div>
    <div class="lead-filter">
      <p>LỌC TÌM KIẾM THEO</p>
      <div class="icon-search"></div>
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
.side-bar-left {
  grid-row: 3 / 4;
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

.lead-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.filter-item {
  display: flex;
  margin-bottom: 16px;
}

.filter-content {
  margin-left: 8px;
}
</style>
