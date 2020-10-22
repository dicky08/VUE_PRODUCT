/* eslint-disable prefer-const */
<template>
  <div class="food">
    <div class="container-fluid">
      <Collapse type="product"/>
    </div>
    <Modal type="edit" :productId="productId" :categoryId="categoryId" :productName="productName" :priceEdit="priceEdit" :imageEdit="imageEdit"/>
    <Navbar type="food" :cart="carts.length"/>
    <div v-for="(cart, index) in carts" :key="index">
    <Modal  type="checkout" :amount="amount" :carts="carts" />
      </div>
    <div class="row">
      <Sidebar />
      <div class="col-lg-7">
        <div class="row mt-2">
          <div class="col-md-3">
            <select class="form-control mt-2 select-sort" @change="limitSorting" v-model="sorting">
              <option value>{{select}} sorting</option>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='15'>15</option>
              <option value='20'>20</option>
            </select>
          </div>
          <div class="col-md-3">
            <select class="form-control mt-2 select-category" @change="orderBy" v-model="selectOrder" >
              <option disabled value>{{select}} Category</option>
              <option value>{{select}} All Category</option>
              <option v-for="(dataCategory, index) in allCategory.category.data" :key="index">{{dataCategory.category_name}}</option>
            </select>
          </div>
          <div class="col-md-3 mt-2">
            <select class="form-control" @change="priceSorting" v-model="sortPrice">
              <option disabled value>Sort Price</option>
              <option value="asc">Low</option>
              <option value="desc">High</option>
            </select>
          </div>
          <div class="col-md-3">
            <div class="row mt-2">
              <div class="col-md-5 btn-prev">
                <button class="btn  btn-sm form-control btn-previ" @click="prev()" >Previous</button>
              </div>
              <div class="col-md-5 btn-next ml-1">
                <button class="btn  btn-sm form-control" @click="next()" >Next</button>
              </div>
            </div>
          </div>
          <div class="col-md-5 search-item">
            <b-input-group size="sm" class="mb-2">
              <b-input-group-prepend is-text>
                <b-icon icon="search"></b-icon>
              </b-input-group-prepend>
              <b-form-input type="search" placeholder="Search product name"></b-form-input>
            </b-input-group>
          </div>
        </div>
        <div v-if="allProduct.isLoading">
          <img src="../assets/img/loading.gif" width="120px" style="margin:150px 380px">
        </div>
        <div class="row" v-else>
          <div
            class="col-lg-4 col-md-4 col-sm-6 col-12"
            v-for="(dataProduct,index) in allProduct.product.data"
            :key="index"
          >
            <Card :dataProduct="dataProduct" :index="index" @editdata="edit" @orderfood="order"/>

          </div>
        </div>
      </div>
      <div class="col-lg-4 cart-checkout carts">
        <div v-if="carts.length===0">
        <Checkout />
        </div>
        <div v-for="(cart,index) in carts" :key="index">
          <div class="row mt-3 box-cart">
              <div class="col-md-5">
                <img
                  :src="`${URL}/${cart.image}`"
                  class="checkout-img mt-5"
                />
              </div>
              <div class="col-md-7 mt-5 name-product">
                <h4>
                  <strong>{{ cart.product_name }}</strong>
                </h4>
                <div class="row">
                  <div class="col-md-7 btns">
                    <button @click="kurang(index)" class="btn-min">-</button>
                    <input
                      type="text"
                      size="1"
                      :value="cart.qty"
                      class="text-center"
                      readonly
                    />
                    <button @click="tambah(index)" class="btn-plus">+</button>
                  </div>
                  <div class="col price">
                    <h5>
                      <strong>Rp. {{ cart.price * cart.qty }}</strong>
                    </h5>
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col ml-5 trash">
                    <button class="btn btn-danger btn-sm">
                      <b-icon-trash @click="deleteCart(index)"></b-icon-trash>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div v-if="carts.length > 0">
            <div class="checkout-amount mt-5 checkout2">
              <div class="row checkout">
                <div class="col-md-8">
                  <h2>Total</h2>
                </div>
                <div class="col-md-4">
                  <h4>
                    <strong>Rp. {{ amount }}</strong>
                  </h4>
                </div>
                <div class="row">
                  <div class="col ml-3">
                    <h5>*Belum termasuk PPN</h5>
                  </div>
                </div>
              </div>
              <div class="btn-checkout">
                <div class="row  mb-2">
                  <div class="col checkouts ">
                    <span
                      class="btn btn-block"
                      data-toggle="modal"
                      data-target="#ModalCheckout"
                    >
                      Checkout
                    </span>
                  </div>
                </div>
                <div class="row ">
                  <div class="col cancels">
                    <span class="btn  btn-block">Cancel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="cart-order rounded-circle">
            <i class="fa fa-shopping-cart shop">X</i>
          </div>
  </div>
