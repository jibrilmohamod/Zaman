<template>
    <div class="pt-10 pl-6 pr-3 pb-4">


        <!-- small text with line to its right -->
        <div class=" flex items-center justify-between">
            <p class="font-jost uppercase text-[13px] font-[600] tracking-widest text-[#DD5903] w-fit"
               id="p">
                Refresh your taste buds
            </p>
            <div class="w-20 outline outline-1 outline-[#BF926B] justify-self-end mr-5">
            </div>
        </div>

        <!-- section header -->
        <div class="py-4">
            <h1 class="text-[40px] font-semibold leading-tight ">
                Enjoy An Unforgettable Dining Experience
            </h1>
        </div>

        <!-- section body -->
        <div class="">

            <!-- paragraph -->
            <p class="font-jost text-[18px] leading-relaxed tracking-wide text-[#4a4a4b] ">
                We see our customers as invited guests to a party, and we are the hosts. It’s our job every day to make
                every important aspect of the customer experience a little bit better.
            </p>

            <!-- button -->
            <div class="py-5">
                <NuxtButton class="font-[500] text-[14px] font-jost text-white"
                            name="Discover More">

                </NuxtButton>

                <!-- Image  -->
                <div class="pt-8 h-64"
                     data-aos="fade-up"
                     data-aos-duration="1000">
                    <NuxtImg src="https://patiotime.loftocean.com/wp-content/uploads/2022/03/davide-cantelli-jpkfc5_d-DI-unsplash-780x520.jpg"
                             class="w-full h-full object-cover object-top" />

                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
#p {
    display: inline-block;
    transform: scale(1, .9);
}
</style>