<template>
    <div class="h-full">
        <NuxtCarousel :items-to-show="2">
            <NuxtSlide v-for="slide in 10"
                       :key="slide"
                       class="bg-red-700 h-10 w-10 outline-1 outline-green-500">
                {{ slide }}
            </NuxtSlide>

            <template #addons>
                <NuxtNavigation />
                <NuxtPagination />
            </template>
        </NuxtCarousel>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
