<template>
    <div>
        <div class="flex justify-between items-center py-4">
            <div class="flex flex-col gap-2">
                <!-- Item Name  -->
                <p class="font-semibold text-[22px] tracking-wide">
                    {{ name }}
                </p>
                <!-- Item Details  -->
                <p class="font-jost text-[#4a4a4b] text-[14px]">


                    {{ ingredients }}
                </p>
            </div>
            <!-- Item Price  -->
            <div class="text-[#272727] justify-self-start place-self-start font-Lexend">

                {{ price }}

            </div>
        </div>

    </div>
</template>

<script setup>
defineProps(
    [
        'name',
        'ingredients',
        'price'
    ]
)

// get menu items from api


</script>

<style lang="scss" scoped></style>