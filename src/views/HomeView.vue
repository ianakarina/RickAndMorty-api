<template>

    <div class="container mt-5">
      <h1 class="fst-italic text-center mb-5">Personajes Rick & Morty</h1>

      <!-- Grid cards -->
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">

          <!-- Card -->
          <div class="col" v-for="character of getCharacters" :key="character.id">
          <div  class="card h-100"><!--style="width: 18rem;"-->
            <router-link :to="`/characters/${character.id}`">
              <img :src="character.image" :alt="character.name" class="card-img-top">
            </router-link>
            <!-- <router-link :to="`/characters/${character.id}`">Personaje</router-link> -->
            <div class="card-body">
              <h2 class="card-title">{{character.name}}</h2>
              <p class="card-text">{{ character.body }}</p>
              <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->

              <button class="btn btn-secondary btn-sm me-1 mb-1"
                @click="() => { personaje(character.id); 
                $router.push({
                  name:'Characters',
                  params:{id:character.id}
                  });}">
                  Ver personaje Params
              </button>

              <button class="btn btn-secondary btn-sm mb-1"
                @click="() => { 
                  $router.push({
                  path:`/characters/${character.id}`
                  });}"
                >Ver personaje Path
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      // characters: [],
      // charactersid: [],
      // characterId: 0
    }
  },
  computed: {
  getCharacters() {
    return this.$store.getters.getCharacters
  }
  },
  methods: {
    personaje(id) {
      this.$store.commit('setCharacterId', {id});//id del post pasado como parámetro desde las iteraciones en el template
    }
  },
  created() {
    this.$store.dispatch('consumirCharacter');
    //this.consumirCharacter();
  }
}
</script>

<style scope>
h3 {
  font-size: 16px !important;
}
</style>
