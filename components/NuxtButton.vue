<template>
    <button
            class="py-3 px-6 bg-[#DD5903] font-jost uppercase font-semibold md:text-xl rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        {{ name }}
    </button>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        default: 'Button'
    }
})

</script>

<style scoped></style>