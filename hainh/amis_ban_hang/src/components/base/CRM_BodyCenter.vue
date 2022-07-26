<template>
  <div class="body-center">
    <div class="content-body">
      <div class="crm-header">
        <div class="crm-header__form-dynamic">
          <div class="title-image">Ảnh tiềm năng</div>
          <div class="image-profile avatar-user"></div>
        </div>
      </div>
      <!-- Thông tin chung -->
      <div class="group-field">
        <div class="group-field__title">
          <span class="misa-medium-title">Thông tin chung</span>
        </div>
        <div class="group-field__content">
          <div class="group-row">
            <div class="left-group">
              <BaseTextField
                v-for="field in GROUP_FIELD_1"
                :key="field.id"
                backgroundColor="#fff"
                borderColor="#d3d7de"
                preventHover
                :labelContent="field.label"
                :required="field.required"
                :hasToolTipIcon="field.hasToolTipIcon"
                :fullToolTipContent="field.fullToolTipContent"
                :type="field.type"
              />
            </div>
            <div class="right-group">
              <BaseTextField
                v-for="field in GROUP_FIELD_2"
                :key="field.id"
                backgroundColor="#fff"
                borderColor="#d3d7de"
                preventHover
                :labelContent="field.label"
                :required="field.required"
                :hasToolTipIcon="field.hasToolTipIcon"
                :fullToolTipContent="field.fullToolTipContent"
                :readOnly="field.readOnly"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Thông tin tổ chức -->
      <div class="group-field">
        <div class="group-field__title">
          <span class="misa-medium-title">Thông tin tổ chức</span>
        </div>
        <div class="group-field__content">
          <div class="group-row">
            <div class="left-group">
              <BaseTextField
                v-for="field in GROUP_FIELD_3"
                :key="field.id"
                backgroundColor="#fff"
                borderColor="#d3d7de"
                preventHover
                :labelContent="field.label"
                :required="field.required"
                :hasToolTipIcon="field.hasToolTipIcon"
                :fullToolTipContent="field.fullToolTipContent"
              />
            </div>
            <div class="right-group">
              <BaseTextField
                v-for="field in GROUP_FIELD_4"
                :key="field.id"
                backgroundColor="#fff"
                borderColor="#d3d7de"
                preventHover
                :labelContent="field.label"
                :required="field.required"
                :hasToolTipIcon="field.hasToolTipIcon"
                :fullToolTipContent="field.fullToolTipContent"
                :readOnly="field.readOnly"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 5 -->
      <div class="group-field">
        <div class="group-field__title">
          <span class="misa-medium-title">Thông tin tổ chức</span>
        </div>
        <div class="group-field__content">
          <div class="group-row">
            <div class="left-group">
              <BaseTextField
                v-for="field in GROUP_FIELD_5"
                :key="field.id"
                backgroundColor="#fff"
                borderColor="#d3d7de"
                preventHover
                :labelContent="field.label"
                :required="field.required"
                :hasToolTipIcon="field.hasToolTipIcon"
                :fullToolTipContent="field.fullToolTipContent"
              />
            </div>
            <div class="right-group">
              <BaseTextField
                v-for="field in GROUP_FIELD_6"
                :key="field.id"
                backgroundColor="#fff"
                borderColor="#d3d7de"
                preventHover
                :labelContent="field.label"
                :required="field.required"
                :hasToolTipIcon="field.hasToolTipIcon"
                :fullToolTipContent="field.fullToolTipContent"
                :readOnly="field.readOnly"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Thông tin mô tả -->
      <div class="group-field">
        <div class="group-field__title">
          <span class="misa-medium-title">Thông tin mô tả</span>
        </div>
        <div class="group-field__content">
          <div class="group-row">
            <div class="label-wrap">
              <label class="misa-label show-tooltip"
                >Mô tả
                <TooltipComp contentTooltip="Mô tả" />
              </label>
            </div>
            <BaseTextArea height="73.69px" />
          </div>
        </div>
      </div>
      <!-- Thông tin hệ thống -->
      <div class="group-field">
        <div class="group-field__title">
          <span class="misa-medium-title">Thông tin hệ thống</span>
        </div>
        <div class="group-field__content">
          <div class="group-row">
            <div class="left-group">
              <div style="display: flex" class="align-center">
                <div class="label-wrap">
                  <label class="misa-label show-tooltip"
                    >Dùng chung
                    <TooltipComp contentTooltip="Dùng chung" />
                  </label>
                </div>
                <div class="checkbox-wrap"><BaseCheckbox /></div>
              </div>
              <BaseTextField
                key=".id"
                backgroundColor="#fff"
                borderColor="#d3d7de"
                preventHover
                labelContent="Mã tiềm năng"
                :required="false"
                :hasToolTipIcon="false"
                fullToolTipContent=""
                placeholder="Mã tự sinh"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CHANGE_PAGE_SIZE from '@/constants/change-page-size'
