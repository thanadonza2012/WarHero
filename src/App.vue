<template>
  <div id="app">
    

          <CsBotton />

        </div>

</template>

<script>

import CsBotton from "./components/Csbotton";

export default {
  name: "App",
  components: {

    CsBotton,

    
  },
    };
</script>

<style>
#app {
  background-image: url(https://i.imgur.com/bRDBDia.gif);
 height: 100%;
 width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #23ff23;
  margin: auto;
}
</style>