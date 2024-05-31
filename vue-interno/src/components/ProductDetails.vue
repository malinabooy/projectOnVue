<template>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <p>{{ formattedPrice }}</p>
      <p>{{ availabilityStatus }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetails',
    data() {
      return {
        product: {
          name: 'Sample Product',
          price: 99.99,
          available: true
        }
      };
    },
    computed: {
      formattedPrice() {
        return `$${this.product.price.toFixed(2)}`;
      },
      availabilityStatus() {
        return this.product.available ? 'Available' : 'Out of stock';
      }
    }
  };
  </script>
  
  <style scoped>
  .product-details {
    text-align: center;
    margin: 20px;
  }
  </style>