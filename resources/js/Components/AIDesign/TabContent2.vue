<script setup>
  import { ref, computed } from 'vue';

  // Props
const props = defineProps({
  templateData: Array,
  searchTitle: String,
  openFilterData: Boolean,
});

const emit = defineEmits([
  'setOpenFilterData'
])

// Reactive state for search title
const searchTitle = ref('');

// Computed property to filter the blog posts based on the search title
const filteredResults = computed(() => {
  return props.templateData.filter((item) =>
    item.title.toLowerCase().includes(searchTitle.value.toLowerCase())
  );
});

// Method to update search title on input
const setFilterTitle = (e) => {
  searchTitle.value = e.target.value;
};

// Set openFilterData true/false
const setOpenFilterData = (title) => {
  emit('setOpenFilterData', title);
}

</script>

<template>
  <div class="tab-content-2">
    <div class="relative w-full h-[220px] pt-[42px] border-[1px] border-[#D0D5DD] rounded-[12px] bg-[#E8E4FC] overflow-hidden px-[20px] md:px-[182px]">
      <!-- Background with opacity using pseudo-element -->
      <div class="absolute inset-0 bg-cover bg-center opacity-20" style="background-image: url('/assets/Image/img/part-img/box-bg.png');"></div>
      
      <div class="m-auto text-center text-[32px] font-[500] font-sans1">
        <h1 class="text-[22px] font-[500] md:text-[32px]">What do you want to design?</h1>
      </div>

      <div class="flex justify-center items-center w-2/3 rounded-[8px] bg-white mt-[34px] mx-auto px-[14px] border-[1px] border-[#D0D5DD]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#6245E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <input 
          :value="searchTitle"
          type="text"
          placeholder="Search Template"
          class="search-title w-full border-none focus:outline-none focus:border-none focus:ring-0 z-10"
          style="appearance: none; -webkit-appearance: none; -moz-appearance: textfield;"
          @input="setFilterTitle"
        />
      </div>

      <div class="absolute right-0 bottom-0">
        <div class="right-bottom-img">
          <img src="/assets/Image/img/part-img/tab-2-bottom.png" />
          <div class="absolute w-[52px] h-[48px] rounded-[5px] right-[-10px] bottom-[40px] p-[4px] bg-white rotate-[-20deg]">
            <img class="rotate-[20deg] m-auto" src="/assets/Image/img/part-img/design-pen.png" />
          </div>
        </div>
      </div>
    </div>

    <div class="tab2-templates mt-[32px]">
      <div class="flex flex-col gap-[24px]">
        <h4 class="text-[19px] font-[500] text-[#1D2939]">Explore template</h4>
        <div class="template-cards">
          <div class="filtered-results mt-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <div
                v-for="(item, index) in filteredResults"
                :key="item.id || index"
                class="flex flex-col gap-[12px]"
                @click="setOpenFilterData(item.title)"
              >
                <div class="relative flex justify-center items-center w-full h-[144px] bg-[#F2F4F7] px-[17px] py-[8px] rounded-[5px] overflow-hidden group">
                  <img :src="item.url" alt="Template Image" class="object-contain transition-transform duration-300 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]' group-hover:scale-110" />
                </div>
                <h4 class="text-[15px] font-[500] text-[#1D2939] font-sans1">{{ item.title }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
