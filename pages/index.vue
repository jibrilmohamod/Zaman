<template>
    <div class="">
        <TheHero />
        <TheAbout />
        <NuxtMenu />
    </div>
</template>
<script setup>


import AOS from 'aos';
onMounted(() => AOS.init());

</script>

<style lang="scss" scoped></style>
