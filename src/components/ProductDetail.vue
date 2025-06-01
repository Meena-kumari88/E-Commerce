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

        const formatPrice = price =>`$${price.toFixed(2)}`

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
<template>
    <div v-if="product" >
        <section class="product-section">
            <div class="container">
                <div class="back-link">
                    <router-link to="/products">Back to Products</router-link>
                </div>

                <div class="product-grid">
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
                                <li> ✓ {{ feature }}</li>
                            </ul>
                        </div>


                        <div>
                            <h2>Quantity</h2>
                            <div class="quntity-control">
                                <button @click="updateQuantity(-1)">-</button>
                                <input type="number" v-model="quantity" min="1"/>
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
        <div class="container">
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



<style>
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}
.product-section,
.related-section {
  padding: 40px 0;
}
.back-link {
  margin-bottom: 20px;
}
.product-grid {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
.product-image img {
  max-width: 100%;
  border-radius: 8px;
}
.product-info {
  flex: 1;
}
.category {
  display: inline-block;
  background-color: #eee;
  padding: 4px 8px;
  margin-bottom: 10px;
}
.price {
  color: #c00;
  font-size: 1.5rem;
  margin-bottom: 20px;
}
ul {
  padding-left: 20px;
}
.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.quantity-control input {
  width: 50px;
  text-align: center;
}
.order-summary div,
.order-summary .total {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.add-to-cart {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.related-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.related-card {
  border: 1px solid #ccc;
  padding: 10px;
  width: calc(25% - 15px);
  box-sizing: border-box;
}
.related-card img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
