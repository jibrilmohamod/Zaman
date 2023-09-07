<template>
    <div>
        <div class="flex justify-between py-4 gap-2 ">
            <!-- Item Image  -->
            <div class="w-[100px] h-[100px] basis-1/5">
                <img src="https://via.placeholder.com/100"
                     alt="item image">
            </div>
            <!-- Item Name and Details  -->
            <div class="flex flex-col gap-2 basis-3/5">
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
            <div class="text-[#272727] place-self-start font-jost basis-1/5">

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