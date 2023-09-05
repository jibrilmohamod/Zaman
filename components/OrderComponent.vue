<template>
    <div
         class="bg-[url(https://images.unsplash.com/photo-1617721042477-7c5c498e7dbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80)] bg-[#393b3b] bg-blend-multiply bg-contain py-16 px-5 rounded-t-md">
        <!-- header  -->

        <div class="flex items-center justify-between">
            <div class="w-10 outline outline-1 outline-[#BF926B] justify-self-end"></div>
            <p class="font-jost uppercase font-[600] tracking-widest text-[#DD5903] text-[17px] w-fit"
               id="p">
                online reservation
            </p>
            <div class="w-10 outline outline-1 outline-[#BF926B] justify-self-end"></div>
        </div>

        <div class="py-4">
            <h1 class="text-[40px] font-semibold leading-tight uppercase text-white text-center">
                Book A Table
            </h1>
        </div>

        <!-- reservation form using FormKit & TailwindCSS -->
        <div class="">
            <!-- select number of people  -->
            <FormKit type="form"
                     :actions="false">
                <FormKit type="select"
                         name="people"
                         :options="[
                             '1 Person',
                             '2 People',
                             '3 People',
                             '4 People',
                             '5 People',
                             '6 People',
                             '7 People',
                             '8 People',
                             '9 People',
                             '10 People',
                         ]"
                         outer-class="mb-5 bg-transparent"
                         label-class="block mb-1 font-bold text-sm"
                         inner-class="max-w-md border-b border-white mb-1 overflow-hidden focus-within:border-none bg-transparent"
                         input-class="w-full h-10 px-3 text-base text-white bg-transparent focus:bg-black font-jost focus:outline-none focus:border-b border-white"
                         help-class="text-xs text-gray-500" />


                <!-- select date  -->
                <FormKit type="date"
                         name="date"
                         outer-class="mb-5 bg-transparent"
                         label-class="block mb-1 font-bold text-sm"
                         inner-class="max-w-md border-b border-white mb-1 overflow-hidden focus-within:border-none bg-transparent text-white"
                         input-class="w-full h-10 px-3 text-base text-white bg-transparent font-jost focus:outline-none focus:border-b border-white"
                         icon-class="text-white"
                         help-class="text-xs text-gray-500"
                         suffix-class="border border-white" />

                <!-- select time  -->
                <FormKit type="time"
                         name="date"
                         value="23:10"
                         outer-class="mb-5 bg-transparent"
                         label-class="block mb-1 font-bold text-sm"
                         inner-class="max-w-md border-b border-white mb-1 overflow-hidden focus-within:border-none bg-transparent text-white"
                         input-class="w-full h-10 px-3 text-base text-white bg-transparent font-jost focus:outline-none focus:border-b border-white"
                         icon-class="text-white"
                         help-class="text-xs text-gray-500"
                         suffix-icon-class="border border-white" />


                <!-- submit button  -->
                <FormKit type="submit"
                         name="submit"
                         label="BOOK NOW"
                         outer-class="mt-5 bg-transparent"
                         label-class="block mb-1 font-bold text-sm"
                         inner-class="max-w-md border-b border-white mb-1 overflow-hidden focus-within:border-none text-white "
                         input-class="w-full h-10 px-3 text-base text-white font-jost focus:outline-none font-jost bg-[#DD5903]"
                         icon-class="text-white"
                         help-class="text-xs text-gray-500"
                         suffix-icon-class="borderr-white" />
            </FormKit>

        </div>
    </div>
</template>

<script setup>
// define form values 
const people = ref('');
</script>

<style scoped></style>
