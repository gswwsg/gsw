<template>
<option class="option-css">{{ value }}</option>
</template>

<script>
export default {
       props: ['id', 'value'],
}
</script>

<style scoped>

.option-css {
       padding: 10px;
}
</style>