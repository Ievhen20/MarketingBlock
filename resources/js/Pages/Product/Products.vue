<script setup>

import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import SideBar from '@/Components/SideBar.vue';
import { useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import DangerButton from '@/Components/DangerButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import NumericInput from '@/Components/NumbericInput.vue';

const props = defineProps({
  products: Array,
})

const products = ref(props.products);
const form = useForm({
  name: '',
  company: '',
  price: '',
  amount: '',
  id: null,
});

const onSubmit = async () => {
  try {
    if (form.id) {
      // Update an existing product
      await form.post(route('products.update', form.id), {
        onSuccess: (response) => {
          products.value = response.props.products;
          resetForm();
        },
      });
    } else {
      // Create a new product
      await form.post(route('products.store'), {
        onSuccess: (response) => {
          products.value = response.props.products;
          resetForm();
        },
      });
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

const editProduct = (product) => {
  form.name = product.name;
  form.company = product.company;
  form.price = product.price;
  form.amount = product.amount;
  form.id = product.id;
};

const removeProduct = async (id) => {
  if (confirm('Are you sure you want to delete this product?')) {
    try {
      await axios.delete(route('products.destroy', id));
      products.value = products.value.filter((product) => product.id !== id);  // Remove product from table
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }
};

const resetForm = () => {
  form.reset();
};

</script>

<template>

  <Head title="AIDesign" />
  <div class="relative">
    <AuthenticatedLayout>
      <div class="w-full pt-[24px] px-[24px]">
        <div class="w-full flex gap-2 flex-col lg:flex-row">
          <SideBar />
          <div class="w-full flex flex-row]">
            <div
              class="w-full px-[21px] py-[23px] min-w-[310px] min-h-[85vh] max-h-[85vh] rounded-[15px] bg-[#FFFFFF] overflow-y-auto z-10 custom-scrollbar">
              <h3>Product Management</h3>
              <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <!-- Form for Adding/Editing Products -->
                  <div class="bg-white p-6 shadow rounded-lg">
                    <form @submit.prevent="onSubmit">
                      <div>
                        <InputLabel for="name" value="Product Name" />
                        <TextInput id="name" v-model="form.name" class="mt-1 block w-full" required />
                        <InputError :message="form.errors.name" class="mt-2" />
                      </div>

                      <div class="mt-4">
                        <InputLabel for="company" value="company" />
                        <TextInput id="company" v-model="form.company" class="mt-1 block w-full" required />
                        <InputError :message="form.errors.company" class="mt-2" />
                      </div>

                      <div class="mt-4">
                        <InputLabel for="price" value="Price" />
                        <NumericInput id="price" v-model="form.price" class="mt-1 block w-full" required />
                        <InputError :message="form.errors.price" class="mt-2" />
                      </div>

                      <div class="mt-4">
                        <InputLabel for="amount" value="Amount" />
                        <NumericInput id="amount" v-model="form.amount" class="mt-1 block w-full" required />
                        <InputError :message="form.errors.amount" class="mt-2" />
                      </div>

                      <div class="mt-4 flex justify-end">
                        <PrimaryButton :disabled="form.processing">{{ form.id ? 'Update' : 'Create' }}</PrimaryButton>
                      </div>
                    </form>
                  </div>

                  <!-- Product List -->
                  <div class="bg-white p-6 shadow rounded-lg mt-6">
                    <table class="w-full border border-gray-200">
                      <thead>
                        <tr class="bg-gray-100">
                          <th class="px-4 py-2">#</th>
                          <th class="px-4 py-2">Name</th>
                          <th class="px-4 py-2">Company</th>
                          <th class="px-4 py-2">Price</th>
                          <th class="px-4 py-2">Amount</th>
                          <th class="px-4 py-2">Action</th>
                        </tr>
                      </thead>
                      <tbody class="text-center">
                        <template v-if="Array.isArray(products) && products.length > 0">
                          <tr v-for="(product, index) in products" :key="product.id">
                            <td class="border px-4 py-2">{{ index + 1 }}</td>
                            <td class="border px-4 py-2">{{ product.name }}</td>
                            <td class="border px-4 py-2">{{ product.company }}</td>
                            <td class="border px-4 py-2">{{ product.price }}</td>
                            <td class="border px-4 py-2">{{ product.amount }}</td>
                            <td class="flex gap-[6px] border px-4 py-2">
                              <PrimaryButton @click="editProduct(product)" class="bg-green-500">Edit</PrimaryButton>
                              <DangerButton @click="removeProduct(product.id)">Delete</DangerButton>
                            </td>
                          </tr>
                        </template>
                        <tr v-else>
                          <td class="border px-4 py-2 text-center" :colspan="6">No Products Available</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  </div>

</template>
