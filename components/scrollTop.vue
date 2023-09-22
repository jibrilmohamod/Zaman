<template>
 <div>
  <!-- Scroll to top button -->
  <button
   v-show="showScrollButton"
   @click="scrollToTop"
   class="fixed bottom-4 right-4 z-50 p-3 text-white rounded-full bg-[#DD5903] animate-bounce"
  >
   <Icon name="akar-icons:arrow-up" class="text-2xl" />
  </button>
 </div>
</template>

<script setup>
 import { ref, onMounted, onBeforeUnmount } from "vue"

 const showScrollButton = ref(false)

 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth",
  })
 }

 const handleScroll = () => {
  showScrollButton.value = window.scrollY > 100 // Adjust 100 to control when the button appears
 }

 onMounted(() => {
  window.addEventListener("scroll", handleScroll)
 })

 onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
 })
</script>

<style lang="scss" scoped></style>
