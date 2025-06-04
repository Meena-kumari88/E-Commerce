
<template>
    <div v-if="product" >
        <section class="productdetail-section">
            <div class="productdetail-container">
                <div class="back-link">
                    <router-link to="/products">Back to Products</router-link>
                </div>

                <div class="productdetail-grid">
                    <div class="product-image">
                        <img :src="product.image" :alt="product.name"/>
                    </div>

                    <div class="product-info">
                        <span class="category">
                            {{ product.category }}
                        </span>
                        <h1>{{ product.name }}</h1>
                        <p class="price">{{ formatPrice(product.price) }}</p>

                        <div>
                            <h2>Description</h2>
                            <p>{{ product.description }}</p>
                        </div>

                        <div>
                            <h2>Features</h2>
                            <ul v-for="(feature, index) in product.features" :key="index">
                                <li>✔ {{ feature }}</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Quantity</h2>
                            <div class="productdetail-quantity-control">
                            <button @click="updateQuantity(-1)">-</button>
                            <input type="number" v-model="quantity" min="1" />
                            <button @click="updateQuantity(1)">+</button>
                          </div>

                        </div>

                        <div class="order-summary">
                              <h2>Order Summary</h2>
                              <div>
                                <span>Price({{ quantity }} {{ quantity === 1 ? 'item': 'items' }})</span>
                                <span>{{ formatPrice(subtotal) }}</span>
                              </div>
                              <div>
                                <span>GST (18%)</span>
                                <span>{{ formatPrice(gstAmount) }}</span>
                              </div>
                              <div class="total">
                                <strong>Total</strong>
                                <strong>{{ formatPrice(totalAmount) }}</strong>
                              </div>
                        </div>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>

      <section class="related-section">
        <div class="productdetail-container">
             <h2>You May Also Like</h2>
             <div class="related-grid">
                <div 
                v-for="relatedProduct in products.filter(p=>p.category === product.category && p.id !== product.id).slice(0,4)"
                :key="relatedProduct.id"
                class="related-card">
                    <router-link :to="`/products/${relatedProduct.id}`">
                        <img :src="relatedProduct.image" :alt="relatedProduct.name"/>
                        <div>
                            <h3>{{ relatedProduct.name }}</h3>
                            <p>{{ formatPrice(relatedProduct.price) }}</p>
                        </div>
                    </router-link>
                </div>
             </div>
        </div>
      </section>

    </div>
</template>

<script >
import {ref, computed, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import products from '../data/products'

export default {
    setup(){
        const route= useRoute()
        const router = useRouter()
        const quantity = ref(1)
        const GST_RATE  = 0.18

        const product = computed(() =>{
            const id = Number(route.params.id)
            const found = products.find(p=> p.id === id)
            if(!found) router.push('/products')
            return found
        })

        const subtotal = computed(()=>(product.value ? product.value.price * quantity.value: 0))
        const gstAmount = computed(()=>subtotal.value * GST_RATE)
        const totalAmount = computed(() =>subtotal.value + gstAmount.value)

        const formatPrice = price =>`₹${price.toFixed(2)}`

        const updateQuantity= change =>{
            const newQty = quantity.value + change
            if(newQty >= 1) quantity.value = newQty
        }

        onMounted(()=>window.scrollTo(0,0))

        return{
             route,
             router,
             quantity,
             product,
             subtotal,
             gstAmount,
             totalAmount,
             formatPrice,
             updateQuantity,
             products
        }
    }
}
</script>

<style>

.productdetail-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 16px;
}

.productdetail-section,
.related-section {
  padding: 40px 0 20px;
}


.back-link {
  margin-bottom: 20px;
}

.back-link a {
  color: #007bff;
  text-decoration: none;
  font-weight: 500;
}

.back-link a:hover {
  text-decoration: underline;
}


.productdetail-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}


.product-image {
  flex: 1 1 45%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.product-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  object-fit: cover;
}


.product-info {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}


.category {
  display: inline-block;
  background-color: #dee2e6;
  color: #495057;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 6px;
}


.product-info h1 {
  font-size: 1.75rem;
  color: #212529;
  margin: 0;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 10px;
}


.product-info h2 {
  font-size: 1rem;
  margin: 10px 0 5px;
  color: #343a40;
}

.product-info p {
  font-size: 0.95rem;
  color: #495057;
  line-height: 1.6;
}


ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

ul li {
  margin-bottom: 6px;
  color: #198754;
  font-size: 0.95rem;
}



.productdetail-quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.productdetail-quantity-control button {
  background-color: #dee2e6;
  border: 1px solid #ced4da;
  font-size: 1.2rem;
  padding: 6px 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.productdetail-quantity-control button:hover {
  background-color: #cfd4da;
}

.productdetail-quantity-control input {
  width: 60px;
  height: 38px;
  text-align: center;
  padding: 4px 6px;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  outline: none;
}

@media (max-width: 480px) {
  .productdetail-quantity-control {
    flex-direction: row;
    gap: 8px;
  }

  .productdetail-quantity-control input {
    width: 50px;
  }

  .productdetail-quantity-control button {
    padding: 4px 10px;
    font-size: 1rem;
  }
}


.order-summary {
  background-color: #f8f9fa;
  padding: 1rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 0.95rem;
}

.order-summary > div,
.order-summary .total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.order-summary .total {
  font-weight: 700;
  font-size: 1.05rem;
}


.add-to-cart {
  background-color: #0d6efd;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px;
  border: none;
  border-radius: 6px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #0b5ed7;
}


.related-section h2 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #212529;
}


.related-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.related-card {
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background: #fff;
  width: calc(25% - 15px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.related-card:hover {
  transform: translateY(-4px);
}

.related-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid #dee2e6;
}

.related-card div {
  padding: 0.8rem;
}

.related-card h3 {
  font-size: 1rem;
  color: #343a40;
  margin-bottom: 4px;
}

.related-card p {
  color: #007bff;
  font-weight: 600;
  margin: 0;
}


@media (max-width: 1024px) {
  .productdetail-grid {
    flex-direction: column;
  }

  .related-card {
    width: calc(33.33% - 14px);
  }
}

@media (max-width: 768px) {
  .related-card {
    width: calc(50% - 10px);
  }
}

@media (max-width: 480px) {
  .related-card {
    width: 100%;
  }

  .product-image,
  .product-info {
    width: 100%;
  }
}

</style>
