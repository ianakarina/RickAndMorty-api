import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    //charactersid: [],
    characterId: 0,
    character: {}
  },
  mutations: {
    setCharacterId (state, payload) {
      state.characterId= payload;
      console.log(state.characterId);
      //Filter trabaja como un iterador. Vamos a filtrar los characters y obtener un array con los ids de comentarios
      // this.comentariosFiltrados = this.comentarios.filter( comentario = console.log(comentario))
      //this.charactersid = this.characters.filter( character => character.id == id);
    },
    setCharacters (state, payload) {
      state.characters = payload;
      //console.log(state.characters)
    },
    setCurrentCharacter (state, payload) {
      state.character = payload;
      //console.log(state.character.origin.name)
    },
  },
  actions: {
    async consumirCharacter(context) {
      try {
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const getcharacter = await data.json();
        const characters = getcharacter.results;
        //console.log (characters)
        context.commit('setCharacters', characters)

      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    async getCharacterPorId(context, payload) {
      
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/${payload}`);
        const getCharacterid = await data.json();
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
