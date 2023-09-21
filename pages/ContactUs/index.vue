<template>
  <div class="main">
    <TheHeader title="Contact Us">
      <template #image>
        <NuxtImg
          provider="cloudinary"
          format="webp"
          loading="lazy"
          alt="bg image"
          sizes="sm:100vw md:50vw lg:800px"
          :modifiers="{ effect: 'colorize:30', color: 'black' }"
          src="v1694088729/2O0A8663_aaa9eg.webp"
          class="w-full h-full object-cover object-center"
        />
      </template>
    </TheHeader>
    <!-- our location -->
    <TheAbout
      smallText="Come join us"
      header="Where to find us"
      paragraph="You can find Zaman nestled in the heart of Banda Street, Nairobi. Our restaurant is conveniently located in this bustling area, making it easily accessible for both locals and visitors looking for a memorable dining experience. Join us at Zaman and discover the culinary treasures of Nairobi right in the midst of its vibrant urban scene."
    >
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
            alt="Image"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1694098771/2O0A8697_etgcqe.webp"
            class="w-full h-full object-cover object-top rounded-md"
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
            alt="Image"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1694088729/2O0A8663_aaa9eg.webp"
            :modifiers="{ effect: 'colorize:30', color: 'black' }"
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
            class="w-1/2 h-[70vh] object-cover md:object-cover shadow-2xl shadow-black"
          />
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:10', color: 'black' }"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1694095366/2O0A2619_zwoukc.webp"
            class="w-1/2 h-[50vh] m-auto object-cover shadow-xl shadow-black"
          />
        </div>
      </template>
    </TheAbout>
    <!-- contact form -->
    <TheAbout
      smallText="Get in touch with us"
      header="Contact Us"
      paragraph="For general inquiries please email: info@zaman.co.ke"
    >
      <template #button>
        <button
          class="py-3 px-6 bg-[#DD5903] font-jost uppercase font-semibold text-white"
        >
          <a href="mailto:info@zaman.co.ke">Email us</a>
        </button>
        <!-- social media icons here -->
        <div class="flex justify-between pt-6 pb-5">
          <div class="flex">
            <!-- instagram -->
            <IconCSS name="akar-icons:instagram-fill" class="text-xl mr-5" />
            <!-- facebook -->
            <IconCSS name="akar-icons:facebook-fill" class="text-xl mr-5" />
            <!-- twitter -->
            <IconCSS name="akar-icons:twitter-fill" class="text-xl mr-5" />
            <!-- tiktok -->
            <IconCSS name="akar-icons:tiktok-fill" class="text-xl mr-5" />
            <!-- youtube -->
            <IconCSS name="akar-icons:youtube-fill" class="text-xl mr-5" />
          </div>
        </div>
        <!-- Working Hours  -->
        <div class="py-2">
          <h4 class="font-Lexend font-semibold uppercase">Working Hours</h4>
          <div class="py-2">
            <p class="font-jost">Monday - Friday: 9am - 10pm</p>
            <p class="font-jost">Saturday - Sunday: 9am - 11pm</p>
          </div>
        </div>
        <!-- Location and Contact info with icons  -->
        <div class="">
          <h4 class="font-Lexend font-semibold uppercase">Location & Contact</h4>
          <div class="py-2">
            <!-- address with icon -->
            <div class="flex py-2">
              <div class="pr-3">
                <IconCSS name="mdi:location" class="text-xl" />
              </div>
              <p class="font-jost">1234, Nairobi, Kenya</p>
            </div>
            <!-- phone with icon -->
            <div class="flex py-2">
              <div class="pr-3">
                <IconCSS name="mdi:phone" class="text-xl" />
              </div>
              <p class="font-jost">+254 123 456 789</p>
            </div>
            <!-- email with icon -->
            <div class="flex py-2">
              <div class="pr-3">
                <IconCSS name="mdi:email" class="text-xl" />
              </div>
              <p class="font-jost">
                <a href="mailto:info@zaman.co.ke"> info@zaman.co.ke </a>
              </p>
            </div>
          </div>
        </div>
      </template>

      <!-- image slot -->
      <template #image>
        <div
          class="pt-8 h-64 md:h-96 2xl:h-[40vh] md:w-10/12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="Image"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1694098771/2O0A8692_ddsflg.webp"
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
            alt="Image"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1694088474/2O0A8683_oc1ow6.webp"
            :modifiers="{ effect: 'colorize:30', color: 'black' }"
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
            class="w-1/2 h-[70vh] object-cover md:object-cover shadow-2xl shadow-black"
          />
          <NuxtImg
            loading="lazy"
            format="webp"
            alt="image"
            :modifiers="{ effect: 'colorize:10', color: 'black' }"
            sizes="sm:100vw md:50vw lg:800px"
            provider="cloudinary"
            src="v1694095366/2O0A2619_zwoukc.webp"
            class="w-1/2 h-[50vh] m-auto object-cover shadow-xl shadow-black"
          />
        </div>
      </template>
    </TheAbout>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
