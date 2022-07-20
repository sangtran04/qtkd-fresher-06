<template>
  <div class="content">
    <div class="table-wrap">
      <table id="lead-table" class="table">
        <tbody>
          <tr>
            <th></th>
            <th>#</th>
            <th>
              <span>Mã nhân viên</span>
              <i class="fas fa-sort"></i>
            </th>
            <th>
              <span>Họ và tên</span>
              <i class="fas fa-sort"></i>
            </th>
            <th>
              <span>Giới tính</span>
              <i class="fas fa-sort"></i>
            </th>
            <th>
              <span>Ngày sinh</span>
              <i class="fas fa-sort"></i>
            </th>
            <th>
              <span>Mức lương cơ bản</span>
              <i class="fas fa-sort"></i>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default { components: {} }
</script>

<style scoped>
.content {
  grid-row: 3 / 4;
  grid-column: auto;
}

.table-wrap {
  width: 100%;
  height: 100%;
  overflow: scroll;
  background-color: #fff;
}
#lead-table {
}

.table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  height: 100%;
}

td,
th {
  vertical-align: top;
}

th,
th > span {
}
</style>
