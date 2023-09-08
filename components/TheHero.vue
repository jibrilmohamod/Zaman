<template>
    <div class="relative text-white">
        <!-- Add a dark overlay -->
        <div class="absolute inset-0 bg-black opacity-50 z-10">
        </div>
        <div class="md:hidden">
            <!-- logo -->
            <TheNav />
            <!-- call to action -->
            <div class="absolute inset-0 flex items-center justify-center flex-col z-20 gap-4 mt-16">
                <div class=" uppercase font-jost flex justify-center items-center gap-2">
                    <div class="w-16 h-0 outline outline-2">
                    </div>
                    <h2 clas>
                        Welcome to Zaman
                    </h2>
                    <div class="w-16 h-0 outline outline-2">
                    </div>
                </div>

                <div class="text-[40px] text-center font-semibold leading-tight text-gray-50">
                    Delicious Food & Wonderful Eating Experience
                </div>

                <p class="px-10 text-center font-jost">
                    serving food , harmony and happiness since 1999
                </p>
                <NuxtButton name="View Menus">

                </NuxtButton>
            </div>
        </div>
        <!-- hero image -->
        <div class="relative h-[100vh]">
            <NuxtImg loading="lazy"
                     provider="cloudinary"
                     format="webp"
                     alt="hero image"
                     :modifiers="{ effect: 'colorize:40', color: 'black' }"
                     sizes="sm:100vw md:50vw lg:400px"
                     src="v1694095334/2O0A2486_sqm9hq.webp"
                     class="h-full object-cover object-top w-full" />
        </div>
    </div>
</template>

<script setup>
// create an image array

const { data } = await useFetch("/api/images");
const images = ref(data);
//get last image in array
computed(() => {
    const lastImage = images.value[images.value.length - 1];
    console.log(lastImage);
});
</script>

<style scoped>
/* Style for the dark overlay */
.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

.bg-black {
    background-color: rgba(0, 0, 0, );
    /* Adjust the opacity as needed */
}

.opacity-50 {
    opacity: 0.55;
    /* Adjust the opacity as needed */
}

/* Z-index to control stacking order */
.z-10 {
    z-index: 10;
}
</style>
