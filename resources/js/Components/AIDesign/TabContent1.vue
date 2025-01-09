<script setup>

import { ref } from 'vue';
import { collectionData, exploreIdeas, generatedImages } from '@/Utils/ImgData';
import ExploreModal from './ExploreModal.vue';
import GeneratedModal from './GeneratedModal.vue';
import PreviewModal from './PreviewModal.vue';

// Define props passed from the parent
const props = defineProps({
  imageNum: Number,
  minImageNum: Number,
  maxImageNum: Number,
  advancedSetting: Boolean,
  childTabNum: Number,
  exploreIdeas: Array,
  isModalVisible: Boolean,
  selectedIdea: Object,
  imageDescription: String,
  collectionData: Array,
  isPreviewMenu: Boolean,
  openGeneratedModal: Boolean,
  generatedImages: Array,
  openPreview: Boolean,
});

const isModalVisible = ref(false);
const selectedIdea = ref(null);
const imageDescription = ref('');
const isPreviewMenu = ref(false);
const openGeneratedModal = ref(false);
const openPreview = ref(false);

// Define emit events to send data back to the parent
const emit = defineEmits([
  'increaseImageNum',
  'decreaseImageNum',
  'changeAdvancedSetting',
  'setActiveChildTab',
]);

// Methods to handle actions
const increaseImageNum = () => {
  emit('increaseImageNum');
};

const decreaseImageNum = () => {
  emit('decreaseImageNum');
};

const changeAdvancedSetting = () => {
  emit('changeAdvancedSetting');
};

const setActiveChildTab = (tabNumber) => {
  emit('setActiveChildTab', tabNumber);
};

// Method to open modal with selected exploreIdea
const viewPrompt = (exploreIdea) => {
  selectedIdea.value = exploreIdea; // Assign the selected idea to `selectedIdea` ref
  isModalVisible.value = true; // Show the modal
}

// Method to close the modal
const closeModal = () => {
  isModalVisible.value = false; // Hide the modal
  selectedIdea.value = null; // Reset the selected idea
}

// Method to set the textarea's title
const setTextareaTitle = (title) => {
  imageDescription.value = title; // Set the description as the title for the textarea
}

const setIsPreviewMenu = () => {
  isPreviewMenu.value = !isPreviewMenu.value;
}

const setOpenGeneratedModal = () => {
  if(imageDescription.value === '') {
    alert("Design description field is required")
  } else {
    console.log('openGeneratedModal', openGeneratedModal.value);
    openGeneratedModal.value = !openGeneratedModal.value;
  }
}

const closeGeneratedModal = () => {
  openGeneratedModal.value = false;
}

const setOpenPreview = () => {
  closeGeneratedModal();
  openPreview.value = !openPreview.value;
}

const returnGenerated = () => {
  openPreview.value = false;
  openGeneratedModal.value = true;
}

</script>

