<template>
  <section class="home page bg-dark">
    <div class="jumbotron">
      <h1 class="display-3">Welcome home</h1>
      <p class="lead">This page is a home page</p>
      <hr class="my-2">
      <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium blanditiis deleniti
        distinctio ea esse eum facilis illum iste iure natus nemo omnis placeat, provident quasi quia quibusdam
        quod rem repudiandae rerum sed sit suscipit tenetur ut velit? Accusamus assumenda aut et hic incidunt
        labore, quod repellat sed sunt velit!
      </p>
      <a class="btn btn-danger btn-lg" href="Jumbo action link" role="button">A lot About me</a>
    </div>
    <div>
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        With Bootstrap!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>

  </section>

</template>

<style>
  p{
    background-color: yellow;
  }
</style>


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
