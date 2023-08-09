<script setup>
import { reactive } from "vue";
import Link from "../../components/Link.vue";
import useImage from "../../composables/useImage";
import { useProductsStore } from "../../stores/useProducts";
import {useRouter} from 'vue-router'

const { onFileChange, url, isUploaded } = useImage();
const products = useProductsStore();
const router = useRouter();

const formData = reactive({
  name: "",
  price: "",
  image: "",
  category: "",
  available: "",
});
const submit = async (data) => {
  const { image, ...values } = data;

  const producto = {
    image: url.value,
    ...values,
  };

  try {
    await products.createProduct(producto);
    router.push({name: 'productos'})
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <Link to="productos"> Volver </Link>
  <h1 class="text-4xl font-black my-10">Nuevo Producto</h1>

  <div class="flex justify-center bg-white shadow">
    <div class="w-full mt-10 p-10 2xl:w-2/4">
      <FormKit
        type="form"
        submit-label="Agregar Producto"
        :actions="false"
        incomplete-message="Revisa las Validaciones"
        @submit="submit"
        :value="formData"
      >
        <FormKit
          type="text"
          label="Nombre"
          name="name"
          placeholder="Nombre Producto"
          validation="required"
          :validation-messages="{ required: 'El Nombre es Obligatorio' }"
          v-model.trim="formData.name"
        />
        <FormKit
          type="file"
          label="Imagen Producto"
          name="image"
          validation="required"
          :validation-messages="{ required: 'La Imagen es Obligatoria' }"
          accept=".jpg"
          @change="onFileChange"
          v-model.trim="formData.image"
        />
        <div v-if="isUploaded">
          <img :src="url" alt="Imagen Producto" />
        </div>
        <FormKit
          type="select"
          label="Categoria"
          name="category"
          validation="required"
          :validation-messages="{ required: 'La Categoria es Obligatoria' }"
          :options="products.categoryOptions"
          v-model.number="formData.category"
        />
        <FormKit
          type="number"
          label="Precio"
          name="price"
          placeholder="Precio del Producto"
          validation="required"
          :validation-messages="{ required: 'El Precio es Obligatorio' }"
          min="1"
          v-model.number="formData.price"
        />
        <FormKit
          type="number"
          label="Disponibles"
          name="available"
          placeholder="Cantidad Disponible"
          validation="required"
          :validation-messages="{ required: 'La Cantidad es Obligatoria' }"
          min="1"
          v-model.number="formData.available"
        />
        <FormKit type="submit" label="Agregar Producto" name="add" />
      </FormKit>
    </div>
  </div>
</template>
