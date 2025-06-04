<script setup>
import { computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('en-In', {
    style: "currency",
    currency: "INR",
  }).format(props.product.price);
});
</script>


<template>
  <div class="product-card">
    <div class="image-wrapper">
      <img
        :src="product.image"
        :alt="product.name"
        class="product-image"
      />
      <div class="category-badge">
        <span>{{ product.category }}</span>
      </div>
    </div>
    <div class="card-content">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <div class="card-footer">
        <span class="price">{{ formattedPrice }}</span>
        <router-link
          :to="`/products/${product.id}`"
          class="view-button"
        >View Details</router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: auto;
  
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}


.image-wrapper {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.product-card:hover .product-image {
  transform: scale(1.05);
}

.category-badge {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 6px 10px;
  background: rgba(0, 0, 0, 0.6);
  border-top-right-radius: 8px;
}

.category-badge span {
  background-color: #007bff;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.product-description {
  font-size: 14px;
  color: #666;
  flex-grow: 1;
  margin-bottom: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* max 2 lines */
  -webkit-box-orient: vertical;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: 700;
  color: #007bff;
  font-size: 16px;
}

.view-button {
  background-color: #007bff;
  color: white;
  padding: 6px 12px;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.view-button:hover {
  background-color: #0056b3;
}
</style>