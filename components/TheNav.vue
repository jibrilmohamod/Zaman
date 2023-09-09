<template>
    <div class="z-30">
        <!-- Desktop nav -->
        <div class="hidden md:block absolute h-fit inset-0 z-50 container mx-auto text-white">
            <!-- location , email and phone -->
            <div class="font-jost border-b flex justify-between rounded-sm">
                <!-- location  -->
                <div class="py-2 border-x rounded-sm px-5 grow flex justify-center items-center w-fit gap-3">
                    <!-- icon  -->
                    <Icon name="mdi:location"
                          class="text-lg text-white" />
                    <!-- text  -->
                    Banda Street, Nairobi, Kenya
                </div>
                <!-- phone  -->
                <div class="py-2 border-r rounded-sm px-5 grow flex justify-center items-center w-fit gap-3">
                    <!-- icon  -->
                    <Icon name="mdi:phone"
                          class="text-lg text-white" />
                    <!-- text  -->
                    <a href="tel:0745015869">
                        +254 745 015 869
                    </a>
                </div>
                <!-- email  -->
                <div class="py-2 border-r rounded-sm px-5 grow flex justify-center items-center w-fit gap-3">
                    <!-- icon  -->
                    <Icon name="mdi:email"
                          class="text-lg text-white" />
                    <!-- text  -->
                    <a href="mailto:info@zaman.co.ke"
                       class="text-white">
                        info@zaman.co.ke
                    </a>
                </div>
                <!-- socials -->
                <div class="py-2 border-r rounded-sm px-5 grow flex justify-center items-center w-fit">
                    <!-- icon  -->
                    <Icon name="mdi:facebook"
                          class="text-lg text-white grow hover:text-blue-700" />
                    <!-- icon  -->
                    <Icon name="mdi:instagram"
                          class="text-lg text-white grow hover:text-pink-700" />
                    <!-- icon  -->
                    <Icon name="mdi:twitter"
                          class="text-lg text-white grow hover:text-sky-600" />
                    <!-- tiktok -->
                    <Icon name="akar-icons:tiktok-fill"
                          class="text-lg text-white grow hover:text-fuchsia-600" />
                </div>
            </div>
            <!-- navigation and logo -->
            <div class="flex items-center py-5">
                <!-- logo -->
                <h1 class="w-fit">
                    <NuxtLink to="/">
                        <img src="/accent.svg"
                             alt="logo"
                             class="object-contain h-14" />
                    </NuxtLink>
                </h1>
                <!-- navigation -->
                <div class="flex-grow flex justify-end items-center gap-5">
                    <!-- nav items -->
                    <div class="flex-grow flex justify-end items-center gap-5">
                        <NuxtLink to="/"
                                  class="text-lg font-Lexend hover:text-blue-700">
                            Home
                        </NuxtLink>
                        <NuxtLink to="/about"
                                  class="text-lg font-Lexend hover:text-blue-700">
                            About
                        </NuxtLink>
                        <NuxtLink to="/services"
                                  class="text-lg font-Lexend hover:text-blue-700">
                            Services
                        </NuxtLink>
                        <NuxtLink to="/contact"
                                  class="text-lg font-Lexend hover:text-blue-700">
                            Contact
                        </NuxtLink>
                    </div>
                    <!-- button -->
                    <div class="flex justify-end items-center gap-5">
                        <NuxtLink to="/contact"
                                  class="text-lg font-Lexend hover:">
                            <button class="bg-blue-700 text-white rounded-sm px-5 py-2">
                                Get a Quote
                            </button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <!-- mobile nav -->
        <div class="md:hidden">
            <NuxtLink to="/">
                <!-- site name and logo -->
                <div class="text-white absolute z-20 top-5 left-4">
                    <h1 class="h-12 p-2 text-4xl font-Lexend">
                        <img src="/accent.svg"
                             alt="logo"
                             class="object-contain h-12 w-full" />
                    </h1>
                </div>
            </NuxtLink>

            <!-- Hambuger menu -->
            <button class="absolute top-8 right-4 z-20 p-2 bg-white rounded-full text-black"
                    @click="toggleMobileNav()">
                <IconCSS name="ci:menu-alt-01"
                         class="text-3xl text-black" />

                <div class="hidden">
                    {{ showMobile }}
                </div>
            </button>

            <transition mode="out-in"
                        enter-to-class="animate__animated animate__fadeInRight"
                        leave-to-class="animate__animated animate__fadeOutRight">
                <MobileNav v-if="showMobile"
                           @toggleMobileNav="toggleMobileNav()" />

            </transition>
        </div>



    </div>
</template>

<script setup>

const showMobile = ref(false);

const toggleMobileNav = () => {
    showMobile.value = !showMobile.value;
}

</script>

<style lang="scss" scoped></style>