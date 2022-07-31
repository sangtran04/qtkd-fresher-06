<template>
  <div class="content">
    <button @click="toggleLeftSidebar" class="show">
     <slot></slot>
         <div class="collapse"  v-if="showLeftSidebar">Hide Books</div>
        <div class="collapse" v-else>Show Books</div>
     </button>
<!-- 
     <button @click="toggleLeftSidebar" class="show">
         <div class="collapse" v-if="showLeftSidebar">Hide Books</div>
        <div  v-else>Show Books</div>
     </button> -->
    <!-- <button class="show" @click="toggleLeftSidebar">
    {{showLeftSidebar ? 'Hidess' : 'Showss'}}</button> -->

    <div class="table-wrapper">
      <table class="table" >
        <thead>
          <tr>
            <th style="width: 20px;">
              <div class="btn-settings-column icon-sticky-setting-column">
                <span class="icon-add_colums_16"></span>
              </div>
            </th>
            <th style="width: 20px;">
              <input class="checkbox" type="checkbox" name="" id="" />
            </th>
            <th style="width: 150px" class="text-align-left">Thẻ</th>
            <th class="text-align-left" style="width: 80px">Xưng hô</th>
            <th class="text-align-left" style="width: 140px">Họ và tên</th>
            <th class="text-align-left" style="width: 120px">Chức danh</th>
            <th class="text-align-left" style="width: 100px">ĐT di động</th>
            <th class="text-align-left" style="width: 100px">ĐT cơ quan</th>
            <th class="text-align-left" style="width: 120px">Email cơ quan</th>
            <th class="text-align-left" style="width: 120px">Email cá nhân</th>
            <th class="text-align-left" style="width: 100px">Tổ chức</th>
            <th class="text-align-left" style="width: 100px">Địa chỉ</th>
            <th class="text-align-left" style="width: 100px">Tỉnh/Thành phố</th>
            <th class="text-align-left" style="width: 100px">Quận/Huyện</th>
            <th class="text-align-left" style="width: 100px">Phường/Xã</th>
            <th class="text-align-left" style="width: 100px">Nguồn gốc</th>
            <th class="text-align-left" style="width: 100px">Loại hình</th>
            <th class="text-align-left" style="width: 100px">Lĩnh vực</th>
            <th class="text-align-left" style="width: 100px">Mô tả</th>
            <th class="text-align-left" style="width: 100px">Bố cục</th>
            <th class="text-align-left" style="width: 100px">Chủ sở hữu</th>
            <th class="text-align-left" style="width: 100px">Doanh thu</th>
            <th class="text-align-left" style="width: 100px">Dùng chung</th>
            <th class="text-align-left" style="width: 100px">Facebook</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input class="checkbox" type="checkbox" name="" id="" />
            </td>
            <td ></td>
            <td style="width: 80px">Anh</td>
            <td class="text-align-left text--blue" style="width: 140px">
              KhiemNV
            </td>
            <td class="text-align-left" style="width: 120px">Nhân Viên</td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon text--blue ">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left" style="width: 100px">PTIT</td>
            <td class="text-align-left" style="width: 100px">\</td>
            <td class="text-align-left" style="width: 100px">Bắc Giang</td>
            <td class="text-align-left" style="width: 100px">Đường Lâm</td>
            <td class="text-align-left" style="width: 100px">Bản Nậm</td>
            <td class="text-align-left" style="width: 100px">Good boy</td>
            <td class="text-align-left" style="width: 100px">Dịch vụ</td>
            <td class="text-align-left" style="width: 100px">QTKD</td>
            <td class="text-align-left" style="width: 100px">Nghiên cứu</td>
            <td class="text-align-left" style="width: 100px">3 phần</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
            <td class="text-align-left" style="width: 100px">280000000</td>
            <td class="text-align-left" style="width: 100px">Không</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
          </tr>
          <tr>
            <td></td>
            <td >
              <input class="checkbox" type="checkbox" name="" id="" />
            </td>
            <td style="width: 100px" class="text-align-left"></td>
            <td class="text-align-left" style="width: 80px">Anh</td>
            <td class="text-align-left text--blue" style="width: 140px">
              KhiemNV
            </td>
            <td class="text-align-left" style="width: 120px">-</td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left" style="width: 100px">PTIT</td>
            <td class="text-align-left" style="width: 100px">\</td>
            <td class="text-align-left" style="width: 100px">Bắc Giang</td>
            <td class="text-align-left" style="width: 100px">Đường Lâm</td>
            <td class="text-align-left" style="width: 100px">Bản Nậm</td>
            <td class="text-align-left" style="width: 100px">Good boy</td>
            <td class="text-align-left" style="width: 100px">Dịch vụ</td>
            <td class="text-align-left" style="width: 100px">QTKD</td>
            <td class="text-align-left" style="width: 100px">Nghiên cứu</td>
            <td class="text-align-left" style="width: 100px">3 phần</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
            <td class="text-align-left" style="width: 100px">280000000</td>
            <td class="text-align-left" style="width: 100px">Không</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-align-right" style="width: 50px">
              <input class="checkbox" type="checkbox" name="" id="" />
            </td>
            <td style="width: 100px" class="text-align-left"></td>
            <td class="text-align-left" style="width: 80px">Anh</td>
            <td class="text-align-left text--blue" style="width: 140px">
              KhiemNV
            </td>
            <td class="text-align-left" style="width: 120px">-</td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left" style="width: 100px">PTIT</td>
            <td class="text-align-left" style="width: 100px">\</td>
            <td class="text-align-left" style="width: 100px">Bắc Giang</td>
            <td class="text-align-left" style="width: 100px">Đường Lâm</td>
            <td class="text-align-left" style="width: 100px">Bản Nậm</td>
            <td class="text-align-left" style="width: 100px">Good boy</td>
            <td class="text-align-left" style="width: 100px">Dịch vụ</td>
            <td class="text-align-left" style="width: 100px">QTKD</td>
            <td class="text-align-left" style="width: 100px">Nghiên cứu</td>
            <td class="text-align-left" style="width: 100px">3 phần</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
            <td class="text-align-left" style="width: 100px">280000000</td>
            <td class="text-align-left" style="width: 100px">Không</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-align-right" style="width: 50px">
              <input class="checkbox" type="checkbox" name="" id="" />
            </td>
            <td style="width: 100px" class="text-align-left"></td>
            <td class="text-align-left" style="width: 80px">Anh</td>
            <td class="text-align-left text--blue" style="width: 140px">
              KhiemNV
            </td>
            <td class="text-align-left" style="width: 120px">Nhân Viên</td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left" style="width: 100px">PTIT</td>
            <td class="text-align-left" style="width: 100px">\</td>
            <td class="text-align-left" style="width: 100px">Bắc Giang</td>
            <td class="text-align-left" style="width: 100px">Đường Lâm</td>
            <td class="text-align-left" style="width: 100px">Bản Nậm</td>
            <td class="text-align-left" style="width: 100px">Good boy</td>
            <td class="text-align-left" style="width: 100px">Dịch vụ</td>
            <td class="text-align-left" style="width: 100px">QTKD</td>
            <td class="text-align-left" style="width: 100px">Nghiên cứu</td>
            <td class="text-align-left" style="width: 100px">3 phần</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
            <td class="text-align-left" style="width: 100px">280000000</td>
            <td class="text-align-left" style="width: 100px">Không</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-align-right" style="width: 50px">
              <input class="checkbox" type="checkbox" name="" id="" />
            </td>
            <td style="width: 100px" class="text-align-left"></td>
            <td class="text-align-left" style="width: 100px">Anh</td>
            <td class="text-align-left text--blue" style="width: 140px">
              KhiemNV
            </td>
            <td class="text-align-left" style="width: 120px">Nhân Viên</td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left" style="width: 100px">PTIT</td>
            <td class="text-align-left" style="width: 100px">\</td>
            <td class="text-align-left" style="width: 100px">Bắc Giang</td>
            <td class="text-align-left" style="width: 100px">Đường Lâm</td>
            <td class="text-align-left" style="width: 100px">Bản Nậm</td>
            <td class="text-align-left" style="width: 100px">Good boy</td>
            <td class="text-align-left" style="width: 100px">Dịch vụ</td>
            <td class="text-align-left" style="width: 100px">QTKD</td>
            <td class="text-align-left" style="width: 100px">Nghiên cứu</td>
            <td class="text-align-left" style="width: 100px">3 phần</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
            <td class="text-align-left" style="width: 100px">280000000</td>
            <td class="text-align-left" style="width: 100px">Không</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-align-right" style="width: 50px">
              <input class="checkbox" type="checkbox" name="" id="" />
            </td>
            <td style="width: 100px" class="text-align-left"></td>
            <td class="text-align-left" style="width: 80px">Anh</td>
            <td class="text-align-left text--blue" style="width: 140px">
              KhiemNV
            </td>
            <td class="text-align-left" style="width: 120px">Nhân Viên</td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left" style="width: 100px">PTIT</td>
            <td class="text-align-left" style="width: 100px">\</td>
            <td class="text-align-left" style="width: 100px">Bắc Giang</td>
            <td class="text-align-left" style="width: 100px">Đường Lâm</td>
            <td class="text-align-left" style="width: 100px">Bản Nậm</td>
            <td class="text-align-left" style="width: 100px">Good boy</td>
            <td class="text-align-left" style="width: 100px">Dịch vụ</td>
            <td class="text-align-left" style="width: 100px">QTKD</td>
            <td class="text-align-left" style="width: 100px">Nghiên cứu</td>
            <td class="text-align-left" style="width: 100px">3 phần</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
            <td class="text-align-left" style="width: 100px">280000000</td>
            <td class="text-align-left" style="width: 100px">Không</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-align-right" style="width: 50px">
              <input class="checkbox" type="checkbox" name="" id="" />
            </td>
            <td style="width: 100px" class="text-align-left"></td>
            <td class="text-align-left" style="width: 80px">Anh</td>
            <td class="text-align-left text--blue" style="width: 140px">
              KhiemNV
            </td>
            <td class="text-align-left" style="width: 120px">Nhân Viên</td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left" style="width: 100px">PTIT</td>
            <td class="text-align-left" style="width: 100px">Lạng Giang</td>
            <td class="text-align-left" style="width: 100px">Bắc Giang</td>
            <td class="text-align-left" style="width: 100px">Đường Lâm</td>
            <td class="text-align-left" style="width: 100px">Bản Nậm</td>
            <td class="text-align-left" style="width: 100px">Good boy</td>
            <td class="text-align-left" style="width: 100px">Dịch vụ</td>
            <td class="text-align-left" style="width: 100px">QTKD</td>
            <td class="text-align-left" style="width: 100px">Nghiên cứu</td>
            <td class="text-align-left" style="width: 100px">3 phần</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
            <td class="text-align-left" style="width: 100px">280000000</td>
            <td class="text-align-left" style="width: 100px">Không</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-align-right" style="width: 50px">
              <input class="checkbox" type="checkbox" name="" id="" />
            </td>
            <td style="width: 100px" class="text-align-left"></td>
            <td class="text-align-left" style="width: 80px">Anh</td>
            <td class="text-align-left text--blue" style="width: 140px">
              KhiemNV
            </td>
            <td class="text-align-left" style="width: 120px">Nhân Viên</td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left" style="width: 100px">PTIT</td>
            <td class="text-align-left" style="width: 100px">Lạng Giang</td>
            <td class="text-align-left" style="width: 100px">Bắc Giang</td>
            <td class="text-align-left" style="width: 100px">Đường Lâm</td>
            <td class="text-align-left" style="width: 100px">Bản Nậm</td>
            <td class="text-align-left" style="width: 100px">Good boy</td>
            <td class="text-align-left" style="width: 100px">Dịch vụ</td>
            <td class="text-align-left" style="width: 100px">QTKD</td>
            <td class="text-align-left" style="width: 100px">Nghiên cứu</td>
            <td class="text-align-left" style="width: 100px">3 phần</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
            <td class="text-align-left" style="width: 100px">280000000</td>
            <td class="text-align-left" style="width: 100px">Không</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
          </tr>
          <tr>
            <td></td>
            <td class="text-align-right" style="width: 50px">
              <input class="checkbox" type="checkbox" name="" id="" />
            </td>
            <td style="width: 100px" class="text-align-left"></td>
            <td class="text-align-left" style="width: 80px">Anh</td>
            <td class="text-align-left text--blue" style="width: 140px">
              KhiemNV
            </td>
            <td class="text-align-left" style="width: 120px">Nhân Viên</td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 100px">
              <div class="text--icon">
                <div class="icon-rowscall"></div>
             <div class="text--blue"> 0968842979 </div>
              </div>
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left text--blue" style="width: 120px">
             khiemnv@yahoo.com
            </td>
            <td class="text-align-left" style="width: 100px">PTIT</td>
            <td class="text-align-left" style="width: 100px">\</td>
            <td class="text-align-left" style="width: 100px">Bắc Giang</td>
            <td class="text-align-left" style="width: 100px">Đường Lâm</td>
            <td class="text-align-left" style="width: 100px">Bản Nậm</td>
            <td class="text-align-left" style="width: 100px">Good boy</td>
            <td class="text-align-left" style="width: 100px">Dịch vụ</td>
            <td class="text-align-left" style="width: 100px">QTKD</td>
            <td class="text-align-left" style="width: 100px">Nghiên cứu</td>
            <td class="text-align-left" style="width: 100px">3 phần</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
            <td class="text-align-left" style="width: 100px">280000000</td>
            <td class="text-align-left" style="width: 100px">Không</td>
            <td class="text-align-left" style="width: 100px">KhiemNV</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="navigate">
      <div class="navigate__left">Tổng số: 893</div>
      <div class="navigate__right">
        <select class="navigate__select" name="" id="">
          <option value="">50 bản ghi trên trang</option>
          <option value="">50 bản ghi trên trang</option>
        </select>
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


