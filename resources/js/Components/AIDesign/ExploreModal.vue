<template>
  <div class="modal-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
    <div class="modal-content bg-white p-4 rounded-lg w-[90%] max-w-md">
      <div class="flex justify-between gap-[19px]">
        <img :src="exploreIdea.url" alt="Explore Idea" class="w-1/2" />
        <p class="w-[241px] font-sans1 text-[14px] text-[#1D2939] font-[400]">{{ exploreIdea.description }}</p>
      </div>
      <div class="w-full border-b-[1px] border-b-[#E4E7EC] mt-[10px] mb-[15px]"></div>
      <div class="text-right px-[20px]">
        <button class="text-[15px] font-sans1 text-[#6245E7] font-[700]" @click="tryOut">Try out</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    exploreIdea: Object,
  },
  methods: {
    tryOut() {
      this.$emit('set-title', this.exploreIdea.description);
      this.closeModal();
    },
    closeModal() {
      this.$emit('close-modal');
    },
  },
};

</script>
