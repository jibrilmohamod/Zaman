<template>
    <button
            class="py-3 px-6 outline outline-2 outline-[#DD5903] font-jost uppercase font-semibold hover:bg-[#DD5903] hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
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