export default {
  name: "TheContent", 
  components: {

},
 props: {
  toggleLeftSidebar: {
      type: Function,
      required: true
    },
     toggleRightSidebar: {
      type: Function,
      required: true
    },
 },
};
</script>

<style>
 *{
  box-sizing: border-box;
} 
.table {
    width: 2600px;
    border-spacing: unset;
    border: unset;
    border-collapse: collapse;
    font-size: 13px;
  
}
th.checkbox {
margin-left: 0px;

}
.table thead tr {
    background-color: rgb(240 242 244);
}

.table thead tr th {
    font-weight: 700;
    
}

.table tbody tr td {
    font-weight: 500;
      text-overflow: ellipsis;
}

.table .text--blue {
    color: #0f2fbd !important;
}
.table .text--blue:hover {
  text-decoration: underline;
}

.text--icon {
    display: flex;
    align-items: center;
    line-height: 40px;
}

.table tr {
    height: 40px;
    border-bottom: 0.5px solid #D3D7DE;
    cursor: pointer;
}

td, th {
padding: 6.5px 0 6.5px 12px;
}
th:first-child   {
    padding: 6.5px 0 6.5px 12px;
    border: none;
}
th, td:nth-child(4) {
  width: 100px;

}
table td {


  text-align: left;
}

 th :nth-child(3) {
  width: 150px;
  padding: 0;
}
th .checkbox{
  position: relative;
right: 12px;
}
/* th .checkbox {
  padding: 6.5px 0 6.5px 12px;
  text-align: left;
} */
th.text-align-left {
  text-align: left;
}
.table tbody tr:hover {
    background-color: #E7EBFD;
}


.text-align-left {
    text-align: left;
}


table tr.row--selected {
    background-color: #dedede;
}

.table-wrapper {

    box-sizing: border-box;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 56px;
    overflow: auto;
}

table thead {
    position: sticky;
}
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
  padding: 10px 4px 4px;
  width: 16px;
  height: 16px;
  background: url('../../assets/img/icon_collection.svg') no-repeat 0 0;
}

.content {
  position: relative;
}

.navigate {
    width: 100%;
    background-color: white;
    height: 56px;
    position: absolute;
    top: calc(100% - 56px);
    box-sizing: border-box;
    border: 1px solid #D3D7DE;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    font-size: 13px;
    color: #1F2229;
}

.navigate__left {
    font-weight: 500;
}

.navigate__right {
    padding-right: 16px;
    display: flex;
    align-items: center;
    width: 340px;
    justify-content: space-between;
}
.show {
  position: absolute;
  width: 100px;
  height: 100px;
  color: red;
  z-index: 1003;
}
</style>