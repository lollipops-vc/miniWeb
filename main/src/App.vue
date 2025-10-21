
<template>
 <!-- 头部 -->
  <Header />
  <div class="sub_container">
    <Loading v-if="Loading"/>
  <div v-if="!Loading" id="micro-container" class="sub_body">zidingyi </div>
  </div>
  
  <!-- 底部 -->
  <Footer />
</template>
<script>
 import Header from './components/Header.vue'
 import MainNav from './components/MainNav.vue'
 import Footer from './components/Footer.vue'
 import Loading from './components/loading.vue'
import { ref } from 'vue'
 export default {
  name: 'App',
  components: {
    Header,
    MainNav,
    Footer,
    Loading
    },
    setup(){
      const Loading = ref(true)
      setTimeout(() => {
        Loading.value = false
      }, 3000);
      return{
        Loading
      }
    }
  }
</script>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.sub_container{
  min-height: 100%;
  position: relative;
}
#micro-container{
  min-height: 100%;
  width: 100%;
}
.sub_body{
  min-height: 100%;
  width: 100%;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
<style>
html, body, #micro_web_main_app{
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
