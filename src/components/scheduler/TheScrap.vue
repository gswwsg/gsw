<template>
<div class="menu-item">
    <base-dd listname="months" :ddlist="$store.state.months"></base-dd>
</div>

    <div class="menu-item">
    <base-dd listname="days" :ddlist="$store.state.days"></base-dd>
    </div>
</template>
<style scoped>
.menu-item {
    position: relative;
}
</style>