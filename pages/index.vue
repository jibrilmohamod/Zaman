<template>
  <div class="">
    <TheHero />

    <TheAbout class="">
      <!-- button slot  -->
      <template #button>
        <SiteLink to="/about/">
          <NuxtButton
            class="font-[500] text-[14px] font-jost text-white"
            name="Discover More"
          >
          </NuxtButton>
        </SiteLink>
      </template>

      <!-- Image slot -->
      <template #image>
        <div
          class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:20', color: 'black' }"
            sizes="sm:100vw md:50vw lg:600px"
            provider="cloudinary"
            src="v1694008223/davide-cantelli-jpkfc5_d-DI-unsplash-780x520_stwaqq.jpg"
            class="w-full h-full object-cover md:object-cover rounded-sm shadow-xl shadow-black"
          />
        </div>
      </template>

      <template #image2>
        <div class="w-full px-2 flex gap-2" data-aos="fade-up" data-aos-duration="1000">
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:10', color: 'black' }"
            sizes="sm:100px md:50vw lg:600px"
            provider="cloudinary"
            src="v1694095366/2O0A2745_kh9t2d.webp"
            class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
          />
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:10', color: 'black' }"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1694095332/2O0A2492_xhfbyj.webp"
            class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
          />
        </div>
      </template>
    </TheAbout>

    <TheMenu />

    <TheAbout
      small-text="Right here waiting"
      header="Come Visit Our Restaurant Today"
      paragraph="Zaman Restaurant is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm."
      class=""
    >
      <!-- button slot  -->
      <template #button>
        <NuxtButton
          class="font-[500] text-[14px] font-jost text-white"
          name="Get Directions"
        >
        </NuxtButton>
      </template>

      <!-- Image slot -->
      <template #image>
        <div
          class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:20', color: 'black' }"
            provider="cloudinary"
            sizes="sm:100vw md:50vw lg:600px"
            src="v1694007509/dining-table-donated-with-variety-foods-two-blue-bottles-mineral-water_114579-2722_lb5l53.jpg"
            class="w-full h-full object-cover md:object-cover rounded-sm shadow-xl shadow-black"
          />
        </div>
      </template>

      <template #image2>
        <div class="w-full px-2 flex gap-2" data-aos="fade-up" data-aos-duration="1000">
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:10', color: 'black' }"
            sizes="sm:100px md:50vw lg:600px"
            provider="cloudinary"
            src="v1694295165/2O0A2815_i14jgh.webp"
            class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
          />
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:10', color: 'black' }"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1694295166/2O0A2819_bmuugk.webp"
            class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
          />
        </div>
      </template>
    </TheAbout>

    <TheMirror>
      <template #image2>
        <div class="w-full px-2 flex gap-2" data-aos="fade-up" data-aos-duration="1000">
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:10', color: 'black' }"
            sizes="sm:100px md:50vw lg:600px"
            provider="cloudinary"
            src="v1694295165/2O0A2815_i14jgh.webp"
            class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
          />
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:10', color: 'black' }"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1694295166/2O0A2819_bmuugk.webp"
            class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
          />
        </div>
      </template>

      <template #image>
        <div
          class="pt-8 h-64 md:h-96 2xl:h-[40vh]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:20', color: 'black' }"
            provider="cloudinary"
            sizes="sm:100vw md:50vw lg:600px"
            src="v1694007509/dining-table-donated-with-variety-foods-two-blue-bottles-mineral-water_114579-2722_lb5l53.jpg"
            class="w-full h-full object-cover md:object-cover rounded-sm shadow-xl shadow-black"
          />
        </div>
      </template>

      <template #button>
        <NuxtButton
          class="font-[500] text-[14px] font-jost text-white place-self-end"
          name="Get Directions"
        >
        </NuxtButton>
      </template>
    </TheMirror>
  </div>
</template>
<script setup>
import AOS from "aos";
onMounted(() => AOS.init());

// seo
useHead({
  title: "Zaman Restaurant , Nairobi",
  // meta tags
  meta: [
    {
      name: "description",
      content:
        "Zaman Restaurant is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.",
    },
    {
      name: "keywords",
      content:
        "Zaman Restaurant, Zaman Restaurant Nairobi, Zaman Restaurant Kenya, Banda Street, Nairobi, Kenya, food, drinks, menu, breakfast, lunch, dinner, beverages ,Authentic Kenyan Cuisine, Authentic Kenyan Food, Authentic Kenyan Restaurant, Authentic Kenyan Restaurant Nairobi, Authentic Kenyan Restaurant Kenya, Authentic Kenyan Restaurant Banda Street, Authentic Kenyan Restaurant Nairobi Kenya, Authentic Kenyan Restaurant Nairobi Banda Street",
    },
  ],
});
</script>

<style scoped></style>