<template>
  <!-- Tab 1 component -->
  <section>
    <div class="flex flex-col gap-[8px] font-sans1 text-[#101828]">
      <h1 class="text-[20px] font-[600]">Try prompt to design</h1>
      <p class="text-[14px] font-[400]">Give it a try, share your feedback, and together we'll make it better
      </p>
    </div>
    <div
      class="generate-form flex flex-row justify-between items-center w-full rounded-[8px] bg-[#F9FAFB] border-[1px] border-[#D0D5DD] text-[16px] mt-[20px] group focus:border-primary-color focus:outline-[2px] focus:outline-[#E7D8FD]">
      <div class="w-full focus:border-primary-color focus:outline focus:outline-offset-[0px] focus:outline-[2px] focus:outline-[#F4EBFF]">
        <textarea 
          :value="imageDescription" 
          placeholder="Design a beautiful Social media banner.."
          class="bg-transparent border-none overflow-hidden w-full resize-none h-[32px] my-auto focus:outline-none focus:ring-0 focus:border-none"
        ></textarea>
      </div>
      <div class="flex">
        <div class="h-[36px] border-[1px] border-[#E4E7EC] my-auto"></div>
        <h4 class="my-[2px] py-[10px] ml-[30px] pr-[10px] text-[#475467] text-nowrap">Number of Image</h4>
        <div class="flex w-[100px] my-auto border-[1px] border-[#E0E0E0] rounded-[5px] mr-2">
          <input type="number" :value="imageNum" :min="minImageNum" :max="maxImageNum" class="bg-transparent border-none w-full focus:outline-none focus:border-none focus:ring-0" 
          style="appearance: none; -webkit-appearance: none; -moz-appearance: textfield;">
          <div class="flex w-1/2 flex-col justify-center items-center border-l-[1px] border-l-[#E0E0E0]">
            <!-- First SVG - Acting Individually on Hover -->
            <div @click="increaseImageNum" class="flex justify-center items-center w-full h-1/2 border-b-[1px] border-b-[#E0E0E0] group" :class="{'cursor-not-allowed': imageNum.value >= maxImageNum}">
              <svg width="11" height="8" class="my-auto" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_671_4185" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="11" height="8">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3002 6.87338L10.5357 6.62396C10.781 6.36409 10.7799 5.94155 10.5389 5.68619L6.04285 0.922876C6.04206 0.922101 6.04127 0.921327 6.04061 0.920423L5.80504 0.671006L5.77039 0.640281L5.7155 0.591095C5.50427 0.435661 5.22321 0.434112 5.00828 0.59032C5.00405 0.593031 4.99995 0.59613 4.99585 0.599228C4.96847 0.620529 4.94188 0.644412 4.91675 0.671006L4.68132 0.920423L4.67788 0.924296L0.182873 5.68619C-0.0606264 5.94426 -0.0623458 6.36073 0.186047 6.62396L0.42161 6.87338C0.666829 7.13325 1.06574 7.13209 1.30659 6.87686L5.36037 2.58191L9.4152 6.87686C9.6587 7.1348 10.0518 7.13661 10.3002 6.87338Z" fill="white"></path>
                </mask>
                <g mask="url(#mask0_671_4185)">
                  <path class="text-[#A8AAB7] fill-current group-hover:text-primary-color" fill="#A8AAB7" fill-rule="evenodd" clip-rule="evenodd" d="M-6.59668 13.6672H17.3164V-6.9475H-6.59668V13.6672Z"></path>
                </g>
              </svg>
            </div>
            
            <!-- Second SVG - Acting Individually on Hover -->
            <div @click="decreaseImageNum" class="h-1/2 flex justify-center items-center group" :class="{'cursor-not-allowed': imageNum.value <= minImageNum}">
              <svg width="11" height="10" class="my-auto" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_671_4188" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="11" height="7">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3002 0.33805L10.5357 0.587467C10.781 0.847341 10.7799 1.26988 10.5389 1.52523L6.04285 6.28855C6.04206 6.28932 6.04127 6.2901 6.04061 6.291L5.80504 6.54042L5.77039 6.57114L5.7155 6.62033C5.50427 6.77576 5.22321 6.77731 5.00828 6.62111C5.00405 6.61839 4.99995 6.6153 4.99585 6.6122C4.96847 6.5909 4.94188 6.56701 4.91675 6.54042L4.68132 6.291L4.67788 6.28713L0.182873 1.52523C-0.0606264 1.26717 -0.0623458 0.850697 0.186047 0.587467L0.42161 0.33805C0.666829 0.0781766 1.06574 0.0793385 1.30659 0.334565L5.36037 4.62952L9.4152 0.334565C9.6587 0.0766274 10.0518 0.07482 10.3002 0.33805Z" fill="white"></path>
                </mask>
                <g mask="url(#mask0_671_4188)">
                  <path class="text-[#A8AAB7] fill-current group-hover:text-primary-color" fill="#A8AAB7" fill-rule="evenodd" clip-rule="evenodd" d="M-6.59668 -6.45581H17.3164V14.1589H-6.59668V-6.45581Z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div
          @click="setOpenGeneratedModal"
          class="flex justify-center gap-[4px] w-[175px] text-center text-[16px] font-[400] text-white bg-primary-color m-[2px] p-[10px] rounded-[8px] cursor-pointer">
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 21V16M4 6V1M1.5 3.5H6.5M1.5 18.5H6.5M12.5 2L10.7658 6.50886C10.4838 7.24209 10.3428 7.60871 10.1235 7.91709C9.92919 8.1904 9.6904 8.42919 9.41709 8.62353C9.10871 8.84281 8.74209 8.98381 8.00886 9.26582L3.5 11L8.00886 12.7342C8.74209 13.0162 9.10871 13.1572 9.41709 13.3765C9.6904 13.5708 9.92919 13.8096 10.1235 14.0829C10.3428 14.3913 10.4838 14.7579 10.7658 15.4911L12.5 20L14.2342 15.4911C14.5162 14.7579 14.6572 14.3913 14.8765 14.0829C15.0708 13.8096 15.3096 13.5708 15.5829 13.3765C15.8913 13.1572 16.2579 13.0162 16.9911 12.7342L21.5 11L16.9911 9.26582C16.2579 8.98381 15.8913 8.8428 15.5829 8.62353C15.3096 8.42919 15.0708 8.1904 14.8765 7.91709C14.6572 7.60871 14.5162 7.24209 14.2342 6.50886L12.5 2Z"
              stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path>
          </svg>
          <span>Generate</span>
        </div>
      </div>
    </div>
    <div class="w-full flex gap-[12px] my-[12px]">
      <p class="text-[15px] font-[500]">Advanced settings</p>
      <div @click="changeAdvancedSetting" :class="['relative w-[36px] h-[20px] rounded-[18px] cursor-pointer', advancedSetting === true ? 'bg-[#F2F4F7]' : 'bg-primary-color']">
        <div class="absolute w-[16px] h-[16px] bg-white rounded-full left-[2px] top-[2px] transition-transform duration-[200ms] ease-in-out" :class="{ 'translate-x-[16px]': !advancedSetting, }"></div>
      </div>
    </div>
    <transition name="fade-slide">
      <div v-show="!advancedSetting" class="flex gap-[12px] max-w-[345px] rounded-[8px] p-[12px] text-[15px] text-[500] font-sans1 bg-[#F9FAFB] transition-all duration-[400ms] ease-out">
        <div class="flex justify-between items-center gap-[11px] cursor-pointer">
          <img src="/assets/Image/img/part-img/add-img.png" />
          <h4 class="text-primary-color">Add image</h4>
        </div>
        <div class="empty border-[1px] border-[#E4E7EC]"></div>
        <div class="flex justify-between items-center gap-[24px]">
          <h1 class="text-[#475467]">Preferred color</h1>
          <div class="flex justify-center items-center w-[35px] h-[34px] bg-[#FFFFFF] rounded-[4px]">
            <div class="w-[28px] h-[28px] m-auto rounded-[4px] bg-[#12B76A] cursor-pointer"></div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Tab Navigation -->
    <div class="flex w-full border-b-[1px] border-b-[#E4E7EC] mt-[26px] mb-[20px] h-[40px] gap-[16px] text-[19px] font-[500] font-sans1">
      <div @click="setActiveChildTab(1)" 
        :class="['px-[4px] pb-[16px] cursor-pointer', childTabNum === 1 ? 'text-primary-color border-b-[2px] border-b-primary-color' : 'text-[#1D2939] border-none']"
      >
        Explore ideas
      </div>
      <div @click="setActiveChildTab(2)" 
        class="px-[4px] pb-[16px] cursor-pointer"
        :class="childTabNum === 2 ? 'text-primary-color border-b-[2px] border-b-primary-color' : 'text-[#1D2939] border-none'"
      >
        My collections
      </div>
    </div>

    <div class="w-full tab-detail-content">
      <!-- Child Tab-1 Explore Ideas -->
      <div v-if="childTabNum === 1">
        <div class="explore-ideas">
          <div class="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-6">
            <div
              v-for="(exploreIdea, index) in exploreIdeas"
              :key="exploreIdea.id || index"
              class="relative flex justify-center items-center h-[142px] bg-[#F2F4F7] rounded-lg overflow-hidden px-[24px] pt-[18px] pb-[10px] group z-10"
            >
              <img :src="exploreIdea.url" alt="Explore Idea Image" class="object-center transition-transform duration-300 group-hover:scale-120" />
              <div class="overlay absolute inset-0 flex justify-center items-center bg-[#000000] bg-opacity-50 text-white text-[15px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <button class="border-[1px] border-white w-[102px] h-[35px] rounded-[5px] p-auto" @click="viewPrompt(exploreIdea)">
                  See prompt
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal component (conditionally rendered) -->
        <ExploreModal 
          v-if="isModalVisible" 
          :explore-idea="selectedIdea" 
          @close-modal="closeModal" 
          @set-title="setTextareaTitle"
        />
      </div>
      <!-- Child Tab-2 My Collections -->
      <div v-if="childTabNum === 2">
        <div class="collections">
          <div class="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-6">
            <div
              v-for="(collection, index) in collectionData"
              :key="collection.id || index"
              class="relative flex justify-center items-center h-[142px] bg-[#F2F4F7] rounded-lg overflow-hidden px-[14px] pt-[16px] pb-[8px] group z-10"
            >
              <img :src="collection.url" alt="Collection Image" class="w-center object-contain transition-transform duration-300 group-hover:scale-120" />
              <div class="overlay absolute inset-0 bg-[#000000] px-[8px] py-[8px] bg-opacity-50 text-white text-[15px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <button class="w-[24px] h-[24px] bg-white flex rounded-[4px] p-[3px] float-right">
                  <div class="relative w-[16px] h-[16px] flex justify-center items-center">
                    <img src="/assets/Image/img/dot-icon.png" alt="Preview Icon" @click="setIsPreviewMenu(collection.index)" />
                    <div class="preview-btn absolute top-[18px] right-[0px] bg-white text-[#344054] rounded-[6px]">
                      <ul v-if="isPreviewMenu || collection.index" class="list-style-none text-[14px] font-sans1 font-[400] text-left z-50">
                        <li class="px-[16px] py-[10px] text-nowrap">Preview</li>
                        <li class="px-[16px] py-[10px] text-nowrap">Edit on Designer</li>
                        <li class="px-[16px] py-[10px] text-nowrap">Download</li>
                        <li class="px-[16px] py-[10px] text-nowrap">Delete</li>
                      </ul>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GeneratedModal 
      v-if="openGeneratedModal"
      :generatedImages="generatedImages"
      :openPreview="openPreview"
      @closeGeneratedModal="closeGeneratedModal"
      @setOpenPreview="setOpenPreview"
    />
    <PreviewModal 
      v-if="openPreview"
      @returnGenerated="returnGenerated"
    />
  </section>
  
</template>