import TooltipComp from './TooltipComp.vue'
import BaseTextField from './BaseTextField.vue'
import * as GROUP_FIELD from '../../constants/fileld-add-form'
import BaseTextArea from './BaseTextArea.vue'
import BaseCheckbox from './BaseCheckbox.vue'

export default {
  name: 'CRMBodyCenter',
  components: {
    BaseTextField,
    TooltipComp,
    BaseTextArea,
    BaseCheckbox,
  },
  props: {},
  data() {
    const GROUP_FIELD_1 = GROUP_FIELD.GROUP_FILED_1
    const GROUP_FIELD_2 = GROUP_FIELD.GROUP_FILED_2
    const GROUP_FIELD_3 = GROUP_FIELD.GROUP_FILED_3
    const GROUP_FIELD_4 = GROUP_FIELD.GROUP_FILED_4
    const GROUP_FIELD_5 = GROUP_FIELD.GROUP_FILED_5
    const GROUP_FIELD_6 = GROUP_FIELD.GROUP_FILED_6
    return {
      GROUP_FIELD_1,
      GROUP_FIELD_2,
      GROUP_FIELD_3,
      GROUP_FIELD_4,
      GROUP_FIELD_5,
      GROUP_FIELD_6,
      CHANGE_PAGE_SIZE,
    }
  },
  mounted() {
    // console.log(GROUP_FIELD.GROUP_FILED_1)
  },
}
</script>

<style>
.checkbox-wrap {
  height: 100%;
  display: flex;
  align-items: center;
}
.align-center {
  align-items: center;
}
.label-wrap {
  width: 160px;
  height: 32px;
  line-height: 32px;
  align-items: center;
  display: flex;
}
.left-group {
  display: flex;
  flex-direction: column;
  margin-right: 8rem;
  flex-basis: 50%;
  flex-shrink: 1;
}
.right-group {
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  flex-shrink: 1;
}

.row-item__left {
  min-width: 160px;
  max-width: 160px;
  max-height: 32px;
  align-items: center;
  display: flex;
}

.body-center {
  /* overflow-y: scroll; */
  height: 100vh;
}

.content-body {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
  height: calc(100vh - 148px);
  scroll-behavior: smooth;
  padding-top: 32px;
}

.crm-header {
  display: flex;
  flex-direction: column;
  position: relative;
}

.crm-header__form-dynamic {
  margin-bottom: 4rem;
  margin-top: 0;
  height: 84px;
}

.first-group {
}

.group-field {
}

.title-image {
  margin-left: 56px;
  font-size: 18px !important;
  display: block;
  margin-bottom: 16px;
  font-family: Bold;
  font-weight: 500;
}

.image-profile {
  margin-left: 56px;
  width: 48px;
  height: 48px;
  overflow: hidden;
  background-color: #fff;
  cursor: pointer;
}
.avatar-user {
}
.image-profile:before {
  content: '';
  width: 48px;
  height: 48px;
  display: inline-block;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -144px -848px;
}

.group-field__title {
  max-width: 1420px;
  padding: 0;
  margin: 0 56px 4px;
  overflow: hidden;
}

.misa-medium-title {
  font-size: 18px;
  color: #1f2229;
  font-family: Bold;
}

.group-field__content {
  display: flex;
}

.group-field__content > .group-row {
  padding: 8px 56px;
}

.group-row {
  width: 100%;
  height: 100%;
  display: flex;
}

.group-box {
  display: flex;
}
</style>
