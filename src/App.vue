<script setup>
import { ref } from 'vue'
import category from "@/assets/category.json"
const categories = ref(category)
</script>

<template>
<ul>
<li v-for="(item) in categories">
	name : {{ item.name }} <br>
	code : {{ item.code }}	
</li>
</ul>
</template>
