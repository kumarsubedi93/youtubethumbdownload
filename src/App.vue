<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
 
<template>
  <v-app light>
    <v-main class="fix-width-1200">
        <div class="nav mb-2">
            <input type="checkbox" id="nav-check">
            <div class="nav-header">
              <div class="nav-title font-weight-bold">
                <h1 class="font-25">  Youtube Thumbnail Download </h1> 
              </div>
            </div>
            <div class="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div class="nav-links">
              <router-link for="m-link" :to="{name:'home'}"> Home  </router-link>
              <router-link for="m-link" :to="{name:'privacy-policy'}">Privacy Policy </router-link>
            </div>
          </div>
          <div class="router-wraper">
            <RouterView />
            <v-footer class="pa-0 mt-2">
            <div class="px-4 py-2 bg-primary text-center w-100">
              {{ new Date().getFullYear() }} — <strong><a class="link-y" href="https://youtubethumbdownload.com"> https://youtubethumbdownload.com </a></strong>
            </div>
          </v-footer>
          </div>
      </v-main>
  </v-app>
</template>

<style scoped>
  .link-y{
    color:#fff
  }
  .font-25 {
    font-size: 25px;
  }
  @media only screen and (max-width:386px) {
    .nav {
      height: 86px;;
    }
  }
</style>
