<template>
  <div>
    <div v-if="type ==='food'">
    <div class="menu">
      <div class="row menu-header">
        <div class="col-lg-1">
          <div class="menu text-center">
            <img src="../assets/img/list.svg" />
          </div>
        </div>
        <div class="col-lg-7">
          <div class="row">
            <div class="col-lg-8">
              <div class="text-header text-center">
                <h4>Food Items</h4>
              </div>
            </div>
            <div class="col-lg-4 ">
              <b-input-group size="sm" class="mb-2 search-item">
                <b-form-input  type="search"  v-model="search" placeholder="Search product name"></b-form-input>
                <b-input-group-prepend is-text>
                  <b-icon icon="search" class="cari" @click="searchProduct()"></b-icon>
                </b-input-group-prepend>
              </b-input-group>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="cart-header text-center">
            <h4>
              Cart
              <b-icon-cart3></b-icon-cart3>
              <span v-if="cart===0">
                <span class="badge badge-danger ml-2">{{cart}}</span>
              </span>
              <span v-else>
                <span class="badge badge-success ml-2">{{cart}}</span>
              </span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else-if="type === 'history'">
      <div class="menu">
        <div class="row menu-header">

          <div class="col-lg-1">
            <div class="menu text-center">
              <img src="../assets/img/list.svg" alt />
            </div>
          </div>

          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-12">
                <div class="text-header text-center">
                  <h4>History</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Navbar',
  props: ['type', 'cart'],
  methods: {
    ...mapActions({
      actionSearch: 'product/search_Product'
    }),
    searchProduct () {
      this.$router.push({ path: '/product', query: { name: this.search } })
      this.actionSearch(this.search)
    }
  }
}
</script>

<style>
/* Menu Header */
.menu-header {
  /* background-color: darkcyan; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 60px;
  font-family: "airnbBold";
  margin-left: 0px;
}
.menu{
  margin-left: 5px;
}
.menu,
.text-header h4,
.cart-header h4,
.search-item
{
  line-height: 60px;
}

.search-item {
  padding: 10px;
}

.menu img {
  width: 45px;
}
.cari {
  cursor: pointer;
}
/* Break Point */
@media(max-width:1024px){
    /* Menu */
    .row.menu-header{
        display: none;
    }
}
</style>
