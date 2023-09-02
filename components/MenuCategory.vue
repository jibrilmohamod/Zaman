<template>
    <div class="pt-4 pl-6 pr-3 pb-4"
         data-aos="fade-up"
         data-aos-duration="1000"
         data-aos-easing="ease-in-out"
         data-aos-mirror="true"
         data-aos-once="false"
         data-aos-anchor-placement="top-center">

        <!-- Menu Title  -->
        <div class="h-full text-center">
            <!-- small title  -->
            <p class="font-jost text-[#DD5903] uppercase font-semibold"
               id="p">Our Menu</p>
            <!-- big title  -->
            <h1 class="text-3xl uppercase font-semibold">


                {{ name }}
            </h1>
        </div>

        <!-- Menu Items -->
        <div>


            <slot></slot>



        </div>


    </div>
</template>

<script setup>
defineProps(
    [
        'name'
    ]
)

// get menu items from api




</script>

<style scoped>
#p {
    display: inline-block;
    transform: scale(1, .9);
}
</style>