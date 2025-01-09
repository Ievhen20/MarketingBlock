<script setup>

import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import SideBar from '@/Components/SideBar.vue';
import TabContent1 from '@/Components/AIDesign/TabContent1.vue';
import { exploreIdeas, templateData, filteredImages, collectionData, workAndProducts, mediaData, printData, papers, photoData, bannerData } from '@/Utils/ImgData';
import { languages } from '@/Utils/language';
import TabContent2 from '@/Components/AIDesign/TabContent2.vue';
import TabContent3 from '@/Components/AIDesign/TabContent3.vue';
import TabContent4 from '@/Components/AIDesign/TabContent4.vue';

const activeTab = ref(1);
const childTabNum = ref(1);

// ======== Define state for Tab-1 =========
const imageNum = ref(8);
const minImageNum = 1;
const maxImageNum = 16;
const advancedSetting = ref(false);
// ======== Define state for Tab-2 ========
const openFilterData = ref(false);
const filteredTitle = ref('');

const setActiveTab = (tabNumber) => {
  activeTab.value = tabNumber;
};

// Increase image number
const increaseImageNum = () => {
  if (imageNum.value < maxImageNum) {
    imageNum.value += 1;
  }
};

// Decrease image number
const decreaseImageNum = () => {
  if (imageNum.value > minImageNum) {
    imageNum.value -= 1;
  }
};

// Toggle the advanced setting state
const changeAdvancedSetting = () => {
  advancedSetting.value = !advancedSetting.value;
};

// Set Active ChildTab index
const setActiveChildTab = (tabNumber) => {
  childTabNum.value = tabNumber;
};

// Set openFilterData
const setOpenFilterData = (title) => {
  openFilterData.value = !openFilterData.value;
  filteredTitle.value = title;
}

// Return to Tab-2 selected status
const returnSecondTab = () => {
  openFilterData.value = false;
  setActiveTab(2);
}

</script>

