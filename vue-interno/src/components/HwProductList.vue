<template>
    <div>
      <div class="sort-buttons">
        <button @click="sortProducts('asc')">Sort by Price: Low to High</button>
        <button @click="sortProducts('desc')">Sort by Price: High to Low</button>
      </div>
      <ul>
        <li v-for="product in sortedProducts" :key="product.name">
          {{ product.name }} - ${{ product.price.toFixed(2) }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  interface Product {
    name: string;
    price: number;
  }
  
  const products = ref<Product[]>([
    { name: 'Product A', price: 29.99 },
    { name: 'Product B', price: 19.99 },
    { name: 'Product C', price: 49.99 },
    { name: 'Product D', price: 9.99 },
  ]);
  
  const sortOrder = ref<'asc' | 'desc'>('asc');
  
  const sortedProducts = computed(() => {
    return [...products.value].sort((a, b) => {
      if (sortOrder.value === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  });
  
  function sortProducts(order: 'asc' | 'desc') {
    sortOrder.value = order;
  }
  </script>
  
  <style scoped>
  .sort-buttons {
    margin-bottom: 1em;
  }
  button {
    margin-right: 1em;
  }
  </style>
  