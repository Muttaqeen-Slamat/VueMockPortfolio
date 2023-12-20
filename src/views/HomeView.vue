<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Home</h2>

    </div>
    <div class="row" v-if="about">

    </div>

  </div>
</template>

<script>
// @ is an alias to /src


export default {
  computed: {
    about(){
      return this.$store.state.about
    }
  },
  mounted(){
    this.$store.dispatch('fetchAbout')
  }
}
</script>
