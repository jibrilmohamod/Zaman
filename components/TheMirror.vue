<template>
 <div
  class="pt-8 pl-6 pr-3 md:px-0 pb-4 md:container md:m-auto md:pt-16 md:flex"
 >
  <!-- image slot -->
  <div class="hidden md:flex basis-1/2 m-auto">
   <slot name="image2"> </slot>
  </div>

  <div class="md:basis-1/2 md:flex md:flex-col h-full md:items-end">
   <!-- small text with line to its right -->
   <div class="flex items-center justify-between md:justify-normal md:gap-10">
    <div
     class="w-20 outline outline-1 outline-[#BF926B] justify-self-end mr-5"
    ></div>
    <h5
     class="font-jost uppercase text-[13px] font-[600] tracking-widest text-[#DD5903] w-fit md:text-lg"
     id="p"
    >
     {{ smallText }}
    </h5>
   </div>

   <!-- section header -->
   <div class="py-4">
    <h4
     class="text-[40px] font-semibold leading-tight uppercase md:text-5xl md:font-[600] md:leading-[60px] md:tracking-wider 2xl:text-6xl text-right"
    >
     {{ header }}
    </h4>
   </div>

   <!-- section body -->
   <div class="flex flex-col md:items-end">
    <!-- paragraph -->
    <p
     class="font-jost text-[18px] leading-relaxed tracking-wide text-[#4a4a4b] 2xl:w-3/4 2xl:pb-7 text-right"
    >
     {{ paragraph }}
    </p>
   </div>

   <!-- button and image slots -->
   <div class="flex flex-col sm:w-10/12">
    <!-- Button slot -->
    <slot name="button"> </slot>

    <!-- Image slot -->
    <slot name="image"> </slot>
   </div>
  </div>
 </div>
</template>

<script setup>
 // define props with default values and types
 defineProps({
  smallText: {
   type: String,
   default: "Refresh your taste buds",
  },
  header: {
   type: String,
   default: "Enjoy An Unforgettable Dining Experience",
  },
  paragraph: {
   type: String,
   default:
    "  We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.",
  },
 })
</script>

<style scoped></style>
