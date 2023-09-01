<template>
    <div class="outline outline-1 outline-emerald-600">
        <NuxtCarousel :items-to-show="1"
                      class="h-screen">
            <NuxtSlide v-for="slide in 10"
                       :key="slide"
                       class="bg-red-700 border-2 border-red-700 h-screen">
                {{ slide }}
            </NuxtSlide>

            <template #addons>
                <NuxtNavigation />
                <NuxtPagination />
            </template>
        </NuxtCarousel>
    </div>
</template>

<script setup>
// create an image array

const { data } = useFetch("/api/hello");

console.log(data);
</script>

<style lang="scss" scoped></style>
