<template>
  <div class="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-20">
    <div class="modal-content bg-white p-8 rounded-lg max-w-6xl mx-auto my-[95px]">
      <div class="generated-modal-header w-full flex justify-between items-center mb-8">
        <h1 class="text-xl font-sans1 text-[#1D2939]">Generated results</h1>
        <div @click="closeGeneratedModal" class="cursor-pointer text-[#6245E7]">
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.40994 6.49994L11.7099 2.20994C11.8982 2.02164 12.004 1.76624 12.004 1.49994C12.004 1.23364 11.8982 0.978245 11.7099 0.789941C11.5216 0.601638 11.2662 0.49585 10.9999 0.49585C10.7336 0.49585 10.4782 0.601638 10.2899 0.789941L5.99994 5.08994L1.70994 0.789941C1.52164 0.601638 1.26624 0.49585 0.999939 0.49585C0.733637 0.49585 0.478243 0.601638 0.289939 0.789941C0.101635 0.978245 -0.00415277 1.23364 -0.00415277 1.49994C-0.00415278 1.76624 0.101635 2.02164 0.289939 2.20994L4.58994 6.49994L0.289939 10.7899C0.196211 10.8829 0.121816 10.9935 0.0710478 11.1154C0.0202791 11.2372 -0.00585938 11.3679 -0.00585938 11.4999C-0.00585938 11.632 0.0202791 11.7627 0.0710478 11.8845C0.121816 12.0064 0.196211 12.117 0.289939 12.2099C0.382902 12.3037 0.493503 12.3781 0.615362 12.4288C0.737221 12.4796 0.867927 12.5057 0.999939 12.5057C1.13195 12.5057 1.26266 12.4796 1.38452 12.4288C1.50638 12.3781 1.61698 12.3037 1.70994 12.2099L5.99994 7.90994L10.2899 12.2099C10.3829 12.3037 10.4935 12.3781 10.6154 12.4288C10.7372 12.4796 10.8679 12.5057 10.9999 12.5057C11.132 12.5057 11.2627 12.4796 11.3845 12.4288C11.5064 12.3781 11.617 12.3037 11.7099 12.2099C11.8037 12.117 11.8781 12.0064 11.9288 11.8845C11.9796 11.7627 12.0057 11.632 12.0057 11.4999C12.0057 11.3679 11.9796 11.2372 11.9288 11.1154C11.8781 10.9935 11.8037 10.8829 11.7099 10.7899L7.40994 6.49994Z" fill="#1D2939"></path>
          </svg>
        </div>
      </div>

      <div class="mt-8">
        <h4 class="text-lg font-sans1">See results for generated</h4>
        <div class="generated-results mt-4">
          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div
              v-for="(result, index) in generatedImages"
              :key="result.id || index"
              class="relative flex justify-center items-center w-full h-auto bg-[#F2F4F7] px-[17px] py-[28px] rounded-[5px] overflow-hidden group"
            >
              <img :src="result.url" alt="Generated Image" class="object-contain transition-transform duration-300 group-hover:scale-110" />
              <div class="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-end items-start p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div class="w-full h-full mx-auto">
                  <!-- Preview Icon Button -->
                  <div class="top-btn">
                    <button class="w-[24px] h-[24px] bg-white flex rounded-[4px] p-[3px] float-right">
                      <div class="relative w-[16px] h-[16px] flex justify-center items-center">
                        <img src="/assets/Image/img/dot-icon.png" alt="Preview Icon" @click="setIsPreviewMenu" />
                      </div>
                    </button>
                  </div>
                  <!-- Centered Buttons -->
                  <div class="absolute inset-0 flex justify-center items-center font-sans1 space-y-4 mt-[40px]">
                    <div class="flex flex-col items-center space-y-4">
                      <button @click="setOpenPreview" class="w-[112px] h-[30px] bg-transparent border-[1px] border-white rounded-[5px] p-[5px] text-white text-[14px] font-medium transition-all duration-300">
                        Preview
                      </button>
                      <button class="w-[112px] h-[30px] bg-primary-color border-[1px] border-white rounded-[5px] p-[5px] text-white text-[14px] font-medium hover:bg-opacity-90 transition-all duration-300">
                        Open in Editor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    generatedImages: Array,
    openPreview: Boolean,
  },
  methods: {
    closeGeneratedModal() {
      this.$emit('closeGeneratedModal');
    },
    setOpenPreview() {
      this.$emit('setOpenPreview');
    },
  },
};

</script>
