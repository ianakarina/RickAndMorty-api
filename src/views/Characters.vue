<template>
    <h1> {{ character.name}} </h1>
    <div class="d-flex flex-md-row flex-column bg-light shadow p-3 mb-5 bg-body rounded mb-3">
      <div class="p-2"><img :src="character.image" alt=""></div>
      <div class="p-2">
          <div class="d-flex flex-row mb-3">
              <div class="p-2">Estado:</div>
              <div class="p-2">{{ character.status}}</div>
          </div>

          <div class="d-flex flex-row mb-3">
              <div class="p-2">Especie:</div>
              <div class="p-2">{{ character.species}}</div>
          </div>

          <div class="d-flex flex-row mb-3">
              <div class="p-2">Género:</div>
              <div class="p-2">{{ character.gender}}</div>
          </div>

          <div class="d-flex flex-row mb-3">
              <div class="p-2">Origen:</div>
              <!-- <div class="p-2"><router-link :to="`${character.origin.url}`">{{ character.origin.name}}</router-link></div> -->
              <!--<div class="p-2"><a :href="`${character.origin.url}`">{{ character.origin.name}}</a></div>-->
              <div class="p-2">{{ character.origin.name}}</div>
          </div>

          <div class="d-flex flex-row mb-3">
              <div class="p-2">Episodios:</div>
              <!-- {{character.episode}} -->
              <div class="p-2">{{character.episode.length}}</div>
              <!-- {{Object.keys(`${ character.episode}`).length}} Esto no sé qué hace-->
          </div>
      </div>
    </div>


    

    <button class="btn btn-secondary btn-sm mt-1"
          @click="$router.go(-1)"
          >Volver
        </button>
</template>

<script>
//import { defineAsyncComponent } from 'vue';
//import Layout from '@/layout/Layout.vue';

 export default {
  name: 'Characters',
  components: {
    //Layout
    //Layout: defineAsyncComponent(() => import(/* webpackChunkName: "Layout" */ "@/layout/Layout.vue")),
  },
   data() {
     return {
       character: {},
       //props: ['characterPropId'],
       //id: null
     }
   },
   methods: {
     async getCharacterPorId() {
      try {
        //const data = await fetch(`https://rickandmortyapi.com/api/character/${this.id}`);
        const data = await fetch(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
        const getCharacterid = await data.json();
        this.character = getCharacterid;
        //console.log(this.character);
        console.log(this.character.origin.name)
      
      } catch (error) {
        console.log(error);
        throw error;
      }
     }
   },
   created() {
     //this.id=this.$route.params.id;
     this. getCharacterPorId();

       //Si se llega por ruta
      // if (this.id!=null) {
      //   console.log('Id ruta es: ' + this.id);
      //   this.getCharacterPorId();

      // } else {//Si se usa como componente, primero encuentro producto y luego rescato id de BD
      //   this.id=this.characterPropId;
      //   console.log('Id prop es: ' + this.id);
      //   this.getCharacterPorId();
      // }

   }
 }
</script>

<style>

</style>