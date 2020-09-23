<template>
  <div v-if="type==='add'">
    <!-- Modal -->
    <div
      class="modal fade"
      id="ModalAddProduct"
      tabindex="-1"
      aria-labelledby="ModalAddProductLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content">
          <form enctype="multipart/form-data">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalAddProductLabel">Add Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row mb-3">
                <div class="col-md-5">
                  <h4>Category name</h4>
                </div>
                <div class="col-md-7">
                  <select class="form-control nameCategory" v-model="c_id">
                    <option disabled value>Select category</option>
                    <option disabled value>Select Category</option>
                    <option
                      v-for="(dataCategory, index) in allCategory.category.data"
                      :key="index"
                      :value="dataCategory.id"
                    >{{dataCategory.category_name}}</option>>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-5">
                  <h4>Product name</h4>
                </div>
                <div class="col-md-7">
                  <input type="text" class="form-control" v-model="product_name" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-5">
                  <h4>Price</h4>
                </div>
                <div class="col-md-7">
                  <input type="number" class="form-control" v-model="price" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-5">
                  <h4>Images</h4>
                </div>
                <div class="col-md-7">
                  <input type="file" class="form-control" @change="onSelectFile($event)" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="close-btn">
                <button type="button" class="btn" data-dismiss="modal">Close</button>
              </div>
              <div class="save-btn">
                <button type="submit" class="btn" @click.prevent="insertData">Add Product</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="type==='edit'">
    <div
      class="modal fade"
      id="EditProduct"
      tabindex="-1"
      aria-labelledby="EditProductLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <form enctype="multipart/form-data">
            <div class="modal-header">
              <h5 class="modal-title" id="EditProductLabel">Edit Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-5">
                  <img
                    :src="`${URL}/${imageEdit}`"
                    height="250px"
                    width="300px"
                    class="shadow img-edit"
                  />
                </div>
                <div class="col">
                  <div class="row mb-3">
                    <div class="col-md-5">
                      <h4>Category</h4>
                    </div>
                    <div class="col-md-7">
                      <select class="form-control nameCategory" v-model="categoryId">
                        <option disabled value>Select category</option>
                        <option
                          v-for="(dataCategory, index) in allCategory.category.data"
                          :key="index"
                          :value="dataCategory.id"
                        >{{dataCategory.category_name}}</option>>
                      </select>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-5">
                      <h4>Product name</h4>
                    </div>
                    <div class="col-md-7">
                      <input type="text" class="form-control" v-model="productName" />
                    </div>
                  </div>

                  <div class="row mb-3">
                    <div class="col-md-5">
                      <h4>Price</h4>
                    </div>
                    <div class="col-md-7">
                      <input type="text" class="form-control" v-model="priceEdit" />
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-5">
                      <h4>Images</h4>
                    </div>
                    <div class="col-md-7">
                      <input type="file" class="form-control" @change="onSelectFileedit($event)" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="close-btn">
                <button type="button" class="btn btn" data-dismiss="modal">Cancel</button>
              </div>
              <div class="save-btn">
                <button type="submit" class="btn btn" @click.prevent="updateData">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="type==='checkout'">
    <!-- Modal -->
    <div
      class="modal fade"
      id="ModalCheckout"
      tabindex="-1"
      aria-labelledby="ModalCheckoutLabel"
      aria-hidden="true"
    >
      <form>
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div class="row d-flex justify-content-between w-100">
                <div class="col-md-5 col-sm-12 col-12">
                  <h5 class="modal-title" id="ModalCheckoutLabel">Checkout</h5>
                </div>
                <div class="col-md-7 col-sm-12 col-12">
                  <h5
                    class="modal-title receipt receipt text-muted"
                    id="ModalCheckoutLabel"
                  >Receipt no : #12315</h5>
                </div>
              </div>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6 col-12">
                  <!-- <input type="text" :value="orderNumber"> -->
                  <h4>Cashier :</h4>
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Name" v-model="cashier" />
                </div>
              </div>
              <div class="row detail-transaksi" v-for="(cart, index) in carts " :key="index">
                <div class="col-md-6 detail-transaksi">
                  <p>
                    <strong>{{cart.product_name}} {{cart.qty}} x</strong>
                  </p>
                </div>
                <div class="col-md-6 text-right detail-transaksi price-mobile">
                  <p>
                    <strong>Rp. {{cart.price * cart.qty}}</strong>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <p>Ppn 10%</p>
                </div>
                <div class="col-md-6 col-sm-12 text-right ppn">
                  <p>
                    <strong>Rp. {{amount*0.1}}</strong>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="text-right">
                    Total :
                    <strong>Rp. {{amount+(amount*0.1)}}</strong>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p>Payment Cash</p>
                </div>
              </div>
              <div></div>
              <div class="row">
                <div class="col">
                  <button
                    type="submit"
                    class="btn btn-info btn-block print"
                    @click.prevent="addCheckout"
                  >Print</button>
                </div>
              </div>
              <p class="text-center">or</p>
              <div class="row">
                <div class="col">
                  <button class="btn btn-danger btn-block email">Send Email</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div v-else-if="type==='detail'">
    <!-- Modal -->
    <div
      class="modal fade"
      id="ModalDetail"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalDetailLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalDetailLabel">Detail Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name product</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody v-for="(detail, index) in detailData" :key="index">
                  <tr>
                    <th scope="row">{{index+1}}</th>
                    <td>{{detail.name_product}}</td>
                    <td>{{detail.qty}}</td>
                    <td>{{detail.price}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import momen from 'moment'
import { mapGetters, mapActions } from 'vuex'
export default {
  props: [
    'type',
    'productId',
    'categoryId',
    'productName',
    'priceEdit',
    'imageEdit',
    'amount',
    'carts',
    'detailData'
  ],
  data () {
    return {
      c_id: '',
      product_name: '',
      price: '',
      image: null,
      dataDetail: null,
      cashier: null,
      orderNumber: null,
      history: {},
      URL: process.env.VUE_APP_URL
    }
  },
  computed: {
    ...mapGetters({
      // store/index.js/modulCategory/store/category/index.js/getters
      allCategory: 'category/getAllCategory',
      allProduct: 'product/getAllProducts'
    })
  },

  methods: {
    onSelectFile (event) {
      this.image = event.target.files[0]
      // console.log(this.image)
    },
    onSelectFileedit (event) {
      this.imageEdit = event.target.files[0]
    },
    ...mapActions({
      // store/index.js/modulCategorystore/category/index.js/actionsCategory
      actionsCategory: 'category/getAllCategory',
      actionsPostProduct: 'product/insertProduct',
      getProduct: 'product/getAllProducts',
      actionsEditProduct: 'product/updateProduct',
      actHistory: 'history/insertHistory'
    }),
    insertData () {
      // INSERT PRODUCT
      const fd = new FormData()
      fd.append('category_id', this.c_id)
      fd.append('product_name', this.product_name)
      fd.append('price', this.price)
      fd.append('image', this.image)
      this.actionsPostProduct(fd)
        .then((response) => {
          alert(response)
          setTimeout(() => {
            this.getProduct()
            location.reload(true)
          }, 1000)
        })
        // eslint-disable-next-line handle-callback-err
        .catch((err) => {
          alert('Insert data failed')
        })
    },
    updateData () {
      const fd = new FormData()
      fd.append('category_id', this.categoryId)
      fd.append('product_name', this.productName)
      fd.append('price', this.priceEdit)
      fd.append('image', this.imageEdit)
      const data = {
        id: this.productId,
        form: fd
      }
      this.actionsEditProduct(data)

        .then((response) => {
          alert(response)
          setTimeout(() => {
            this.getProduct()
            location.reload(true)
          }, 1000)
        })
        // eslint-disable-next-line handle-callback-err
        .catch((err) => {
          alert('Update data failed')
        })
    },
    addCheckout () {
      // DATETIME
      const date = new Date()
      const time = date.getTime()
      const invoice = `INV - ${time}`
      const ppn = this.amount * 0.1
      if (this.cashier !== null) {
        const newDetail = this.carts.map((e) => {
          const dataDetail = {
            product_id: e.id,
            name_product: e.product_name,
            qty: e.qty,
            price: e.price
          }
          return dataDetail
        })
        const data = {
          cashier_name: this.cashier,
          invoice: invoice,
          ppn: ppn,
          amount: this.amount,
          detail: newDetail
        }
        this.actHistory(data)
          .then((result) => {
            alert(result)
            setTimeout(() => {
              this.getProduct()
              location.reload(true)
            }, 1000)
          })
          .catch((err) => {
            alert(err)
          })
      } else {
        alert(null)
      }
    },
    mounted () {
      this.actionsCategory()
    }
  }
}
</script>

<style>
.modal-body h4 {
  font-size: 18px;
}
.modal-footer {
  padding: 10px;
}

.save-btn:hover {
  background-color: #9aeaf1;
  transition: all 0.5s;
}
.save-btn {
  background: #57cad5;
}
.close-btn:hover {
  background-color: #f094b6;
  transition: all 0.5s;
}
.close-btn {
  background: #f24f8a;
}
</style>
