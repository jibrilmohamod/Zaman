<template>
  <div
    class="2xl:w-[490px] lg:w-[400px] w-[90vw] py-4 xl:py-8 border-b border-gray-400 xl:grid"
  >
    <div class="flex justify-between gap-2">
      <!-- Item Image  -->
      <div class="">
        <NuxtImg
          src="v1695223477/2O0A2680_t8cqwg.webp"
          :alt="name"
          provider="cloudinary"
          loading="lazy"
          sizes="sm:100px md:50vw lg:400px"
          format="webp"
          class="object-cover h-[70px] rounded-sm shadow-md shadow-black"
        />
      </div>
      <!-- Item Name and Details  -->
      <div class="flex flex-col gap-2 basis-3/5">
        <!-- Item Name  -->
        <p
          class="font-semibold text-[22px] tracking-wide md:text-[25px] md:font-bold text-[#DD5903]"
        >
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

<style lang="scss" scoped></style>
