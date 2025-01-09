<script setup>

import { ref } from 'vue';
import BannerModal from './BannerModal.vue';

const props = defineProps({
  bannerData: Array,
  openBannerModal: Boolean,
  languages: Array,
});

const openBannerModal = ref(false);

const setOpenBannerModal = () => {
  openBannerModal.value = !openBannerModal.value;
  console.log(openBannerModal);
}

const closeBannerModal = () => {
  openBannerModal.value = false;
}

</script>

<template>
  <div class="tab-content3">
    <div class="flex flex-col gap-[32px]">
      <h4 class="text-[19px] font-sans1 font-[600]">Explore Banner Styles</h4>
      <div class="banner-styles">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <div 
            v-for="(banner, index) in bannerData" 
            class="py-[15px] px-[24px] rounded-[8px] border-[1px] bg-[#F2F4F7] overflow-hidden hover:border-primary-color"
            @click="setOpenBannerModal"
          >
            <img :src="banner.url" alt="Banner image" class="m-auto hover:scale-110 transition-transform duration-100 " />
          </div>
        </div>
      </div>
    </div>
    <div v-if="openBannerModal" class="banner-modal-content">
      <BannerModal
        :languages="languages"
        @closeBannerModal="closeBannerModal"
      />
    </div>
  </div>
</template>
