<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Rick & Morty</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Personajes</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/about">about</router-link>
          </li> -->
        </ul>

      </div>

    </div>

  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  box-shadow: 0 0px 10px 0 rgba(0,0,0,0.4);
}

.navbar li a.router-link-exact-active {
  color: rgb(250,250,250) !important;
}

</style>