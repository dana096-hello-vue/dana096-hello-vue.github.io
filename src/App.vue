<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1, 2, 3])

function rendering() {
	show.value = !show.value
}

function addList() {
	list.value.push(list.value.length + 1)
}

function removeList() {
	list.value.pop()
}

function reverse() {
	list.value.reverse()
}
</script>

<template>
<button @click="rendering()">List 렌더링 ON/OFF </button>
<button @click="addList()">List 추가</button>
<button @click="removeList()">List 제거</button>
<button @click="reverse()">List 뒤집기</button>

<ul v-if="show && list.length">
	<li v-for="item of list">{{ item }}</li>
</ul>
<p v-else-if="list.length">List is not empty, but hidden.</p>
<p v-else>List is emtpy.</p>
</template>
