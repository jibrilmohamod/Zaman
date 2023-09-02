<template>
    <button class="py-3 px-6 bg-[#BF926B] font-jost uppercase font-semibold">
        {{ name }}
    </button>
</template>

<script setup>
defineProps(
    [
        'name'
    ]
)

</script>

<style scoped></style>