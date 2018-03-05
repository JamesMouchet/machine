<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <button v-on:click='onMachinesListClick' class="button">Consulter la liste des machines</button> <button v-on:click='onMapClick' class="button">Voir la carte</button>
    <machineslist></machineslist>
    <mapmachine></mapmachine>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onMachinesListClick: function () {
      alert('Liste des machines')
    },
    onMapClick: function () {
      alert(' carte')
    }
  }
}
</script>

<style scoped>
.button {
background:    #41b883;
background:    -webkit-linear-gradient(#41b883, #41b883);
background:    linear-gradient(#41b883, #41b883);
border-radius: 5px;
padding:       8px 20px;
color:         #ffffff;
display:       inline-block;
font:          normal 600 24px/1 "Open Sans", sans-serif;
text-align:    center;
text-shadow:   1px 1px #ffffff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  color: #35495E;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