<template>

  <Head title="AIDesign" />

  <AuthenticatedLayout>
    <div class="w-full pt-24 px-[24px]">
      <div class="flex gap-2 flex-col lg:flex-row">
        <SideBar />
        <div class="w-full relative flex flex-row">
          <div 
            ref="blogRef"
            class="w-full px-[21px] py-[23px] min-w-[310px] min-h-[85vh] max-h-[85vh] rounded-[15px] bg-[#FFFFFF] overflow-y-auto z-10 custom-scrollbar"
          >
            <div v-if="openFilterData">
              <div class="w-full rounded-[15px] pt-[19px]">
                <div class="flex flex-col gap-[26px]">
                  <h4 class="px-[12px] flex justify-start gap-[15px] text-[20px] text-[#1D2939] font-sans1 font-[600] items-center">
                    <img src="/assets/Image/icon/preview-icon.png" alt="Preview Icon" @click="returnSecondTab" /> {{ filteredTitle }}
                  </h4>
                  <div class="filtered-images">
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[15px]">
                      <div 
                        v-for="(filterImage, index) in filteredImages"
                        class="flex justify-center items-center py-[28px] px-[15px] bg-[#F2F4F7] rounded-[5px]"
                      >
                        <img :src="filterImage.url" alt="Template" />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-end items-center gap-[10px]">
                    <button class="w-[173px] h-[44px] text-[15px] text-primary-color font-sans1 font-[600] rounded-[8px] p-[10px] border-[1px] border-primary-color">Create variation</button>
                    <button class="w-[173px] h-[44px] text-[15px] text-white font-sans1 bg-primary-color font-[600] rounded-[8px] p-[10px] border-[1px] border-primary-color">Next</button>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <div class="flex gap-4 justify-between items-center">
                <h2 class="text-[22px] font-400 font-sans1">AI Designer</h2>
                <div
                  class="flex justify-center gap-2 items-center w-[144px] h-[44px] rounded-[6px] border-[1px] border-[#D0D5DD] p-[6px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.25 2.25H6.75C5.75544 2.25 4.80161 2.64509 4.09835 3.34835C3.39509 4.05161 3 5.00544 3 6V12.75C3 13.3467 3.23705 13.919 3.65901 14.341C4.08097 14.7629 4.65326 15 5.25 15H9.75L9.01031 19.3753C9.00358 19.4165 9.00013 19.4582 9 19.5C9 20.2956 9.31607 21.0587 9.87868 21.6213C10.4413 22.1839 11.2044 22.5 12 22.5C12.7956 22.5 13.5587 22.1839 14.1213 21.6213C14.6839 21.0587 15 20.2956 15 19.5C14.9999 19.4582 14.9964 19.4165 14.9897 19.3753L14.25 15H18.75C19.3467 15 19.919 14.7629 20.341 14.341C20.7629 13.919 21 13.3467 21 12.75V3C21 2.80109 20.921 2.61032 20.7803 2.46967C20.6397 2.32902 20.4489 2.25 20.25 2.25ZM6.75 3.75H16.5V7.5C16.5 7.69891 16.579 7.88968 16.7197 8.03033C16.8603 8.17098 17.0511 8.25 17.25 8.25C17.4489 8.25 17.6397 8.17098 17.7803 8.03033C17.921 7.88968 18 7.69891 18 7.5V3.75H19.5V9.75H4.5V6C4.5 5.40326 4.73705 4.83097 5.15901 4.40901C5.58097 3.98705 6.15326 3.75 6.75 3.75ZM18.75 13.5H14.25C14.0351 13.5 13.8227 13.5462 13.6272 13.6354C13.4317 13.7246 13.2577 13.8548 13.1169 14.0171C12.9761 14.1794 12.8718 14.3701 12.8111 14.5762C12.7504 14.7824 12.7346 14.9991 12.765 15.2119V15.2306L13.5 19.5563C13.5 19.9541 13.342 20.3356 13.0607 20.6169C12.7794 20.8982 12.3978 21.0563 12 21.0563C11.6022 21.0563 11.2206 20.8982 10.9393 20.6169C10.658 20.3356 10.5 19.9541 10.5 19.5563L11.2313 15.2306V15.2119C11.2616 14.9995 11.2459 14.783 11.1855 14.5771C11.125 14.3713 11.021 14.1808 10.8806 14.0185C10.7402 13.8562 10.5666 13.726 10.3716 13.6365C10.1765 13.5471 9.96457 13.5005 9.75 13.5H5.25C5.05109 13.5 4.86032 13.421 4.71967 13.2803C4.57902 13.1397 4.5 12.9489 4.5 12.75V11.25H19.5V12.75C19.5 12.9489 19.421 13.1397 19.2803 13.2803C19.1397 13.421 18.9489 13.5 18.75 13.5Z"
                      fill="#D0D5DD">
                    </path>
                  </svg>
                  <p class="text-[16px] font-600 font-sans1 text-[#1D2939]">My designs</p>
                </div>
              </div>
              <div class="flex flex-wrap justify-center lg:justify-start items-center gap-4 py-[32px]">
                <div @click="setActiveTab(1)"
                  :class="['flex w-[196px] h-[48px] gap-[12px] p-[12px] rounded-[6px] border-[1px] text-[#1D2939] cursor-pointer', activeTab === 1 ? 'border-primary-color shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]' : 'border-[#E4E7EC]', 'hover:bg-[#F4EBFF]']">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.84281 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z"
                      stroke="url(#paint0_linear_500_2786)" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <defs>
                      <linearGradient id="paint0_linear_500_2786" x1="12" y1="2" x2="12" y2="22"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#6245E7"></stop>
                        <stop offset="1" stop-color="#D25CFB"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <h4 class="font-500 text-[16px]">Design with AI</h4>
                </div>
                <div @click="setActiveTab(2)"
                  :class="['tab-1 flex h-[48px] gap-[12px] p-[12px] rounded-[6px] border-[1px] text-[#1D2939] cursor-pointer', activeTab === 2 ? 'border-primary-color shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]' : 'border-[#E4E7EC]', 'hover:bg-[#FEF3F2]']">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V20.25C2.25007 20.3778 2.28281 20.5035 2.34511 20.6151C2.40741 20.7268 2.49721 20.8206 2.60597 20.8878C2.71474 20.9549 2.83887 20.9932 2.96657 20.9989C3.09427 21.0046 3.22131 20.9775 3.33563 20.9203L6 19.5881L8.66437 20.9203C8.76857 20.9725 8.88348 20.9996 9 20.9996C9.11652 20.9996 9.23143 20.9725 9.33563 20.9203L12 19.5881L14.6644 20.9203C14.7686 20.9725 14.8835 20.9996 15 20.9996C15.1165 20.9996 15.2314 20.9725 15.3356 20.9203L18 19.5881L20.6644 20.9203C20.7787 20.9775 20.9057 21.0046 21.0334 20.9989C21.1611 20.9932 21.2853 20.9549 21.394 20.8878C21.5028 20.8206 21.5926 20.7268 21.6549 20.6151C21.7172 20.5035 21.7499 20.3778 21.75 20.25V5.25C21.75 4.85218 21.592 4.47064 21.3107 4.18934C21.0294 3.90804 20.6478 3.75 20.25 3.75ZM20.25 19.0369L18.3356 18.0787C18.2314 18.0266 18.1165 17.9995 18 17.9995C17.8835 17.9995 17.7686 18.0266 17.6644 18.0787L15 19.4119L12.3356 18.0787C12.2314 18.0266 12.1165 17.9995 12 17.9995C11.8835 17.9995 11.7686 18.0266 11.6644 18.0787L9 19.4119L6.33563 18.0787C6.23143 18.0266 6.11651 17.9995 6 17.9995C5.88349 17.9995 5.76857 18.0266 5.66437 18.0787L3.75 19.0369V5.25H20.25V19.0369ZM12.75 10.5C12.75 10.3011 12.829 10.1103 12.9697 9.96967C13.1103 9.82902 13.3011 9.75 13.5 9.75H18C18.1989 9.75 18.3897 9.82902 18.5303 9.96967C18.671 10.1103 18.75 10.3011 18.75 10.5C18.75 10.6989 18.671 10.8897 18.5303 11.0303C18.3897 11.171 18.1989 11.25 18 11.25H13.5C13.3011 11.25 13.1103 11.171 12.9697 11.0303C12.829 10.8897 12.75 10.6989 12.75 10.5ZM12.75 13.5C12.75 13.3011 12.829 13.1103 12.9697 12.9697C13.1103 12.829 13.3011 12.75 13.5 12.75H18C18.1989 12.75 18.3897 12.829 18.5303 12.9697C18.671 13.1103 18.75 13.3011 18.75 13.5C18.75 13.6989 18.671 13.8897 18.5303 14.0303C18.3897 14.171 18.1989 14.25 18 14.25H13.5C13.3011 14.25 13.1103 14.171 12.9697 14.0303C12.829 13.8897 12.75 13.6989 12.75 13.5ZM6 15.75H10.5C10.6989 15.75 10.8897 15.671 11.0303 15.5303C11.171 15.3897 11.25 15.1989 11.25 15V9C11.25 8.80109 11.171 8.61032 11.0303 8.46967C10.8897 8.32902 10.6989 8.25 10.5 8.25H6C5.80109 8.25 5.61032 8.32902 5.46967 8.46967C5.32902 8.61032 5.25 8.80109 5.25 9V15C5.25 15.1989 5.32902 15.3897 5.46967 15.5303C5.61032 15.671 5.80109 15.75 6 15.75ZM6.75 9.75H9.75V14.25H6.75V9.75Z"
                      fill="#F04438"></path>
                  </svg>
                  <h4 class="font-500 text-[16px]">Design with Template</h4>
                </div>
                <div @click="setActiveTab(3)"
                  :class="['tab-2 flex h-[48px] gap-[12px] p-[12px] rounded-[6px] border-[1px] text-[#1D2939] cursor-pointer', activeTab === 3 ? 'border-primary-color shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]' : 'border-[#E4E7EC]', 'hover:bg-[#F6FEF9]']">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.5 8.25H4.5C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V18.75C3 19.1478 3.15804 19.5294 3.43934 19.8107C3.72064 20.092 4.10218 20.25 4.5 20.25H19.5C19.8978 20.25 20.2794 20.092 20.5607 19.8107C20.842 19.5294 21 19.1478 21 18.75V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25ZM19.5 18.75H4.5V9.75H19.5V18.75ZM4.5 6C4.5 5.80109 4.57902 5.61032 4.71967 5.46967C4.86032 5.32902 5.05109 5.25 5.25 5.25H18.75C18.9489 5.25 19.1397 5.32902 19.2803 5.46967C19.421 5.61032 19.5 5.80109 19.5 6C19.5 6.19891 19.421 6.38968 19.2803 6.53033C19.1397 6.67098 18.9489 6.75 18.75 6.75H5.25C5.05109 6.75 4.86032 6.67098 4.71967 6.53033C4.57902 6.38968 4.5 6.19891 4.5 6ZM6 3C6 2.80109 6.07902 2.61032 6.21967 2.46967C6.36032 2.32902 6.55109 2.25 6.75 2.25H17.25C17.4489 2.25 17.6397 2.32902 17.7803 2.46967C17.921 2.61032 18 2.80109 18 3C18 3.19891 17.921 3.38968 17.7803 3.53033C17.6397 3.67098 17.4489 3.75 17.25 3.75H6.75C6.55109 3.75 6.36032 3.67098 6.21967 3.53033C6.07902 3.38968 6 3.19891 6 3Z"
                      fill="#12B76A"></path>
                  </svg>
                  <h4 class="font-500 text-[16px]">Design Bulk banners</h4>
                </div>
                <div @click="setActiveTab(4)"
                  :class="['flex h-[48px] gap-[12px] p-[12px] rounded-[6px] border-[1px] text-[#1D2939] cursor-pointer', activeTab === 4 ? 'border-primary-color shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]' : 'border-[#E4E7EC]', 'hover:bg-[#FFFAEB]']">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.5 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H14.6897C14.8867 21.0006 15.082 20.9621 15.264 20.8866C15.446 20.8111 15.6112 20.7002 15.75 20.5603L20.5603 15.75C20.7002 15.6112 20.8111 15.446 20.8866 15.264C20.9621 15.082 21.0006 14.8867 21 14.6897V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM4.5 4.5H19.5V14.25H15C14.8011 14.25 14.6103 14.329 14.4697 14.4697C14.329 14.6103 14.25 14.8011 14.25 15V19.5H4.5V4.5ZM18.4397 15.75L15.75 18.4397V15.75H18.4397Z"
                      fill="#FEC84B"></path>
                  </svg>
                  <h4 class="font-500 text-[16px]">Design from scratch</h4>
                </div>
              </div>
  
              <div class="tab-wrap">
                <div class="tab-wrap-main">
                  <!-- Show content based on active tab -->
                  <div v-if="activeTab === 1" class="tab-content">
                    <div class="tab-content-1">
                      <TabContent1 
                        :imageNum="imageNum" 
                        :minImageNum="minImageNum" 
                        :maxImageNum="maxImageNum" 
                        :advancedSetting="advancedSetting" 
                        :childTabNum="childTabNum" 
                        :exploreIdeas="exploreIdeas"
                        :collectionData="collectionData"
                        @setActiveChildTab="setActiveChildTab" 
                        @increaseImageNum="increaseImageNum" 
                        @decreaseImageNum="decreaseImageNum" 
                        @changeAdvancedSetting="changeAdvancedSetting"
                      />
                    </div>
                  </div>
                  <div v-if="activeTab === 2" class="tab-content">
                    <div class="tab-content-2">
                      <TabContent2
                        :templateData="templateData"
                        :openFilterData="openFilterData"
                        @setOpenFilterData="setOpenFilterData"
                      />
                    </div>
                  </div>
                  <div v-if="activeTab === 3" class="tab-content">
                    <div class="tab-content-3">
                      <TabContent3 
                        :bannerData="bannerData"
                        :languages="languages"
                      />
                    </div>
                  </div>
                  <div v-if="activeTab === 4" class="tab-content">
                    <TabContent4 
                      :workAndProducts="workAndProducts"
                      :mediaData="mediaData"
                      :printData="printData"
                      :papers="papers"
                      :photoData="photoData"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #6231EF;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #4a1ed5;
}

.custom-scrollbar::-webkit-scrollbar-track:hover {
  background-color: #e0e0e0;
}
</style>
