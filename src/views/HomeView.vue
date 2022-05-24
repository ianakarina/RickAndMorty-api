<template>

    <div class="container mt-5">
      <h1 class="fst-italic text-center mb-5">Personajes Rick & Morty</h1>

      <!-- Grid cards -->
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4">
        
          <!-- <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div> -->

          <!-- Card -->
          <div class="col" v-for="character of characters" :key="character.id">
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
                  params:{id:characterId}
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

      <!-- <div class="row" >
        <div v-for="character of characters" :key="character.id" class="col-sm-12 col-md-4">

          <h2>{{character.name}}</h2> 
          <router-link :to="`/characters/${character.id}`">
            <img :src="character.image" :alt="character.name">
          </router-link>
          <p>{{ character.body }}</p>
          <button class="btn btn-secondary btn-sm me-1"
            @click="() => { personaje(character.id); 
            $router.push({
              name:'Characters',
              params:{id:characterId}
              });}">
              Ver personaje Params
          </button>

          <button class="btn btn-secondary btn-sm"
            @click="() => { 
              $router.push({
              path:`/characters/${character.id}`
              });}"
            >Ver personaje Path
          </button> -->
          <!-- @click="personaje(character.id)"
            :characterPropId="characterId" Esto va comentado-->
          <!-- <hr/>
        </div>
      </div> -->

    </div>
  
</template>

<script>
// @ is an alias to /src
//import { defineAsyncComponent } from 'vue';

export default {
  name: 'HomeView',
  components: {
    //Layout: defineAsyncComponent(() => import(/* webpackChunkName: "Layout" */ "@/layout/Layout.vue")),
  },
  data() {
    return {
      characters: [],
      charactersid: [],
      characterId: 0
    }
  },
  methods: {
    personaje(id) {
      console.log(id); //id del post pasado como parámetro desde las iteraciones en el template
      //Filter trabaja como un iterador. Vamos a filtrar los characters y obtener un array con los ids de comentarios
      // this.comentariosFiltrados = this.comentarios.filter( comentario = console.log(comentario))
      //this.charactersid = this.characters.filter( character => character.id == id);
      this.characterId= id;
      console.log(this.characterId);

    },
    async consumirCharacter() {
      try {
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const getcharacter = await data.json();
        this.characters = getcharacter.results;
        //console.log(this.characters)
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  created() {
    this.consumirCharacter();
  }
}
</script>

<style scope>
h3 {
  font-size: 16px !important;
}
</style>
