<script setup>
import {ref, computed} from 'vue'
import products from '../data/products'
import ProductCard from './ProductCard.vue';

// Filters
const searchQuery = ref('');
const selectedCategory = ref('');
const sortOption = ref('default')

// Unique categories

const categories = computed(() =>{
    const unique = new Set()
    products.forEach(p => unique.add(p.category));
    return Array.from(unique)
})


// Filter and sort logic
const filteredProducts = computed(() =>{
    let result = [...products]

    if(searchQuery.value){
        const query = searchQuery.value.toLocaleLowerCase()
        result = result.filter(p=>
            p.name.toLocaleLowerCase().includes(query) || 
            p.description.toLocaleLowerCase().includes(query)
        )
    }
    if(selectedCategory.value){
        result = result.filter(p=>p.category === selectedCategory.value)
    }
    if(sortOption.value === 'price-low-high'){
        result.sort((a,b) => a.price -b.price)
    }else if(sortOption.value ==="price-high-low"){
        result.sort((a,b) => b.price - a.price)
    }else if(sortOption.value === 'name-a-z'){
        result.sort((a,b) => a.name.localeCompare(b.name))
    }else if(sortOption.value === 'name-z-a'){
        result.sort((a,b) => b.name.localeCompare(a.name))
    }
    return result
})

</script>
<template>
        <section class="product-hero">
             <img 
              src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Banner"
           />
           <div class="product-hero-content">
            <h1>Our Products</h1>
            <p>Discover our wide range of high-quality fashion items that combine style, comfort, and durability.</p>
           </div>
        </section>
          <!-- Filters -->
           <section class="filters">
                <div class="filter-group">
                    <label for="search">Search:</label>
                    <input id="search" v-model="searchQuery" placeholder="Search products..."/>
                </div>
                <div class="filter-group">
                    <label for="category">Category:</label>
                    <select name="" id="category" v-model="selectedCategory">
                        <option value="">All Categories</option>
                        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                    </select>
                </div>
                 <div class="filter-group">
                    <label for="sort">Sort By:</label>
                    <select id="sort" v-model="sortOption">
                        <option value="default">Featured</option>
                        <option value="price-low-high">Price: Low to High</option>
                        <option value="price-high-low">Price: High to Low</option>
                        <option value="name-a-z">Name: A to Z</option>
                        <option value="name-z-a">Name: Z to A</option>
                    </select>
                 </div>   
           </section>

            <!-- Products -->
         <section class="products">
            <div v-if="filteredProducts.length > 0" class="product-grid">
                <ProductCard 
                v-for="product in filteredProducts"
                :key="product.id"
                :product = "product"
                />
            </div>

            <div v-else class="no-result">
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria.</p>
                <button @click="searchQuery = '', selectedCategory ='', sortOption = 'default'">
                  Reset Filters
                </button>
            </div>

         </section>    
    
</template>

<style scoped>
.product-page {
  font-family: Arial, sans-serif;
}

.product-hero {
  position: relative;
  text-align: left;
  color: white;
  background-color: #000000
}

.product-hero img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  opacity: 0.4;
}

.product-hero-content {
  position: absolute;
  top: 30%;
  left: 40%;
  transform: translate(-50%, -30%);
  color: #fff;
}

.product-hero-content h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.product-hero-content p {
  font-size: 18px;
}

.filters {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 30px auto;
  max-width: 900px;
  padding: 0 20px;
}

.filter-group {
  flex: 1;
  min-width: 200px;
}

.filter-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.filter-group input,
.filter-group select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.products {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.no-results {
  text-align: center;
  margin-top: 40px;
}

.no-results button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #222;
  color: white;
  border: none;
  cursor: pointer;
}

.no-results button:hover {
  background-color: #444;
}
</style>