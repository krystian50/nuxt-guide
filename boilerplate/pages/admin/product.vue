<template>
  <div id="editor">
    <textarea :value="input" @input="update" />
    <div v-html="compiledMarkdown" />
  </div>
</template>
<script>
import marked from 'marked'

export default {
  data: () => ({
    input: '# hello'
  }),
  computed: {
    compiledMarkdown () {
      return marked(this.input)
    }
  },
  methods: {
    update (e) {
      this.input = e.target.value
    }
  }
}
</script>
<style lang="css" scoped>
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
