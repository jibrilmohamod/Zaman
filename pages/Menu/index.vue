<template>
    <div>
        <TheHeader title="Our Menu">
            <template #image>
                <NuxtImg provider="cloudinary"
                         format="webp"
                         loading="lazy"
                         alt="image"
                         sizes="sm:100vw md:50vw lg:400px"
                         :modifiers="{ effect: 'colorize:30', color: 'black' }"
                         src="v1694086227/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504_axffmx.jpg"
                         class="w-full h-full object-cover object-center" />
            </template>
        </TheHeader>

        <TheMenu class="py-8" />


    </div>
</template>

<script setup>

</script>

<style scoped></style>