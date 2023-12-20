import { createStore } from 'vuex'
let dataUrl = 'https://muttaqeen-slamat.github.io/VueMockData/data/'
export default createStore({
  state: {
    about: null,
    education: null,
    skills: null,
    testimonials: null,
    projects: null
  },
  getters: {
  },
  mutations: {
    setAbout(state,value){
      state.about = value
    },
    setEducation(state,value){
      state.education = value
    },
    setSkills(state,value){
      state.skills = value
    },
    setTestimonilas(state,value){
      state.testimonials = value
    },
    setProjects(state,value){
      state.projects = value
    }
  },
  actions: {
    async fetchAbout(context){
      let res = await fetch(dataUrl)
      let {about} = await res.json()
      context.commit('setAbout', about)
    }
  },
  modules: {
  }
})
