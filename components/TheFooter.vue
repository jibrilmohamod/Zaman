<template>
    <div class="bg-[#131212] text-white px-5 py-5">
        <!-- logo here -->
        <div class="flex">
            <NuxtLink to="/">
                <img src="/logo.svg"
                     alt="logo"
                     class="object-contain h-16 w-full" />
            </NuxtLink>
        </div>

        <!-- brief description of the restaurant here  -->
        <div class="py-5">
            <p class="text-sm font-jost">
                Zaman Restaurant is a family owned restaurant that has been in business for over 20 years. We pride
                ourselves in serving the best food in town, with a wide variety of dishes to choose from.
            </p>
        </div>

        <!-- social media icons here -->
        <div class="flex justify-between pb-5">
            <div class="flex">
                <!-- instagram -->
                <IconCSS name="akar-icons:instagram-fill"
                         class="text-xl mr-5" />
                <!-- facebook -->
                <IconCSS name="akar-icons:facebook-fill"
                         class="text-xl mr-5" />
                <!-- twitter -->
                <IconCSS name="akar-icons:twitter-fill"
                         class="text-xl mr-5" />
                <!-- tiktok -->
                <IconCSS name="akar-icons:tiktok-fill"
                         class="text-xl mr-5" />
                <!-- youtube -->
                <IconCSS name="akar-icons:youtube-fill"
                         class="text-xl mr-5" />

            </div>
        </div>

        <!-- Working Hours  -->
        <div class="py-5">
            <h4 class="font-Lexend font-semibold uppercase">
                Working Hours
            </h4>

            <div class="py-2">
                <p class="font-jost">
                    Monday - Friday: 9am - 10pm
                </p>
                <p class="font-jost">
                    Saturday - Sunday: 9am - 11pm
                </p>
            </div>
        </div>

        <!-- Location and Contact info with icons  -->
        <div class="">
            <h4 class="font-Lexend font-semibold uppercase">
                Location & Contact
            </h4>
            <div class="py-2">
                <!-- address with icon -->

                <div class="flex py-2">
                    <div class="pr-3">
                        <IconCSS name="mdi:location"
                                 class="text-xl" />
                    </div>
                    <p class="font-jost">
                        1234, Nairobi, Kenya
                    </p>
                </div>
                <!-- phone with icon -->

                <div class="flex py-2">
                    <div class="pr-3">
                        <IconCSS name="mdi:phone"
                                 class="text-xl" />
                    </div>
                    <p class="font-jost">
                        +254 123 456 789
                    </p>
                </div>
                <!-- email with icon -->

                <div class="flex py-2">
                    <div class="pr-3">
                        <IconCSS name="mdi:email"
                                 class="text-xl" />
                    </div>
                    <p class="font-jost">
                        <a href="mailto:info@zaman.co.ke">
                            info@zaman.co.ke
                        </a>
                    </p>
                </div>
            </div>

        </div>

        <hr>

        <!-- footer bottom -->
        <div class="text-gray-400 py-6">
            <div class="py-5 ">
                <p class="font-jost text-center">
                    &copy; 2023 Zaman Restaurant & Cafe. All Rights Reserved.
                </p>
            </div>

            <!-- additonal links to privacy policy, terms and conditions, etc -->

            <div class="flex ">
                <div class="flex-1">
                    <p class="font-jost text-center">
                        <NuxtLink to="/">
                            Privacy Policy
                        </NuxtLink>
                    </p>
                </div>
                <div class="flex-1">
                    <p class="font-jost text-center">
                        <NuxtLink to="/">
                            Terms & Conditions
                        </NuxtLink>
                    </p>
                </div>
                <div class="flex-1">
                    <p class="font-jost text-center">
                        <NuxtLink to="/">
                            Contact Us
                        </NuxtLink>
                    </p>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>