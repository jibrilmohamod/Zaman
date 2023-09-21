<template>
  <div class="h-fit">
    <TheHeader>
      <template #image>
        <NuxtImg
          provider="cloudinary"
          loading="lazy"
          format="webp"
          alt="image"
          sizes="sm:100vw md:50vw lg:800px"
          :modifiers="{ effect: 'colorize:30', color: 'black' }"
          src="v1694095370/2O0A8677_x3a9xc.webp"
          class="w-full h-full object-cover object-center"
        />
      </template>
    </TheHeader>

    <!-- introduction  -->

    <TheAbout
      header="Zaman Restaurant Ambiance: A Dining Gem"
      small-text="Refreshing and delicious"
      paragraph="Introducing Zaman, a hidden gem on Banda Street, Nairobi. Inspired by the city's vibrant culture, we offer a unique dining experience. Our menu blends Kenyan flavors with international twists, catering to all tastes. Join us at Zaman to savor Nairobi's essence through our dishes."
    >
      <!-- button slot  -->
      <template #button>
        <NuxtLink to="/menu/">
          <NuxtButton
            class="font-[500] text-[14px] font-jost text-white"
            name="Explore our menu"
          >
          </NuxtButton>
        </NuxtLink>
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
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            :modifiers="{ effect: 'colorize:30', color: 'black' }"
            src="v1694088526/2O0A8672_v4rney.webp"
            class="w-full h-full object-cover object-top rounded-md"
          />
        </div>
        <div
          class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12 md:hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            :modifiers="{ effect: 'colorize:30', color: 'black' }"
            src="v1694088475/2O0A8688_zfjop8.webp"
            class="w-full h-full object-cover object-top rounded-md"
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
            src="v1694023560/svitlana-8d1Pcd8vpv0-unsplash_tbaggc.jpg"
            class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
          />
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:20', color: 'black' }"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1694088475/2O0A8688_zfjop8.webp"
            class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
          />
        </div>
      </template>
    </TheAbout>

    <!-- food philosophy -->

    <TheAbout
      small-text="quality & balance"
      header="Explore the Delicious Menu at Zaman Restaurant"
      paragraph="At Zaman, we believe in keeping it simple and balanced. Our dishes harmoniously blend local and global flavors, celebrating Nairobi's culinary diversity. Join us for a dining experience that captures the essence of our vibrant city"
    >
      <template #button>
        <NuxtButton
          class="font-[500] text-[14px] font-jost text-white"
          name="Book a Table"
        >
        </NuxtButton>
      </template>

      <template #image>
        <div class="pt-8 h-[80vh] md:hidden" data-aos="fade-up" data-aos-duration="1000">
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            :modifiers="{ effect: 'colorize:30', color: 'black' }"
            src="v1694095332/2O0A2488_1_a8ds1k.webp"
            class="w-full h-full object-cover rounded-md"
          />
        </div>

        <div
          class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            :modifiers="{ effect: 'colorize:30', color: 'black' }"
            src="v1694095365/2O0A2618_nzalgk.webp"
            class="w-full h-full object-cover object-top rounded-md"
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
            src="v1694095332/2O0A2488_1_a8ds1k.webp"
            class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
          />
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:10', color: 'black' }"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1695331625/2O0A2426_qp51qm.webp"
            class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
          />
        </div>
      </template>
    </TheAbout>

    <TheAbout
      small-text="Right here waiting"
      header="Come and Visit Us Today"
      paragraph="Zaman Restaurant is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm."
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
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1694098771/2O0A8697_etgcqe.webp"
            class="w-full h-full object-cover object-top rounded-md"
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
            src="v1695331640/2O0A2713_f6iora.webp"
            class="w-1/2 h-[60vh] object-cover md:object-cover shadow-2xl shadow-black"
          />
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:10', color: 'black' }"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1695331644/2O0A2772_xsudw1.webp"
            class="w-1/2 h-[40vh] m-auto object-cover shadow-xl shadow-black"
          />
        </div>
      </template>
    </TheAbout>
  </div>
</template>

<script setup>
useHead({
  title: "About Us | Zaman Restaurant",
  meta: [
    {
      name: "keywords",
      content:
        "Zaman Restaurant, Zaman Restaurant Nairobi, Zaman Restaurant Kenya, Zaman Restaurant Banda Street, Zaman Restaurant Menu, Zaman Restaurant Contact, Zaman Restaurant Location, Zaman Restaurant About Us, Zaman Restaurant Food, Zaman Restaurant Cuisine, Zaman Restaurant Dining, Zaman Restaurant Ambiance, Zaman Restaurant Menu, Zaman Restaurant Food Philosophy, Zaman Restaurant Come and Visit Us Today",
    },
    //   description
    {
      name: "description",
      content:
        "Zaman Restaurant is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "googlebot",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Zaman Restaurant",
    },
    {
      name: "page-topic",
      content: "Zaman Restaurant",
    },
    {
      name: "page-type",
      content: "Restaurant",
    },
    {
      name: "audience",
      content: "all",
    },
    {
      name: "distribution",
      content: "global",
    },
    {
      name: "rating",
      content: "general",
    },
    {
      name: "revisit-after",
      content: "7 days",
    },
    {
      name: "language",
      content: "en-us",
    },
    // og meta
    {
      name: "og:title",
      content: "About Us | Zaman Restaurant",
    },
    {
      name: "og:url",
      content: "https://zaman-restaurant.vercel.app/aboutus",
    },
    {
      name: "og:description",
      content:
        "Zaman Restaurant is located in the heart of Nairobi city, surrounded by the most popular tourist attractions. We are open every day from 9am to 11pm.",
    },
    {
      name: "og:image",
      content:
        "https://res.cloudinary.com/dq6hflqwx/image/upload/v1629277449/2O0A8677_x3a9xc.webp",
    },
    {
      name: "og:site_name",
      content: "Zaman Restaurant",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:locale",
      content: "en_US",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