</template>

<script>
import Collapse from '../components/Collapse'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import Checkout from '../components/Checkout'
import select from '../mixins/index'
import Modal from '../components/Modal'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Food',
  mixins: [select],
  components: {
    Collapse,
    Navbar,
    Sidebar,
    Card,
    Checkout,
    Modal
  },
  data () {
    return {
      amount: null,
      carts: [],
      selectOrder: '',
      sorting: '',
      sortPrice: '',
      productId: null,
      categoryId: null,
      productName: null,
      priceEdit: null,
      imageEdit: null,
      paginasi: [],
      count: 0,
      URL: process.env.VUE_APP_URL,
      pagesActive: null,
      activePages: null
    }
  },
  watch: {
    carts (dataCart) {
      this.amount = dataCart.reduce((acc, dataCart) => {
        return acc + dataCart.price * dataCart.qty
      }, 0)
    }
  },
  computed: {
    ...mapGetters({
      // store/index.js/modulProduct/store/product/index.js/getters
      allProduct: 'product/getAllProducts',
      // store/index.js/modulCategory/store/category/index.js/getters
      allCategory: 'category/getAllCategory'
    })
  },
  methods: {
    ...mapActions({
      // store/index.js/modulProduct/store/product/index.js/actionsProduct
      actionsProduct: 'product/getAllProducts',
      // store/index.js/modulCategorystore/category/index.js/actionsCategory
      actionsCategory: 'category/getAllCategory',
      // store/index.js/modulProduct/store/product/ndex.js/actionsCategory
      orderByCategory: 'product/getOrderBy',
      limit: 'product/sortingLimit',
      pagination: 'product/paginate',
      sortingPrice: 'product/sortPrice',
      actionSearch: 'product/search_Product'
    }),
    edit (idEdit, index) {
      this.productId = this.allProduct.product.data[index].id
      this.categoryId = this.allProduct.product.data[index].category_id
      this.productName = this.allProduct.product.data[index].product_name
      this.priceEdit = this.allProduct.product.data[index].price
      this.imageEdit = this.allProduct.product.data[index].image
    },
    orderBy () {
      // Ambil mapActions lalu ketika di onChange ambil nilai selectOrder
      this.orderByCategory(this.selectOrder)
    },
    limitSorting () {
      this.limit(this.sorting)
    },
    prev () {
      let pagesAkitf = this.allProduct.product.tableRow.pagesActive
      const kurangiSatu = pagesAkitf -= 1
      this.pagination(kurangiSatu)
      this.$router.push({ path: '/product', query: { limit: 5, pages: kurangiSatu } })
      if (pagesAkitf < 1) {
        pagesAkitf = 1
        this.$router.push({ path: '/product', query: { limit: 5, pages: 1 } })
        this.pagination(pagesAkitf)
      }
    },
    next () {
      const counter = 2
      // const angka = this.count += 1
      this.$router.push({ path: '/product', query: { limit: 5, pages: counter } })
      let pagesAkitf = this.allProduct.product.tableRow.pagesActive
      const totalPage = this.allProduct.product.tableRow.totalPages
      const tambahSatu = pagesAkitf += 1
      this.pagination(counter)
      if (pagesAkitf) {
        this.$router.push({ path: '/product', query: { limit: 5, pages: tambahSatu } })
        this.pagination(pagesAkitf)
      }
      if (pagesAkitf > totalPage) {
        alert('Max Page ' + totalPage)
        pagesAkitf = totalPage
        this.$router.push({ path: '/product', query: { limit: 5, pages: pagesAkitf } })
        this.pagination(pagesAkitf)
      }
    },
    priceSorting () {
      this.sortingPrice(this.sortPrice)
    },
    order (idOrder) {
      const cart = this.carts.filter(e => e.id === idOrder)
      if (cart.length === 0) {
        const data = this.allProduct.product.data.filter(e => e.id === idOrder)
        data[0].qty = 1
        this.carts = [...this.carts, data[0]]
      } else {
        const newCarts = this.carts.map(e => {
          if (e.id === idOrder) {
            e.qty += 1
          }
          return e
        })
        this.carts = newCarts
      }
    },
    tambah (indexPlus) {
      const idCartPlus = this.carts[indexPlus].id
      const cartData = this.carts.filter(e => {
        if (idCartPlus === e.id) {
          e.qty += 1
        }
        return e
      })
      this.carts = cartData
    },
    kurang (indexMin) {
      const idCartMin = this.carts[indexMin].id
      const cartData = this.carts.filter(e => {
        if (idCartMin === e.id) {
          e.qty -= 1
        }
        if (e.qty < 1) {
          e.qty = 1
        }
        return e
      })
      this.carts = cartData
    },
    deleteCart (indexCart) {
      this.carts.splice(indexCart, 1)
    }
  },
  mounted () {
    // Tampilkan data Product ketika pertama dijalankan hasil dari mapActions
    this.actionsProduct()
    // Tampilkan data Category ketika pertama dijalankan hasil dari mapActions
    this.actionsCategory()
  }
}
</script>

