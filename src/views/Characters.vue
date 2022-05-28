<template>   
    <div class="d-flex flex-md-row flex-column p-2 bg-dark">

      <!--Left Image column-->
      <div class="p-2"><img :src="character.image" alt=""></div>
      
      <!--Right column-->
      <div class="p-2">
          <div class="d-flex flex-row mb-3">
              <h1> {{ character.name}} </h1>
          </div>

          <!-- Badges -->
          <div class="status d-flex flex-row mb-3" role="group" aria-label="Character Status">
            <base-status :class="
              character.status == 'Alive'? 'alive' :
              character.status == 'Dead'? 'dead' :
              'default'">
            </base-status>

            <base-badge>{{character.status}}</base-badge>
            <base-badge>{{character.species}}</base-badge>
          </div>

          <div class="d-flex flex-row mb-3">
              <div class="p-1 fw-bold">Género:</div>
              <div class="p-1">{{ character.gender}}</div>
          </div>

          <div class="d-flex flex-row mb-3">
              <div class="p-1 fw-bold">Origen:</div>
              <!-- <div class="p-2"><router-link :to="`${character.origin.url}`">{{ character.origin.name}}</router-link></div> -->
              <!--<div class="p-2"><a :href="`${character.origin.url}`">{{ character.origin.name}}</a></div>-->
              <div class="p-1">{{ character.origin?.name}}</div>
          </div>

          <div class="d-flex flex-row mb-3">
              <div class="p-1 fw-bold">Lugar:</div>
              <div class="p-1">{{ character.location?.name}}</div>
          </div>
      </div>
    </div>

    <!-- Panel de episodios -->
    <div class="accordion my-3" id="episodesPanel">
      <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <div class="d-flex flex-row">
                  <div>Aparece en <strong>{{character.episode?.length}}</strong> episodios</div>
                </div>
            </button>
          </h2>

          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#episodesPanel">
            <div class="accordion-body">
              <div class="row p-2" v-for="episode in character.episode" :key="episode">{{ episode }}
              </div>
            </div>
          </div>
      </div>

      
    </div>

    <base-button @click="$router.go(-1)">Volver</base-button>
</template>

<script>

 export default {
   name: 'Characters',
   computed: {
    character() {
      return this.$store.getters.getCurrentCharacter
    }
   },
   methods: {
   },
   created() {
     const routeId= this.$route.params.id;
     this.$store.dispatch('getCharacterPorId', routeId);
   }
 }
</script>

<style>

</style>