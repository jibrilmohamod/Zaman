<template>
  <div class="relative text-white">
    <!-- Add a dark overlay -->
    <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
    <div>
      <!-- logo -->
      <TheNav />
      <!-- call to action -->
      <div
           class="absolute inset-0 flex items-center justify-center flex-col z-20 gap-4 mt-16 md:container md:m-auto md:pt-10 xl:pt-20 md:gap-10">
        <div class="uppercase font-jost flex justify-center items-center gap-2">
          <div class="w-16 h-0 outline outline-1 md:w-24"></div>
          <h3 class="">Welcome to Zaman</h3>
          <div class="w-16 h-0 outline outline-1 md:w-24"></div>
        </div>

        <h2 class="text-[40px] text-center font-semibold leading-tight text-gray-50 md:text-7xl xl:text-8xl">
          Delicious Food & Wonderful Eating Experience
        </h2>
        <h4 class="px-10 text-center font-jost md:text-xl">
          serving food , harmony and happiness since 2023
        </h4>
        <SiteLink to="/menu/">
          <NuxtButton name="View Menus"> </NuxtButton>
        </SiteLink>
      </div>
    </div>
    <!-- hero image -->
    <div class="relative h-[100vh]">
      <TheCarousel />
    </div>
  </div>
</template>

<script setup>
  // create an image array
</script>

<style scoped>
  /* Style for the dark overlay */
  .relative {
    position: relative;
  }

  .absolute {
    position: absolute;
  }

  .bg-black {
    background-color: rgba(0, 0, 0);
    /* Adjust the opacity as needed */
  }

  .opacity-50 {
    opacity: 0.55;
    /* Adjust the opacity as needed */
  }

  /* Z-index to control stacking order */
  .z-10 {
    z-index: 10;
  }

</style>
