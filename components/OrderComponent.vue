<template>
    <div
         class="bg-[url(https://images.unsplash.com/photo-1617721042477-7c5c498e7dbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80)] bg-[#393b3b] bg-blend-multiply bg-contain md:bg-cover md:bg-center py-16 px-5 rounded-t-md">
        <div class="flex items-center justify-between">
            <div class="w-10 outline outline-1 outline-[#BF926B] justify-self-end"></div>
            <p class="font-jost uppercase font-[600] tracking-widest text-[#DD5903] text-[17px] w-fit md:text-[23px]">
                online reservation
            </p>
            <div class="w-10 outline outline-1 outline-[#BF926B] justify-self-end"></div>
        </div>
        <form class="text-white "
              @submit.prevent="bookTable">
            <div class="md:flex justify-center gap-4 md:container m-auto md:text-lg md:font-bold">
                <input type="date"
                       v-model="booking.date"
                       class="bg-transparent text-white border-b border-white mb-4 focus:outline-none placeholder:text-white"
                       placeholder="Date"
                       required />

                <input type="time"
                       v-model="booking.time"
                       class="bg-transparent text-white border-b border-white mb-4 focus:outline-none"
                       placeholder="Time"
                       required />

                <select v-model="booking.table"
                        class="bg-transparent text-white border-b border-white mb-4 focus:outline-none"
                        required>
                    <option value=""
                            disabled
                            selected
                            hidden>Table</option>
                    <option v-for="table in availableTables"
                            :key="table.id"
                            :value="table.id">
                        {{ table.name }} ({{ table.capacity }} seats)
                    </option>
                </select>
            </div>

            <button type="submit"
                    class="md:w-full">
                <NuxtButton name="Book A Table"></NuxtButton>
            </button>
        </form>

        <div v-if="bookingConfirmation">
            <h2>Booking Confirmation</h2>
            <p>Date: {{ bookingConfirmation.date }}</p>
            <p>Time: {{ bookingConfirmation.time }}</p>
            <p>Table: {{ bookingConfirmation.table }}</p>
        </div>
    </div>
</template>

<script setup>
const booking = ref({
    date: '',
    time: '',
    table: '',
});
const availableTables = ref([
    { id: 1, name: 'Table 1', capacity: 4 },
    { id: 2, name: 'Table 2', capacity: 6 },
    { id: 3, name: 'Table 3', capacity: 2 },
]);

let bookingConfirmation = null;

const bookTable = () => {
    // Here, you can implement the booking logic, check availability, and store the booking details.
    // For simplicity, we'll just display a confirmation message with the selected details.
    bookingConfirmation = { ...booking.value };
};
</script>

<style scoped>
/* Responsive design with transparent background inputs */
form {

    margin: 0 auto;
}

label,
input,
select {
    display: block;
    margin-bottom: 10px;
    width: 100%;
    /* Transparent background */
    padding: 10px;
    border-bottom: 1px solid #ccc;


}
</style>

