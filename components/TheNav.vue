<template>
    <div class="z-50">
        <NuxtLink to="/">
            <!-- site name and logo -->
            <div class="text-white absolute z-20 top-5 left-4">
                <h1 class="h-12 p-2 text-4xl font-Lexend">
                    <img src="/LogoWhite.svg"
                         class="object-contain h-12" />
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
</template>

<script setup>

const showMobile = ref(false);

const toggleMobileNav = () => {
    showMobile.value = !showMobile.value;
}

</script>

<style lang="scss" scoped></style>