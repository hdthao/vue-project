<template>
  <div>
    <Toast />
    <div class="content">
      <span>{{ props.data.title }}</span>
      <div class="content-btn">
        <i class="pi pi-pencil" @click="editTodo"></i>
        <i class="pi pi-times" @click="removeTodo(props.data)"></i>
      </div>
    </div>
    <div v-if="isEdit">
      <InputText type="text" v-model="value"/>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useToast } from 'primevue/usetoast';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import { ref } from 'vue';

const value = ref('');
const isEdit = ref(false);
const toast = useToast();
const store = useStore();
const props = defineProps(['data']);
const removeTodo = async (data) => {
  await store.dispatch('deleteTodo', data.id);
  toast.add({ severity: 'info', summary: 'Deleted', detail: 'Message Content', life: 3000 });
};

const editTodo = () => {
  isEdit.value = !isEdit.value;
};
</script>

<style scroped>
.content {
  color: #000000ab;
  display: flex;
  justify-content: space-between;
  padding: 6px 10px;
  background: #ffffff;
  margin: 10px 0;
  border-radius: 5px;
}

.content-btn > i {
  margin: 0 5px;
  cursor: pointer;
  padding: 3px;
  border-radius: 2px;
}
i.pi-pencil {
  background: #ffbe00;
}
i.pi-times {
  background: #ff0000c7;
  color: #ffff;
}
</style>