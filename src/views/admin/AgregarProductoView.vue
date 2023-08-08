<script setup>
import Link from "../../components/Link.vue";
</script>

<template>
  <Link to="productos"> Volver </Link>
  <h1 class="text-4xl font-black my-10">Nuevo Producto</h1>

  <div class="flex justify-center bg-white shadow">
    <div class="w-full mt-10 p-10 2xl:w-2/4">
      <FormKit type="form" submit-label="Agregar Producto">
        <FormKit
          type="text"
          label="Nombre"
          name="name"
          placeholder="Nombre Producto"
          validation="required"
          :validation-messages="{required: 'El Nombre es Obligatorio'}"
        />
        <FormKit
          type="file"
          label="Imagen Producto"
          name="image"
          validation="required"
          :validation-messages="{required: 'La Imagen es Obligatoria'}"
          accept=".jpg"
        />
        <FormKit
          type="select"
          label="Categoria"
          name="category"
          validation="required"
          :validation-messages="{required: 'La Categoria es Obligatoria'}"
          :options="[1,2,3]"
        />
        <FormKit
          type="number"
          label="Precio"
          name="price"
          placeholder="Precio del Producto"
          validation="required"
          :validation-messages="{required: 'El Precio es Obligatorio'}"
          min="1"
        />
        <FormKit
          type="number"
          label="Disponibles"
          name="available"
          placeholder="Cantidad Disponible"
          validation="required"
          :validation-messages="{required: 'La Cantidad es Obligatoria'}"
          min="1"
        />
      </FormKit>
    </div>
  </div>
</template>
