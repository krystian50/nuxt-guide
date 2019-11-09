<template>
  <article class="container my-12 mx-auto">
    <ul class="flex flex-row">
      <li>
        <nuxt-link v-for="{ id, name } in products" :key="id" no-prefetch class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2" :to="`/products/${id}`">
          {{ name }}
        </nuxt-link>
      </li>
    </ul>
  </article>
</template>

<script>
import ProductsRepository from '~/repositories/ProductsRepository'

export default {
  name: 'Homepage',

  async asyncData () {
    return {
      products: await ProductsRepository.get()
    }
  }
}
</script>
