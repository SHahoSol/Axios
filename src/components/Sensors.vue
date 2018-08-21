<template lang="html">
  <div class="hello">
    <input type="file" @change="onFileSelected">
    <button @click="onUpload">Upload</button>
  </div>

</template>

<script>
export default {
  name: 'Sensors',
  data() {
    return {
      selectedFile: null
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {

    }
  }
}
</script>

<style lang="css">
</style>
