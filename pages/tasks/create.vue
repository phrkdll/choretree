<script setup lang="ts">
const title = ref("")

async function onSubmit() {
	await $fetch("/api/tasks", { method: "post", body: { title: title.value } })
}
</script>

<template>
	<div>
		<h1>Create new task</h1>
		<form @submit.prevent="onSubmit">
			<input v-model="title" type="text" name="title" class="input">
			<button class="btn btn-primary">
				Create
			</button>
		</form>
	</div>
</template>
