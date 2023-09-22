<template>
  <div>
    <!-- Tab dropdown for phones -->
    <select v-model="activeTab"
            class="py-2 px-3 text-lg text-[#DD5903] w-full focus:outline-none uppercase block sm:hidden">
      <!-- default option that is disabled -->
      <option disabled
              value="0">Select a Menu</option>
      <!-- loop through tabs array and create an option for each tab -->
      <option v-for="(tab, index) in tabs"
              :key="index"
              :value="index">
        {{ tab.name }}
      </option>
    </select>

    <!-- Tabs for laptops and desktops -->
    <div class="hidden sm:block">
      <div class="tab-buttons flex gap-2 md:flex-wrap justify-center ">
        <button v-for="(tab, index) in tabs"
                :key="index"
                @click="toggleTab(index)"
                :class="{ active: activeTab === index }"
                class="  text-[#DD5903] uppercase text-xl py-4 px-4">
          {{ tab.name }}
        </button>
      </div>
    </div>

    <!-- Tab content with transition -->
    <transition name="fade"
                mode="out-in"
                enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__fadeOutDown">
      <div :key="activeTab">
        <div class="tab-content flex basis-1/3 flex-wrap justify-between gap-x-2">
          <!-- menu image with menu name on the image -->
          <div class="h-48 xl:h-[40vh] py-5 basis-full"
               data-aos="fade-up"
               data-aos-duration="1000"
               v-if="image">
            <NuxtImg loading="lazy"
                     format="webp"
                     alt="image"
                     sizes="sm:100vw md:50vw lg:1200px"
                     provider="cloudinary"
                     :modifiers="{ effect: 'colorize:60', color: 'black' }"
                     :src="image"
                     class="w-full h-full object-cover object-center rounded-md" />
            <div class="absolute inset-0 flex items-center justify-center text-white">
              <h2 class="text-4xl text-center md:text-3xl lg:text-4xl uppercase w-9/12 xl:text-6xl">
                {{ `${menuName} Menu` }}
              </h2>
            </div>
          </div>
          <!-- menu items -->
          <div v-for="(item, index) in items"
               :key="index"
               class="">
            <MenuItem :name="item.name"
                      :ingredients="item.ingredients"
                      :price="item.price"
                      :image="item.image" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";

  // Props
  const props = defineProps({
    tabs: {
      type: Object,
      required: true,
    },
  });

  // State
  const activeTab = ref(0);

  // Methods
  const items = ref(null);
  const image = ref(null);
  const menuName = ref(null);

  // Watch for changes in the activeTab and update items accordingly
  watchEffect(() => {
    if (props.tabs[activeTab.value]) {
      items.value = props.tabs[activeTab.value].items;
      image.value = props.tabs[activeTab.value].image;
      menuName.value = props.tabs[activeTab.value].name;
    }
  });

  const toggleTab = (index) => {
    activeTab.value = index;
    // push each item in the active tab to items array
    items.value = props.tabs[activeTab.value].items;
    image.value = props.tabs[activeTab.value].image;
    menuName.value = props.tabs[activeTab.value].name;
  };

  // Toggle tab on mount if tabs array has more than one item
  onMounted(() => {
    if (props.tabs.length > 1) {
      activeTab.value = 1;
    }
  });
</script>

<style scoped>
  /* Add your CSS for styling the dropdown and transitions here */

  .tab-buttons {
    display: flex;
    gap: 2rem;
    /* Adjust the gap as needed */
  }

  .tab-buttons button {
    cursor: pointer;
    background-color: #eee;
    border: none;
    /* Remove the default button border */
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }

  .tab-buttons button:hover {
    background-color: #dd5903;
    color: white;
  }

  .tab-buttons button.active {
    background-color: #dd5903;
    color: white;
  }

</style>
