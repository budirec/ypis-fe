<template>
  <div>
    <h1>This is an about page</h1>
    <br />
    <button @click="itemStore.createItem(item)">Create new random item</button>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br /><br /><br />vvv ascas asvas
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />v
    <br /><br /><br /><br /><br /><br /><br />vvvasdasd<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />vvvv
    ascasv<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useItemStore } from '@/stores/item';

const loading = ref(true);
const item = {
  item_name: "testAbout" + Math.random(),
  unit_price: Math.random() * 1000,
  stock_quantity: Math.ceil(Math.random() * 10),
};

const itemStore = useItemStore();
</script>