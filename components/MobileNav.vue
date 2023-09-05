<template>
    <div class="bg-black inset-0 z-50 fixed">

        <!-- logo here and close button -->
        <div class="flex justify-between px-5 pb-10 pt-5 border-b border-gray-800">
            <NuxtLink to="/">
                <NuxtImg src="/logo.png"
                         class="object-contain h-12" />
            </NuxtLink>

            <button class="p-2 bg-white rounded-full text-black"
                    @click="$emit('toggleMobileNav')">
                <IconCSS name="ic:baseline-close"
                         class="text-3xl text-black" />
            </button>
        </div>





    </div>
</template>

<script setup>

defineEmits(["toggleMobileNav"]);

</script>

<style lang="scss" scoped></style>