<template>
    <button class="py-3 px-6 outline outline-2 outline-[#DD5903] font-jost uppercase font-semibold">
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

<style lang="scss" scoped></style>