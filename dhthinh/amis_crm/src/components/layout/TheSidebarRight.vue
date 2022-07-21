<template>
  <div class="sidebarright">
        <div class="sidebarright-quick">
            <div class="button-quick">
                <div class="icon-call"></div>
            </div>
            <div class="button-quick">
                <div class="icon-date"></div>
            </div>
            <div class="button-quick">
                <div class="icon-birth"></div>
            </div>
            <div class="button-quick">
                <div class="icon-email"></div>
            </div>
        </div>
        <div class="title-history">
            Lịch sử giao dịch
        </div>
        <div class="item-note">
            <div class="box-iconnote">
                <div class="icon-notebook"></div>
            </div>
            <div class="context-note">
                <div class="font-bold">Ghi chú</div>
                <div>Nguyễn Văn Hà (A006) - 12/08/2022</div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'TheSidebarRight',
    components: {
    }
}
</script>

<style>
    .sidebarright {
        border-left: solid 1px #ccc;
    }
    .sidebarright-quick {
        border-bottom: solid 1px #ccc;
        height: 40px;
        display: flex;
    }

    .button-quick {
        cursor: pointer;
        flex: 4;
        border: 0;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .button-quick:hover {
        background-color: #f0f2f4;
    }
    .title-history {
        font-family: Bold;
        font-size: 16px;
        padding: 16px;
        display: flex;
    }

    .item-note {
        display: flex;
        padding: 0 16px 12px;
    }

    .item-note:hover {
        background-color: #f0f2f4;
    }

    .context-note {
        font-size: 13px;
        padding-left: 8px;
    }
    .font-bold {
        font-family: Bold;
    }
    .box-iconnote {
        width: 28px;
        height: 28px;
        background-color: #2ec2fc;
        border-radius: 50%;
    }
</style>