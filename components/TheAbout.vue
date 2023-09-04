<template>
    <div class="pt-10 pl-6 pr-3 pb-4">

        <!-- small text with line to its right -->
        <div class=" flex items-center justify-between">
            <p class="font-jost uppercase text-[13px] font-[600] tracking-widest text-[#DD5903] w-fit"
               id="p">

                {{ smallText }}
            </p>
            <div class="w-20 outline outline-1 outline-[#BF926B] justify-self-end mr-5">
            </div>
        </div>

        <!-- section header -->
        <div class="py-4">
            <h1 class="text-[40px] font-semibold leading-tight uppercase ">

                {{ header }}

            </h1>
        </div>

        <!-- section body -->
        <div class="">

            <!-- paragraph -->
            <p class="font-jost text-[18px] leading-relaxed tracking-wide text-[#4a4a4b] ">

                {{ paragraph }}
            </p>

            <!-- button and image slots -->
            <div class="py-5">

                <!-- Button slot -->
                <slot name="button"> </slot>

                <!-- Image slot -->
                <slot name="image"> </slot>




            </div>
        </div>

    </div>
</template>

<script setup>
// define props with default values and types
defineProps({
    smallText: {
        type: String,
        default: 'Refresh your taste buds'
    },
    header: {
        type: String,
        default: 'Enjoy An Unforgettable Dining Experience'
    },
    paragraph: {
        type: String,
        default: '  We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make every important aspect of the customer experience a little bit better.'
    }
})

</script>

<style scoped>
#p {
    display: inline-block;
    transform: scale(1, .9);
}
</style>