<template>
    <div class="basis-1/3 pb-4">
        <TheHeader :title="route.params.menu">
            <template #image>
                <NuxtImg provider="cloudinary"
                         format="webp"
                         loading="lazy"
                         alt="image"
                         sizes="sm:100vw md:50vw lg:800px"
                         :modifiers="{ effect: 'colorize:30', color: 'black' }"
                         src="v1694095370/2O0A8677_x3a9xc.webp"
                         class="w-full h-full object-cover object-center" />
            </template>
        </TheHeader>



        {{ data.menu }}
    </div>
</template>

<script setup>
// get route params 
const route = useRoute();
const menu = ref(route.params.menu)

// get menu items from server
const { data } = await useFetch('/api/menu');
// get menu from data using destructuring
const { BreakfastMenu } = data.value.menu;





</script>

<style scoped></style>