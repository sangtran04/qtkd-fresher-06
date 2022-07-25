<template>
    <div>
        <datetime format="MM/DD/YYYY" width="300px" v-model="val"></datetime>
    </div>
</template>

<script>
import datetime from 'vuejs-datetimepicker';
    export default {
        components: { datetime }
    }
</script>

<style scoped>

</style>