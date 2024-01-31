<script setup>
import { ref } from 'vue'
import category from "@/assets/movie.json"
const categories = ref(category)
const keyword = ref(2014)
</script>

<template>
  <div>
    <ul>
      <h1 style="margin-bottom: 30px;">2014년 영화 목록</h1>
      <li v-for="movie in categories" class="movie-item">
        <div v-if="movie.Year =  2014">
          <strong style="font-weight: bold;">Title:</strong> {{ movie.Title }} <br>
          <strong style="font-weight: bold;">Runtime:</strong> {{ movie.Runtime }} <br>
          <strong style="font-weight: bold;">Director:</strong> {{ movie.Director }} <br>
          <strong style="font-weight: bold;">Year:</strong> {{ movie.Year }} <br>
          <strong style="font-weight: bold;">Actors:</strong>
          <ul>
            <li v-for="actor in movie.Actors">
              {{ actor.name }} - {{ actor.nationality }}
            </li>
          </ul>
          <strong style="font-weight: bold;">Poster:</strong> {{ movie.Poster }} <br>
          <strong style="font-weight: bold;">Festivals:</strong>
          <ul>
            <li v-for="festival in movie.Festivals" v-html="festival"></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.movie-item {
  margin-bottom: 30px;
}
</style>

