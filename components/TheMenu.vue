<template>
    <!-- utuytuytyutythgvhfgfgftydtrfdrtdrgfdsfsdfsfdsdfdfafdfdasdf -->
    <div class="container m-auto h-fit">
        <h4 class="xl:w-2/4 xl:text-4xl py-5 text-2xl uppercase xl:pb-10 xl:pt-12 pl-6 pr-3">
            Enjoy a diverse culinary adventure with our
            <NuxtLink class="text-[#DD5903] cursor-pointer border-button">
                breakfast
            </NuxtLink>
            ,
            <NuxtLink class="text-[#DD5903] cursor-pointer border-button"> lunch</NuxtLink> ,
            and
            <NuxtLink class="text-[#DD5903] cursor-pointer border-button">dinner</NuxtLink>
            options, providing something providing something delightful for every moment of
            the day.
        </h4>
        <!-- loop through menu categories -->
        <div class="md:flex">
            <MenuCategory v-for="category in [Desserts, Sandwiches, SomaliDishes]"
                          key="index"
                          :name="category.name"
                          class="basis-1/3">
                <!-- loop through menu items and add a dollar sign to price and  show only 5 items in each category -->
                <MenuItem v-for="item in category.items.slice(0, 3)"
                          :key="item.id"
                          :image="item.image"
                          :name="item.name"
                          :ingredients="item.ingredients"
                          :price="item.price">
                </MenuItem>
            </MenuCategory>
        </div>

        <!-- menu button  -->
        <div class="flex justify-center">
            <NuxtLink to="/menu/">
                <NuxtButton class="text-white border-button"
                            name="View Full Menu" />
            </NuxtLink>
        </div>

        <!-- menu image -->
        <div class="pt-8 h-64 pl-6 pr-3 md:hidden"
             data-aos="fade-up"
             data-aos-duration="1000">
            <NuxtImg loading="lazy"
                     format="webp"
                     alt="menu image"
                     provider="cloudinary"
                     sizes="sm:100px md:50vw lg:600px"
                     src="v1694007232/side-view-fried-meat-with-french-fries-ketchup_141793-4908_fv2qfo.jpg"
                     class="w-full h-full object-cover object-center rounded-md" />
        </div>
    </div>
</template>

<script setup>
    const { data } = await useFetch("/api/menu");
    const menu = ref(data.value.menu);
    // destructure menu categories from menu
    const { BreakfastMenu, MainMenu, Beverages } = menu.value;
    //destructure categories from Beverages
    const { categories } = MainMenu;
    console.log(categories);
    const { Desserts, Sandwiches, SomaliDishes } = categories[0];
    console.log(Desserts);
</script>

<style scoped></style>
