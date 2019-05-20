<template>
    <section class="home page">
    <div class="jumbotron text-center">
      <p class="lead">How  accurate can you guess ?</p>
      <hr class="my-2">
      <p class="lead">
        I have selected a random number between 1 and 100.
        <br>
      Can you guess the number ??
        <hr>
      <h3 class="text-danger font-weight-bold"> you have only 10 chances </h3>


      <a class="btn btn-success btn-lg" href="Jumbo action link" role="button"><router-link class="text-white" to="/game">Start Game</router-link></a>
    </div>

  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld

  }
}
</script>
