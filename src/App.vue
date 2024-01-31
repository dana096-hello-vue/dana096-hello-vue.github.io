<script setup>
import { ref } from 'vue'
import category from "@/assets/movie.json"
const categories = ref(category)
</script>

<template>
<h1 style="margin-bottom: 30px;">영화 목록</h1>
  <ul>
    <li v-for="movie in categories" class="movie-item">
      <div>
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
          <li v-for="festival in movie.Festivals" v-text="festival"></li>
	</ul>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.movie-item {
  margin-bottom: 30px;
}
</style>
