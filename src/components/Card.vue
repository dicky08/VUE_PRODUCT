<template>
  <div class="card mt-4 ml-1 card-product shadow">
    <img :src="`${URL}/${dataProduct.image}`" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{dataProduct.product_name}}</h5>
      <hr />
      <p class="card-text">
        Harga :
        <strong>Rp. {{dataProduct.price}}</strong>
      </p>
      <Modal type="edit" :category_id_edit="category_id" :product_name_edit="product_name" :price_edit="price" :image_edit="image" />
      <div class="row buton mt-3">
        <div class="col-md-4 mb-2">
          <a
            href="#"
            class="btn btn-primary btn-sm btn-block"
            data-toggle="modal"
            data-target="#EditProduct"
            @click="$emit('editdata',dataProduct.id, index)"
          >
            <b-icon-pencil></b-icon-pencil>
          </a>
        </div>
        <!-- <div class="col-md-4 mb-2">
          <a href="#" class="btn btn-primary btn-sm btn-block" @click="hapus" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
            <b-icon-pencil-square></b-icon-pencil-square>
          </a>
        </div> -->
        <!-- //@click="getId(dataProduct.id) -->
        <div class="col-md-4 mb-2">
          <button class="btn btn-primary btn-sm btn-block" @click="$emit('orderfood', dataProduct.id)" >
            <b-icon-cart4></b-icon-cart4>
          </button>
        </div>
        <div class="col-md-4">
          <button type="submit" class="btn btn-primary btn-sm btn-block"   @click="deleteds(dataProduct.id)">
            <b-icon-trash></b-icon-trash>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './Modal'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Card',
  props: ['dataProduct', 'index'],
  components: {
    Modal
  },
  data () {
    return {
      carts: [],
      category_id: '',
      product_name: '',
      price: '',
      image: '',
      URL: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters({
      allProducts: 'product/getAllProducts'
    })
  },
  methods: {
    ...mapActions({
      deleteProduct: 'product/deletedProduct',
      getProduct: 'product/getAllProducts'
    }),
    deleteds (id) {
      this.deleteProduct(id)
      alert('Data has been deleted')
      setTimeout(() => {
        this.getProduct()
        location.reload(true)
      }, 1000)
    }
  }
}
</script>

<style>
.card-product {
  border-radius: 10px;
}
.card-img-top {
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}
.card-text,
.card-title {
  margin-top: -10px;
  font-family: "Grandstander", cursive;
  font-weight: normal;
}
.buton {
  margin-top: -10px;
}
/* Phone Card */
@media (max-width: 1024px) {
  .card {
    overflow: hidden;
  }
  .card-product img {
    margin-left: 0px;
  }
}
</style>
