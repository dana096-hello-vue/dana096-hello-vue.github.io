<script setup>
import { ref } from 'vue'

let id = 0
const newTodo = ref('')
const todoes = ref([
	{ id: id++, issue: 'Backlog' }, 
	{ id: id++, issue: 'Todo' },
	{ id: id++, issue: 'Go Hawaii' }
])

function addTodo() {
	console.log('id:', id, ', issue:', newTodo.value);
	todoes.value.push({ id: id++, issue: newTodo.value })
	newTodo.value = ''
}

function removeTodo (todo) {
        console.log(todo)	
        todoes.value = todoes.value.filter((t) => t !== todo)
}
</script>

<template>
	<form @submit.prevent ="addTodo">
		<input v-model="newTodo">
		<button>할 일 추가</button>
	</form>
	<ul>
		<li v-for="todo in todoes">
			{{ todo.issue }} - <button @click="removeTodo(todo)">Done</button>
		</li>
	</ul>
</template>
