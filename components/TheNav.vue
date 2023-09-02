<template>
    <div>
        <NuxtLink to="/">
            <!-- site name and logo -->
            <div class="text-white absolute z-20 top-4 left-4">
                <h1 class="h-12 p-2 text-4xl font-Lexend">zaman</h1>
            </div>
        </NuxtLink>

        <!-- Hambuger menu -->
        <button @click="showMobileNav = !showMobileNav"
                class="absolute top-4 right-4 z-20 p-2 bg-white rounded-full">
            <IconCSS name="ci:menu-alt-01"
                     class="text-4xl text-black" />
        </button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>