<style>
.search-item {
  display: none;
}
.select-category {
  text-align: center;
}
select {
  cursor: pointer;
}

.price h5{
  font-size: 15px;
  margin-left: -15px;
}
img.checkout-img {
  margin-top: 400px;
  border-radius: 10px;
  width: 200px;
  margin-left: -10px;
}
.nameCategory {
  text-transform: capitalize;
}
.name-product {
  margin-left: 0px;
}
.name-product h3 {
  margin-left: -20px;
}
.btn-plus,
.btn-min {
  text-align: center;
  background-color: chartreuse;
  width: 25px;
}

.btn-checkout {
  padding: 10px;
}
.checkout h4{
margin-left: -50px;
}
.checkouts:hover {
  background-color: #9aeaf1;
  transition: all .5s;
}
.checkouts {
  background: #57CAD5;;
}
.cancels:hover {
  background-color: #f094b6;
  transition: all .5s;
}
.cancels {
  background: #F24F8A;
}
  .btn-prev, .btn-next {
    background-color: rgb(241, 245, 245);
  }
  .btn-previ{
    text-align: center;
  }
  .btn-prev:hover, .btn-next:hover {
    background-color: rgb(178, 184, 184);
    transition: all .8s;
  }
/* Break Point */
@media (max-width: 1024px) {
  .search-item {
    display: block;
  }
}

/* * Break Point  */
@media (max-width: 768px) {
  .search-item {
    display: none;
  }
  .box-cart{
    position: relative;
    margin-left: 10px;
  }
.name-product {
  position: absolute;
  top: 0px;
  left: 250px;
}
.price{
  position: absolute;
  top: 40px;
  left: 180px;
}

.trash {
  position: absolute;
  top: 80px;
  left: 7px;
  }
   .carts {
    position: absolute;
    display: inline-block;
    background-color: rgb(230, 225, 225);
    z-index: 2;
    height: 550vh;
    width: 100%;
    overflow: scroll;
    transform: translateY(-100%);
    transition: all 1s;
  }
  .carts.slide {
    transform: translateY(0);
  }
  .carts.slide {
    transform: translateY(0);
  }

  .checkout2 {
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  .checkout {
    width: 920px;
  }

  .shop {
    margin-top: 15px;
    margin-left: 15px;
    font-size: 20px;
  }
}
/* * Break Point  */
@media (max-width: 600px) {
  .search-item {
    display: none;
  }
  .box-cart{
    position: relative;
    margin-left: 10px;
  }
.name-product {
  position: absolute;
  top: 0px;
  left: 250px;
}
.price h5{
  position: absolute;
  top: -5px;
  left: 35px;
  font-size: 18px;
}

.trash {
 margin-left: -50px;
  }
   .carts {
    position: absolute;
    display: inline-block;
    background-color: rgb(230, 225, 225);
    z-index: 2;
    height: 550vh;
    width: 100%;
    overflow: scroll;
    transform: translateY(-100%);
    transition: all 1s;
  }
  .carts.slide {
    transform: translateY(0);
  }
  .carts.slide {
    transform: translateY(0);
  }

  .checkout2 {
    display: flex;
    flex-direction: column;
    width: 500px;
  }

  .checkout {
    width: 920px;
  }

.checkout h2 {
  font-size: 24px;
  margin-left: 10px;
}

.checkout h4 {
  font-size: 24px;
  margin-top: -30px;
  margin-left: 280px;
}
  .shop {
    margin-top: 15px;
    margin-left: 15px;
    font-size: 20px;
  }
}
</style>
