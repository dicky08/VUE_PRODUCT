<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Content/>
      <div class="row mt-5">
        <div class="col">
          <h2>Bestselling<strong>Food</strong></h2>
        </div>
        <div class="col">
          <router-link to="/product" class="btn btn-info float-right"><b-icon-eye> </b-icon-eye> See more</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-6 col-lg-4" v-for="dataProduct in bestProduct.product" :key="dataProduct.id">
          <!-- Lempar data ke component Card -->
          <Card type="best" :dataProduct="dataProduct"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Content from '../components/ContentHome'
import Card from '../components/Card'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    Navbar,
    Content,
    Card
  },
  data () {
    return {
      products: {}
    }
  },
  computed: {
    ...mapGetters({
      bestProduct: 'product/bestProduct'
    })
  },
  methods: {
    ...mapActions({
      actionsProduct: 'product/bestProduct'
    })
  },
  mounted () {
    this.actionsProduct()
  }
}
</script>
