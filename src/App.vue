<template>
  <div>
    <todo-input/>
    <todo-list :data="data"/>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import TodoInput from './components/todoList/TodoInput.vue';
import TodoList from './components/todoList/TodoList.vue';

const store = useStore();
const data = computed(() => store.state.data);
onMounted(() => {
  store.dispatch('fetchData');
});
</script>

<style scoped>

</style>
