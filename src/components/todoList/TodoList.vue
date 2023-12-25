<template>
  <div>
    <todo-item v-for="item in data" :key="item.id" :data="item"/>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';
defineProps(['data']);
</script>

<style>

</style>