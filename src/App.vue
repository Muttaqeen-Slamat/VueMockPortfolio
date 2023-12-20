<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/resume">Resume</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonials">Testimonials</router-link> |
    <router-link to="/contact">Contact</router-link> |
  </nav> -->

  <main class="container-fluid">
    <NavBar/>
    <Footer/>
    <router-view/>
  </main>
  

</template>

<script >
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default{
    component: {
        NavBar,
        Footer
    },
    components: { NavBar }
}
</script>

<style src="@/assets/style.css">

</style>
