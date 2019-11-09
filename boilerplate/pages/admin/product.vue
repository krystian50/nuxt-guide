<template>
  <form @submit.prevent="saveProduct()">
    <input v-model="product.name" class="dib" type="text" placeholder="name">
    <input v-model="product.pictureUrl" class="dib" type="text" placeholder="url">
    <div id="editor">
      <textarea :value="product.description" @input="update" />
      <div v-html="compiledMarkdown" />
    </div>

    <button type="submit">
      Add product
    </button>
  </form>
</template>
<script>
import marked from 'marked'

export default {
  data: () => ({
    product: {
      name: '',
      description: '',
      pictureUrl: ''
    }
  }),
  computed: {
    compiledMarkdown () {
      return marked(this.product.description)
    }
  },
  methods: {
    update (e) {
      this.product.description = e.target.value
    },

    saveProduct () {
      console.log(this.product)

      this.$axios.post('/api/products', this.product)
    }
  }
}
</script>
<style lang="css" scoped>
.db {
  display: block;
}

#editor {
  height: 100vh;
  margin: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
