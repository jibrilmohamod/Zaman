<template>
  <div class="basis-1/3 pb-4">
    <div class="text-center">
      <!-- small title  -->
      <p class="font-jost text-[#DD5903] uppercase font-semibold" id="p">{{ Bigcat }}</p>
      <!-- big title  -->
      <h1 class="text-3xl uppercase font-semibold">
        {{ smallcat }}
      </h1>
    </div>
    <div class="outline flex flex-wrap">
      <!-- menu items slot  -->
      <slot name="menuItem"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  Bigcat: {
    type: String,
    default: "Category",
  },
  smallcat: {
    type: String,
    default: "Small Category",
  },
});
</script>

<style lang="scss" scoped></style>
