<template>
  <div class="2xl:w-[490px] lg:w-[400px] w-[90vw] py-4 xl:py-8 border-b border-gray-400 xl:h-[170px] md:hidden">
    <div class=" justify-between gap-2 flex ">
      <!-- Item Image  -->
      <div class="">
        <NuxtImg src="v1695223477/2O0A2680_t8cqwg.webp"
                 :alt="name"
                 provider="cloudinary"
                 loading="lazy"
                 sizes="sm:100px md:50vw lg:400px"
                 format="webp"
                 class="object-cover w-full h-[70px] rounded-sm shadow-md shadow-black" />
      </div>
      <!-- Item Name and Details  -->
      <div class="flex flex-col gap-2 basis-3/5">
        <!-- Item Name  -->
        <p class="font-semibold text-[22px] tracking-wide md:text-[25px] md:font-bold text-[#DD5903]">
          {{ name }}
        </p>
        <!-- Item Details  -->
        <p class="font-jost text-[#4a4a4b] text-[14px] md:text-[16px]">
          {{ ingredients }}
        </p>
      </div>
      <!-- Item Price  -->
      <div class="text-[#272727] font-jost md:text-[16px]">
        Ksh<span class="text-[#DD5903]">{{ `${price}.0` }}</span>
      </div>
    </div>
  </div>
  <div class="py-2 hidden md:block xl:w-[400px] 2xl:w-[480px]">
    <div class="">
      <NuxtImg :src="image"
               :alt="name"
               provider="cloudinary"
               loading="lazy"
               :modifiers="{ effect: 'colorize:30', color: 'black' }"
               sizes="sm:100px md:50vw lg:600px"
               format="webp"
               class="object-cover w-full h-[250px] shadow-2xl shadow-black rounded-md" />
    </div>
    <!-- Item Name and Details  -->
    <div class="py-4 min-h-28">
      <div class="flex gap-2 basis-3/5 justify-between items-center">
        <!-- Item Name  -->
        <p class="font-semibold tracking-wide md:text-[25px] md:font-bold text-[#DD5903]">
          {{ name }}
        </p>
        <!-- Item Details  -->
        <div class="text-[#272727] font-jost md:text-[16px]">
          Ksh<span class="text-[#DD5903]">{{ `${price}.0` }}</span>
        </div>
      </div>
      <!-- Item Price  -->
      <p class="font-jost text-[#4a4a4b] text-[14px] md:text-[16px]">
        {{ ingredients }}
      </p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    name: {
      type: String,
      default: "Item Name",
    },
    ingredients: {
      type: String,
      default: "Item Ingredients",
    },
    price: {
      default: "$0.00",
    },
    image: {
      type: String,
      default: "v1694095332/2O0A2492_xhfbyj.webp",
    },
  });
</script>

<style lang="scss"
       scoped></style>
