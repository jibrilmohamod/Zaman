<template>
  <div class="basis-1/3 pb-4">
    <TheHeader :title="menu.name">
      <template #image>
        <NuxtImg
          provider="cloudinary"
          format="webp"
          loading="lazy"
          alt="image"
          sizes="sm:100vw md:50vw lg:1500px"
          :modifiers="{ effect: 'colorize:30', color: 'black' }"
          src="v1694095370/2O0A8677_x3a9xc.webp"
          class="w-full h-full object-cover object-center"
        />
      </template>
    </TheHeader>
    <div class="container m-auto pl-6 pr-3 xl:pl-0 xl:pr-3">
      <h4
        v-if="slug === 'BreakfastMenu'"
        class="xl:w-2/4 xl:text-4xl py-5 text-2xl uppercase xl:pb-16 xl:pt-12"
      >
        Energize your morning with our
        <span class="text-[#DD5903] cursor-pointer border-button"> Breakfast </span>
        where you'll find a
        <span class="text-[#DD5903] cursor-pointer border-button"> mouthwatering </span>
        selection of dishes to jumpstart your day.
      </h4>
      <h4 v-else class="xl:w-2/4 xl:text-4xl py-5 text-2xl uppercase xl:pb-16 xl:pt-12">
        Indulge in the rich tapestry of flavors on our
        <span class="text-[#DD5903] cursor-pointer border-button"> Main Menu </span>,
        where each dish tells a unique story of
        <span class="text-[#DD5903] cursor-pointer border-button">
          culinary creativity
        </span>
        and passion.
      </h4>
      <MenuTabs :tabs="menu.categories[0]" />
    </div>
  </div>
</template>

<script setup>
// get route params
const route = useRoute();
const slug = ref(route.params.slug);
// get menu items from server
const { data } = await useFetch("/api/menu");
const FullMenu = ref(data.value.menu);
// get corresponding menu that has the same slug as the route params using destructuring
const menu = ref(null);
const { BreakfastMenu, MainMenu, Beverages } = FullMenu.value;
if (route.params.slug === "BreakfastMenu") {
  menu.value = BreakfastMenu;
} else if (route.params.slug === "MainMenu") {
  menu.value = MainMenu;
} else if (route.params.slug === "Beverages") {
  menu.value = Beverages;
}

// State
const activeTab = ref(0);

// Methods
const toggleTab = (index) => {
  activeTab.value = index;
  console.log(activeTab.value);
};

// seo
useSeoMeta({
  title: `${slug.value} | Zaman Restaurant`,
  description: "Zaman Restaurant Menu",
  image: "v1694095370/2O0A8677_x3a9xc.webp",
  ogDescription: "Zaman Restaurant Menu",
  ogTitle: `${slug.value} | Zaman Restaurant`,
  ogImage: "v1694095370/2O0A8677_x3a9xc.webp",
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
