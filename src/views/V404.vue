<template>
    <div class="NotFound">
        <v-container>
            <v-layout row wrap>
                <v-card height="400" color="transparent" flat>
                    <div class="display-3 mt-5">Page not found.</div>
                    <div class="grey--text lighten-5">
                    The page you requested does not exist.
                    </div>
                    <div class="mt-2">
                        <v-btn color="primary" dark>
                            <router-link :to="{name:'home'}" class="tex-decoration-none font-weight-bold"> Home </router-link> 
                        </v-btn>
                    </div>
                </v-card>
            </v-layout>
        </v-container>
    </div>
</template>
<style>
 .tex-decoration-none {
    text-decoration: none;
    color: #fff;
 }
</style>

<script setup>
</script>