<template>
  <div class="sidebarright">
    <div class="sidebarright__icon">
      <div class="sidebarright__icon--right">
        <div class="icon-call"></div>
      </div>
      <div class="sidebarright__icon--right">
        <div class="icon-complete"></div>
      </div>
      <div class="sidebarright__icon--right">
        <div class="icon-complete"></div>
      </div>
      <div class="sidebarright__icon--right">
        <div class="icon-email"></div>
      </div>
    </div>
    <div class="sidebarright__text">
      <div class="sidebarright__text--title">Lịch sử giao dịch</div>
      <div class="sidebarright__text--item">
        <div class="text-icon">
        <div class="icon-note"></div>
        </div>
        <div class="text-note">
          <div class="note">Ghi chú</div>
          <div class="name">Nguyễn Văn Hà(A006) - 12/08/2021</div>

        </div>
      </div>

      
      </div>

  </div>
</template>

<script>
export default {
  name: "TheSidebarright",
  components: {},
};
</script>

<style scoped>
.sidebarright {
  border-left: solid 1px #ccc;
}
.sidebarright__icon {
  border-bottom: solid 1px #ccc;
  height: 40px;
  display: flex;
}
.sidebarright__icon--right {
  cursor: pointer;
  flex-grow: 1;
  border: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebarright__icon--right:hover {
  background-color: #f0f2f4;
}
.sidebarright__text--title {
    font-size: 16px;
    font-weight: bold;
    color: #1f2229;
    padding: 16px;

}
.sidebarright__text--item {
  display: flex;
  padding: 0 16px 12px;
}
.sidebarright__text--item {
  display: flex;


}
.icon:hover {
  background-color: #f0f2f4;
}
.text-note {
  font-size: 13px;
  padding-left: 8px;
}
.text-icon{
  width: 28px;
  height: 28px;
  background-color: #2ec2fc;
  border-radius: 50%;
}
</style>
