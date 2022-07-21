<template>
  <div class="side-bar-right">
    <div class="r-quick-action">
      <button class="mat-tooltip-trigger item-ation btn-add-grid-layout">
        <span class="icon-phone-gray-16-sidebar"></span></button
      ><!---->
      <button class="mat-tooltip-trigger item-ation btn-add-grid-layout">
        <span class="ic-task-16-sidebar"></span></button
      ><!---->
      <button class="mat-tooltip-trigger item-ation btn-add-grid-layout">
        <span class="ic-demo-16-sidebar"></span></button
      ><!---->
      <button
        haspermission="SendEmail"
        class="mat-tooltip-trigger item-ation btn-add-grid-layout ng-star-inserted"
      >
        <span class="ic-send-mail-16"></span></button
      ><!----><!----><!----><!---->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      arrays: [
        {
          text: 'Link 1',
          link: '/about',
        },
        {
          text: 'Link 1',
          link: '/about',
        },
      ],
    }
  },
}
</script>

<style scoped>
.side-bar-right {
  grid-row: 3 / 4;
  border-left: 1px solid rgb(222, 225, 230);
}

.r-quick-action {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d3d7de;
  height: 41px;
}

.r-quick-action button {
  width: 100%;
  height: 100%;
  align-items: center;
  border: none;
  background-color: #fff;
  outline: none;
}
</style>
