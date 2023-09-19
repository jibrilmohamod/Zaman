<template>
    <div class="basis-1/3 pb-4">
        <TheHeader :title="menu.name">
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
        {{ slug }}
        {{ menu }}
    </div>
</template>

<script setup>
// get route params 
const route = useRoute();
const slug = ref(route.params.slug);
// get menu items from server
const { data } = await useFetch('/api/menu');
const FullMenu = ref(data.value.menu);
// get corresponding menu that has the same slug as the route params using destructuring
const menu = ref(null);
const { BreakfastMenu, MainMenu } = FullMenu.value;
if (route.params.slug === 'BreakfastMenu') {
    menu.value = BreakfastMenu;
} else {
    menu.value = MainMenu;
}
</script>

<style scoped></style>
