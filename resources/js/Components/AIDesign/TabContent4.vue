<script setup>

const props = defineProps({
  workAndProducts: Array,
  mediaData: Array,
  printData: Array,
  papers: Array,
  photoData: Array,
});

</script>

<template>
  <div class="tab-4-content">
    <div class="w-full flex flex-col gap-[32px]">
      <div class="work-productivity flex flex-col gap-[24px]">
        <h4 class="w-full text-[19px] font-[600] text-[#1D2939] text-sans1">Work and productivity</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[12px]">
          <div v-for="(product, index) in workAndProducts" class="flex flex-col gap-[12px] w-full">
            <div class="flex justify-center items-center py-[16.5px] px-[16px] h-[144px] bg-[#F2F4F7] rounded-[4px]">
              <img :src="product.url" alt="Product Template" class="h-[112px] object-center" />
            </div>
            <h4 class="text-[15px] font-[500] text-sans1 text-[#1D2939]">{{ product.title }}</h4>
          </div>
        </div>
      </div>
      <div class="media-contents flex flex-col gap-[24px]">
        <h4 class="w-full text-[19px] font-[600] text-[#1D2939] text-sans1">Social media</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[12px]">
          <div v-for="(media, index) in mediaData" class="flex flex-col gap-[12px] w-full">
            <div class="flex justify-center items-center h-[144px] py-[16.5px] px-[16px] bg-[#F2F4F7] rounded-[4px]">
              <img :src="media.url" alt="Product Template" class="h-[112px] object-center" />
            </div>
            <h4 class="text-[15px] font-[500] text-sans1 text-[#1D2939]">{{ media.title }}</h4>
          </div>
        </div>
      </div>
      <div class="print-contents flex flex-col gap-[24px]">
        <h4 class="w-full text-[19px] font-[600] text-[#1D2939] text-sans1">Print</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[12px]">
          <div v-for="(print, index) in printData" :key="index" class="flex flex-col gap-[12px] w-full">
            <div class="flex justify-center items-center h-[144px] py-[16.5px] px-[16px] bg-[#F2F4F7] rounded-[4px]">
              <img :src="print.url" :alt="print.title" class="h-[112px] object-center" />
            </div>
            <h4 class="text-[15px] font-[500] text-sans1 text-[#1D2939]">{{ print.title }}</h4>
          </div>
        </div>
      </div>
      <div class="paper-contents flex flex-col gap-[24px]">
        <h4 class="w-full text-[19px] font-[600] text-[#1D2939] text-sans1">Papers</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[12px]">
          <div v-for="(paper, index) in papers" :key="index" class="flex flex-col gap-[12px] w-full">
            <div class="flex justify-center items-center h-[144px] py-[16.5px] px-[16px] bg-[#F2F4F7] rounded-[4px]">
              <img :src="paper.url" :alt="paper.title" class="h-[112px] object-center" />
            </div>
            <h4 class="text-[15px] font-[500] text-sans1 text-[#1D2939]">{{ paper.title }}</h4>
          </div>
        </div>
      </div>
      <div class="photo-contents flex flex-col gap-[24px]">
        <h4 class="w-full text-[19px] font-[600] text-[#1D2939] text-sans1">Photo</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-[12px]">
          <div v-for="(photo, index) in photoData" :key="index" class="flex flex-col gap-[12px] w-full">
            <div class="flex justify-center items-center h-[144px] py-[16.5px] px-[16px] bg-[#F2F4F7] rounded-[4px]">
              <img :src="photo.url" :alt="photo.title" class="h-[112px] object-center" />
            </div>
            <h4 class="text-[15px] font-[500] text-sans1 text-[#1D2939]">{{ photo.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
