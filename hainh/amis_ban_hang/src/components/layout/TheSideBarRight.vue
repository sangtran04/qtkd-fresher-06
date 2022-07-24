<template>
  <div class="side-bar-right">
    <div class="side-bar-right-quick-action">
      <button
        class="mat-tooltip-trigger item-ation btn-add-grid-layout show-tooltip"
      >
        <span class="icon-phone-gray-16-sidebar"></span>
        <TooltipComp contentTooltip="Thêm cuộc gọi" /></button
      ><!---->
      <button
        class="mat-tooltip-trigger item-ation btn-add-grid-layout show-tooltip"
      >
        <span class="icon-task-16-sidebar"></span>
        <TooltipComp contentTooltip="Thêm nhiệm vụ" /></button
      ><!---->
      <button
        class="mat-tooltip-trigger item-ation btn-add-grid-layout show-tooltip"
      >
        <span class="icon-demo-16-sidebar"></span>
        <TooltipComp contentTooltip="Thêm lịch hẹn" /></button
      ><!---->
      <button
        haspermission="SendEmail"
        class="mat-tooltip-trigger item-ation btn-add-grid-layout ng-star-inserted show-tooltip"
      >
        <span class="icon-send-mail-16"></span>
        <TooltipComp contentTooltip="Gửi Email" /></button
      ><!----><!----><!----><!---->
    </div>
    <div class="group-history-deal">
      <div class="title-history-deal">Lịch sử giao dịch</div>
      <div class="data-history-deal">
        <div class="empty-record">
          <div class="ic-empty-record"></div>
          <div>Không có dữ liệu.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TooltipComp from '../base/TooltipComp.vue'
export default {
  name: 'TheSideBarRight',
  components: { TooltipComp },
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
.empty-record {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  font-style: italic;
  color: #586074;
  font-weight: 500;
}
.data-history-deal {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ic-empty-record {
  display: inline-block;
  width: 42px;
  height: 46px;
}

.ic-empty-record:before {
  content: '';
  display: inline-block;
  width: 42px;
  height: 46px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/EmptyInbox.svg)
    no-repeat 0px 0px;
}

.data-history-deal {
  height: 100%;
}
.group-history-deal {
  padding: 16px;
}
.title-history-deal {
  font-size: 16px;
  font-weight: 500;
  color: #1f2229;
  font-family: Bold;
  height: 2rem;
  line-height: 2rem;
}
.icon-phone-gray-16-sidebar {
  margin-top: 5px;
}
.icon-phone-gray-16-sidebar::before {
  content: '';
  width: 16px;
  height: 16px;
  display: inline-block;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -176px -321px;
  cursor: pointer;
}
.icon-task-16-sidebar {
  margin-top: 4px;
}
.icon-task-16-sidebar::before {
  content: '';
  width: 16px;
  height: 16px;
  display: inline-block;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -192px -321px;
  cursor: pointer;
}
.icon-demo-16-sidebar {
  margin-top: 4px;
}

.icon-demo-16-sidebar::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -208px -321px;
}
.icon-send-mail-16 {
  margin-top: 3px;
}
.icon-send-mail-16::before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat 0px -320px;
}
.side-bar-right {
  border-left: 1px solid rgb(222, 225, 230);
  position: relative;
}

.side-bar-right-quick-action {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d3d7de;
  height: 41px;
}

.side-bar-right-quick-action button {
  padding: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  border: none;
  background-color: #fff;
  outline: none;
  cursor: pointer;
}

.side-bar-right-quick-action button:hover {
  background-color: #f0f2f4;
}
</style>
