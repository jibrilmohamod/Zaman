<template>
    <div>
        <div class="flex justify-between py-4 gap-2 ">
            <!-- Item Image  -->
            <div class="basis-1/5">
                <NuxtImg :src="image"
                         :alt="name"
                         provider="cloudinary"
                         loading="lazy"
                         sizes="sm:100vw md:50vw lg:400px"
                         format="webp"
                         class="object-cover w-[100px] h-[70px] rounded-sm shadow-md shadow-black" />
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
defineProps({
    name: {
        type: String,
        default: 'Item Name'
    },
    ingredients: {
        type: String,
        default: 'Item Ingredients'
    },
    price: {
        type: String,
        default: '$0.00'
    },
    image: {
        type: String,
        default: 'v1694095332/2O0A2492_xhfbyj.webp'
    }
})


</script>

<style lang="scss" scoped></style>