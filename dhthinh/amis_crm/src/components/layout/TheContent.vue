<template>
  <div class="content">
    <!-- <BaseToggle switchText="Switch" />
        <BaseToggle switchText="Switch Disabled" :switchDisabled="true"/> -->
    <div class="content__table">
      <table class="table">
        <thead>
          <tr>
            <th class="icon__setcolumn">
              <div class="btn-settings-column icon-sticky-setting-column">
                <span class="icon-add_colums_16"></span>
              </div>
            </th>
            <th class="text-align-center" style="width: 40px">
              <input class="checkbox" type="checkbox" name="" id=""/>
            </th>
            <th style="width: 150px" class="text-align-left">Thẻ</th>
            <th class="text-align-left" style="width: 120px">Xưng hô</th>
            <th class="text-align-left" style="width: 250px">Họ và tên</th>
            <th class="text-align-left" style="width: 180px">Chức danh</th>
            <th class="text-align-left" style="width: 150px">ĐT di động</th>
            <th class="text-align-left" style="width: 150px">ĐT cơ quan</th>
            <th class="text-align-left" style="width: 250px">Email cơ quan</th>
            <th class="text-align-left" style="width: 250px">Email cá nhân</th>
            <th class="text-align-left" style="width: 150px">Tổ chức</th>
            <th class="text-align-left" style="width: 150px">Địa chỉ</th>
            <th class="text-align-left" style="width: 150px">Tỉnh/Thành phố</th>
            <th class="text-align-left" style="width: 150px">Quận/Huyện</th>
            <th class="text-align-left" style="width: 150px">Phường/Xã</th>
            <th class="text-align-left" style="width: 150px">Nguồn gốc</th>
            <th class="text-align-left" style="width: 150px">Loại hình</th>
            <th class="text-align-left" style="width: 150px">Lĩnh vực</th>
            <th class="text-align-left" style="width: 150px">Mô tả</th>
            <th class="text-align-left" style="width: 150px">Bố cục</th>
            <th class="text-align-left" style="width: 150px">Chủ sở hữu</th>
            <th class="text-align-left" style="width: 150px">Dùng chung</th>
            <th class="text-align-left" style="width: 150px">Facebook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <th class="text-align-center">
              <input class="checkbox" type="checkbox" name="" id="" td/>
            </th>
            <td class="text-align-left"></td>
            <td class="text-align-left">Anh</td>
            <td class="text-align-left text--blue">
              Đặng Hữu Thịnh
            </td>
            <td class="text-align-left">Nhân Viên</td>
            <td class="text-align-left text--blue" >
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left">Hoàng Long</td>
            <td class="text-align-left">Vân Thị</td>
            <td class="text-align-left">Ninh Bình</td>
            <td class="text-align-left">Gia Viễn</td>
            <td class="text-align-left">Xã Gia Tân</td>
            <td class="text-align-left">Good boy</td>
            <td class="text-align-left">Dịch vụ</td>
            <td class="text-align-left">QTKD</td>
            <td class="text-align-left">Code phần mềm</td>
            <td class="text-align-left">3 phần</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
            <td class="text-align-left">Không</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
          </tr>
          <tr>
            <td></td>
            <th class="text-align-center">
              <input class="checkbox" type="checkbox" name="" id="" td/>
            </th>
            <td class="text-align-left"></td>
            <td class="text-align-left">Anh</td>
            <td class="text-align-left text--blue">
              Đặng Hữu Thịnh
            </td>
            <td class="text-align-left">Nhân Viên</td>
            <td class="text-align-left text--blue" >
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left">Hoàng Long</td>
            <td class="text-align-left">Vân Thị</td>
            <td class="text-align-left">Ninh Bình</td>
            <td class="text-align-left">Gia Viễn</td>
            <td class="text-align-left">Xã Gia Tân</td>
            <td class="text-align-left">Good boy</td>
            <td class="text-align-left">Dịch vụ</td>
            <td class="text-align-left">QTKD</td>
            <td class="text-align-left">Code phần mềm</td>
            <td class="text-align-left">3 phần</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
            <td class="text-align-left">Không</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
          </tr>
          <tr>
            <td></td>
            <th class="text-align-center">
              <input class="checkbox" type="checkbox" name="" id="" td/>
            </th>
            <td class="text-align-left"></td>
            <td class="text-align-left">Anh</td>
            <td class="text-align-left text--blue">
              Đặng Hữu Thịnh
            </td>
            <td class="text-align-left">Nhân Viên</td>
            <td class="text-align-left text--blue" >
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left">Hoàng Long</td>
            <td class="text-align-left">Vân Thị</td>
            <td class="text-align-left">Ninh Bình</td>
            <td class="text-align-left">Gia Viễn</td>
            <td class="text-align-left">Xã Gia Tân</td>
            <td class="text-align-left">Good boy</td>
            <td class="text-align-left">Dịch vụ</td>
            <td class="text-align-left">QTKD</td>
            <td class="text-align-left">Code phần mềm</td>
            <td class="text-align-left">3 phần</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
            <td class="text-align-left">Không</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
          </tr>
          <tr>
            <td></td>
            <th class="text-align-center">
              <input class="checkbox" type="checkbox" name="" id="" td/>
            </th>
            <td class="text-align-left"></td>
            <td class="text-align-left">Anh</td>
            <td class="text-align-left text--blue">
              Đặng Hữu Thịnh
            </td>
            <td class="text-align-left">Nhân Viên</td>
            <td class="text-align-left text--blue" >
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left">Hoàng Long</td>
            <td class="text-align-left">Vân Thị</td>
            <td class="text-align-left">Ninh Bình</td>
            <td class="text-align-left">Gia Viễn</td>
            <td class="text-align-left">Xã Gia Tân</td>
            <td class="text-align-left">Good boy</td>
            <td class="text-align-left">Dịch vụ</td>
            <td class="text-align-left">QTKD</td>
            <td class="text-align-left">Code phần mềm</td>
            <td class="text-align-left">3 phần</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
            <td class="text-align-left">Không</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
          </tr>
          <tr>
            <td></td>
            <th class="text-align-center">
              <input class="checkbox" type="checkbox" name="" id="" td/>
            </th>
            <td class="text-align-left"></td>
            <td class="text-align-left">Anh</td>
            <td class="text-align-left text--blue">
              Đặng Hữu Thịnh
            </td>
            <td class="text-align-left">Nhân Viên</td>
            <td class="text-align-left text--blue" >
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left">Hoàng Long</td>
            <td class="text-align-left">Vân Thị</td>
            <td class="text-align-left">Ninh Bình</td>
            <td class="text-align-left">Gia Viễn</td>
            <td class="text-align-left">Xã Gia Tân</td>
            <td class="text-align-left">Good boy</td>
            <td class="text-align-left">Dịch vụ</td>
            <td class="text-align-left">QTKD</td>
            <td class="text-align-left">Code phần mềm</td>
            <td class="text-align-left">3 phần</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
            <td class="text-align-left">Không</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
          </tr>
          <tr>
            <td></td>
            <th class="text-align-center">
              <input class="checkbox" type="checkbox" name="" id="" td/>
            </th>
            <td class="text-align-left"></td>
            <td class="text-align-left">Anh</td>
            <td class="text-align-left text--blue">
              Đặng Hữu Thịnh
            </td>
            <td class="text-align-left">Nhân Viên</td>
            <td class="text-align-left text--blue" >
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left">Hoàng Long</td>
            <td class="text-align-left">Vân Thị</td>
            <td class="text-align-left">Ninh Bình</td>
            <td class="text-align-left">Gia Viễn</td>
            <td class="text-align-left">Xã Gia Tân</td>
            <td class="text-align-left">Good boy</td>
            <td class="text-align-left">Dịch vụ</td>
            <td class="text-align-left">QTKD</td>
            <td class="text-align-left">Code phần mềm</td>
            <td class="text-align-left">3 phần</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
            <td class="text-align-left">Không</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
          </tr>
          <tr>
            <td></td>
            <th class="text-align-center">
              <input class="checkbox" type="checkbox" name="" id="" td/>
            </th>
            <td class="text-align-left"></td>
            <td class="text-align-left">Anh</td>
            <td class="text-align-left text--blue">
              Đặng Hữu Thịnh
            </td>
            <td class="text-align-left">Nhân Viên</td>
            <td class="text-align-left text--blue" >
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left">Hoàng Long</td>
            <td class="text-align-left">Vân Thị</td>
            <td class="text-align-left">Ninh Bình</td>
            <td class="text-align-left">Gia Viễn</td>
            <td class="text-align-left">Xã Gia Tân</td>
            <td class="text-align-left">Good boy</td>
            <td class="text-align-left">Dịch vụ</td>
            <td class="text-align-left">QTKD</td>
            <td class="text-align-left">Code phần mềm</td>
            <td class="text-align-left">3 phần</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
            <td class="text-align-left">Không</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
          </tr>
          <tr>
            <td></td>
            <th class="text-align-center">
              <input class="checkbox" type="checkbox" name="" id="" td/>
            </th>
            <td class="text-align-left"></td>
            <td class="text-align-left">Anh</td>
            <td class="text-align-left text--blue">
              Đặng Hữu Thịnh
            </td>
            <td class="text-align-left">Nhân Viên</td>
            <td class="text-align-left text--blue" >
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left">Hoàng Long</td>
            <td class="text-align-left">Vân Thị</td>
            <td class="text-align-left">Ninh Bình</td>
            <td class="text-align-left">Gia Viễn</td>
            <td class="text-align-left">Xã Gia Tân</td>
            <td class="text-align-left">Good boy</td>
            <td class="text-align-left">Dịch vụ</td>
            <td class="text-align-left">QTKD</td>
            <td class="text-align-left">Code phần mềm</td>
            <td class="text-align-left">3 phần</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
            <td class="text-align-left">Không</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
          </tr>
          <tr>
            <td></td>
            <th class="text-align-center">
              <input class="checkbox" type="checkbox" name="" id="" td/>
            </th>
            <td class="text-align-left"></td>
            <td class="text-align-left">Anh</td>
            <td class="text-align-left text--blue">
              Đặng Hữu Thịnh
            </td>
            <td class="text-align-left">Nhân Viên</td>
            <td class="text-align-left text--blue" >
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left">Hoàng Long</td>
            <td class="text-align-left">Vân Thị</td>
            <td class="text-align-left">Ninh Bình</td>
            <td class="text-align-left">Gia Viễn</td>
            <td class="text-align-left">Xã Gia Tân</td>
            <td class="text-align-left">Good boy</td>
            <td class="text-align-left">Dịch vụ</td>
            <td class="text-align-left">QTKD</td>
            <td class="text-align-left">Code phần mềm</td>
            <td class="text-align-left">3 phần</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
            <td class="text-align-left">Không</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
          </tr>
          <tr>
            <td></td>
            <th class="text-align-center">
              <input class="checkbox" type="checkbox" name="" id="" td/>
            </th>
            <td class="text-align-left"></td>
            <td class="text-align-left">Anh</td>
            <td class="text-align-left text--blue">
              Đặng Hữu Thịnh
            </td>
            <td class="text-align-left">Nhân Viên</td>
            <td class="text-align-left text--blue" >
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left">Hoàng Long</td>
            <td class="text-align-left">Vân Thị</td>
            <td class="text-align-left">Ninh Bình</td>
            <td class="text-align-left">Gia Viễn</td>
            <td class="text-align-left">Xã Gia Tân</td>
            <td class="text-align-left">Good boy</td>
            <td class="text-align-left">Dịch vụ</td>
            <td class="text-align-left">QTKD</td>
            <td class="text-align-left">Code phần mềm</td>
            <td class="text-align-left">3 phần</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
            <td class="text-align-left">Không</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
          </tr>
          <tr>
            <td></td>
            <th class="text-align-center">
              <input class="checkbox" type="checkbox" name="" id="" td/>
            </th>
            <td class="text-align-left"></td>
            <td class="text-align-left">Anh</td>
            <td class="text-align-left text--blue">
              Đặng Hữu Thịnh
            </td>
            <td class="text-align-left">Nhân Viên</td>
            <td class="text-align-left text--blue" >
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              <div class="text--icon">
                <div class="icon-telephone"></div>
                <div>0878398141</div>
              </div>
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left text--blue">
              thinh191204033@gmail.com
            </td>
            <td class="text-align-left">Hoàng Long</td>
            <td class="text-align-left">Vân Thị</td>
            <td class="text-align-left">Ninh Bình</td>
            <td class="text-align-left">Gia Viễn</td>
            <td class="text-align-left">Xã Gia Tân</td>
            <td class="text-align-left">Good boy</td>
            <td class="text-align-left">Dịch vụ</td>
            <td class="text-align-left">QTKD</td>
            <td class="text-align-left">Code phần mềm</td>
            <td class="text-align-left">3 phần</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
            <td class="text-align-left">Không</td>
            <td class="text-align-left">Đặng Hữu Thịnh</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="navigate">
      <div class="navigate__left">Tổng số: 893</div>
      <div class="navigate__right">
        <div class="page__size">
          <BaseDropDown
            :arrays="PAGESIZE"
            dropdownContent="20 Bản ghi trên trang"
          />
        </div>
        <div class="icon-pre2"></div>
        <div class="icon-pre1"></div>
        <div class="navigate__text" style="font-weight: 500">1 đến 50</div>
        <div class="icon-next1"></div>
        <div class="icon-next2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PAGESIZE from '../../constants/PageSize'
import BaseDropDown from '../base/BaseDropDown.vue'
export default {
  name: "TheContent",
  components: {
    BaseDropDown,
},
  data() {
    return {
      PAGESIZE,
    }
  },
};
</script>

<style>
@import url(../../style/table.css);
@import url(../../style/navigate.css);

.btn-settings-column {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}
.icon-sticky-setting-column {
  z-index: 1001;
  top: 9px;
  right: 2px;
  background-color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  /* overflow: hidden; */
  box-shadow: 0 2px 6px #00000052;
}

.icon-sticky-setting-column:hover {
  background-color: #d3d7de;
  border-radius: 50%;
}

.icon-add_colums_16 {
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  background: url('../../assets/Resource/img/icon_collection.svg') no-repeat 0 0;
}

.content {
  flex: 1;
  position: relative;
}

.page__size {
  width: 182px;
}

.icon__setcolumn {
  padding: 0 10px 0 12px;
  width: 30px;
}
</style>