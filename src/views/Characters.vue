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
       //character: {}
     }
   },
   computed: {
    character() {
      return this.$store.getters.getCurrentCharacter
    }
   },
   methods: {
   },
   created() {
     //this. getCharacterPorId();
     const routeId= this.$route.params.id;
     this.$store.dispatch('getCharacterPorId', routeId);
   }
 }
</script>

<style>

</style>