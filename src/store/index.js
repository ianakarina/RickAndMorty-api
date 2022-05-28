import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    character: {}
  },
  mutations: {
    setCharacters (state, payload) {
      state.characters = payload;
      //console.log(state.characters)
    },
    setCurrentCharacter (state, payload) {
      state.character = payload;
      //console.log('setCurrentCharacter')
      //console.log(state.character)
    },
  },
  actions: {
    // async consumirCharacter(context) {
    //   try {
    //     const data = await fetch('https://rickandmortyapi.com/api/character');
    //     const getcharacter = await data.json();
    //     const characters = getcharacter.results;
    //     //console.log (characters)
    //     context.commit('setCharacters', characters)

    //   } catch (error) {
    //     console.log(error);
    //     throw error;
    //   }
    // },

    //Obtener characters
    async consumirCharacter(context) {
      try {
        const response = await fetch('api.json');
        const data = await response.json();
        context.commit('setCharacters', data)
      } catch (error) {
        throw error;
      }
    },
    // async getCharacterPorId(context, payload) {
    //   try {
    //     const data = await fetch(`https://rickandmortyapi.com/api/character/${payload}`);
    //     const getCharacterid = await data.json();
    //     context.commit('setCurrentCharacter', getCharacterid)
      
    //   } catch (error) {
    //     console.log(error);
    //     throw error;
    //   }
    //  }

    //Obtener character por Id
    async getCharacterPorId(context, payload) { 
      try {
        const response = await fetch('../api.json');
        const data = await response.json();
        //Filtramos la data y obtenemos un array
        const character = data.filter( character => character.id == payload);
        //Rescato el único objeto
        const getCharacterid = character[0];
        //console.log(getCharacterid);
        context.commit('setCurrentCharacter', getCharacterid)
      
      } catch (error) {
        console.log(error);
        throw error;
      }
     }
  },
  getters: {
    //Equivalente a Computed Properties
    getCharacters(state) {
      return state.characters;
    },
    getCurrentCharacter(state) {
      return state.character;
    }
  },
  modules: {
  }
})
