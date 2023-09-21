<template>
  <div class="relative">
    <!-- Bottom Image -->
    <NuxtImg
      :src="bottomImageSrc"
      alt="Bottom Image"
      provider="cloudinary"
      class="large-image"
    />

    <!-- Top Image (with overlay) -->
    <NuxtImg
      :src="topImageSrc"
      alt="Top Image"
      provider="cloudinary"
      class="small-image"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props
const props = defineProps({
  bottomImageSrc: {
    type: String,
    required: true,
  },
  topImageSrc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.large-image {
  flex: 1;
  max-width: 70%;
  margin: 10px;
  border: 2px solid #333;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.small-image {
  flex: 1;
  max-width: 30%;
  margin: 10px;
  border: 2px solid #333;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.large-image:hover {
  transform: scale(1.1);
}

.small-image:hover {
  transform: scale(1.1);
}
</style>
