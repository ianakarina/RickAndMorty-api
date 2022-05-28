<template>

    <div class="container mt-5">
      <h1 class="text-center mb-5">Personajes Rick & Morty</h1>

      <!-- Grid cards -->
      <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-4 mt-2">

          <!-- Card -->
          <div class="col" v-for="character of getCharacters" :key="character.id">
            <div class="card text-white bg-dark h-100">
              <router-link :to="`/characters/${character.id}`">
                <img :src="character.image" :alt="character.name" class="card-img-top">
              </router-link>

              <div class="card-body">
                <h2 class="card-title">{{character.name}}</h2>

                <!-- Badges -->
                <div class="status d-flex" role="group" aria-label="Character Status">
                  <base-status :class="
                    character.status == 'Alive'? 'alive' :
                    character.status == 'Dead'? 'dead' :
                    'default'">
                  </base-status>

                  <base-badge>{{character.status}}</base-badge>
                  <base-badge>{{character.species}}</base-badge>
                </div>
              </div>

              <div class="card-footer">
                <!-- Router push with params -->
                <base-button
                  @click="() => { personaje(character.id); 
                  $router.push({
                    name:'Characters',
                    params:{id:character.id}
                    });}">
                    Ver personaje
                </base-button>
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
  computed: {
  getCharacters() {
    return this.$store.getters.getCharacters
  }
  },
  methods: {
    personaje(id) {
      this.$store.commit('setCurrentCharacter', {id});//id del post pasado como parámetro desde las iteraciones en el template
    }
  },
  created() {
    this.$store.dispatch('consumirCharacter');
  }
}
</script>

<style>
  .alive {
    background-color: LimeGreen;
  }
  .dead {
    background-color: orangered;
  }
  .default {
    background-color: lightgray;
  }
</style>
