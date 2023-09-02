<template>
    <button class="py-3 px-6 bg-[#DD5903] font-jost uppercase font-semibold">
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