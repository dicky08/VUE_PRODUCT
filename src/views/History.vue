<template>
  <div class="hisotry">
       <Collapse type="history"/>
      <Navbar type="history"/>
      <div class="row">
        <Sidebar />
        <ModalDetail type="detail" :detailData="detailData"/>
        <div class="col p-4">
          <div class="row shadow">
            <div class="col-12 col-md-6 col-lg-4 mb-3 ">
              <div class="card shadow1">
                <div class="card-body">
                  Todays Income
                  <h4 class="income">RP. {{totalSales}}</h4>
                  <p>+2% Yesterday</p>
                </div>
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-3">
              <div class="card shadow2">
                <div class="card-body">
                  Orders
                  <h4 class="income">{{totalQty}}</h4>
                  <p>+5% Last Week</p>
                  <div class="circle1"></div>
                  <div class="circle2"></div>
                  <div class="circle3"></div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4 mb-3">
              <div class="card shadow3">
                <div class="card-body">
                  This Year Income
                  <h4 class="income">RP. 100.000.000.000</h4>
                  <p>+10% Last Year</p>
                  <div class="circle1"></div>
                  <div class="circle2"></div>
                  <div class="circle3"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5 shadow ">
            <div class="col-lg-12 col-md-6 col-sm-6 col-12  chart">
                <h4>Revenue Line</h4>
              <chart
                :options="chartOptionsLine"
              style="width:100%"></chart>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col mt-3 shadow">
              <h4></h4>
              <table class="table">
                <thead>
                  <tr>
                    <!-- {{history_detail}} -->
                    <th scope="col">No</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Cashier</th>
                    <th scope="col">Date</th>
                    <th scope="col">Orders</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody v-for="(history, index) in allDetailHistory.dataHistory.data" :key="index">
                  <tr>
                    <th scope="row">{{index+1}}</th>
                    <td>{{history.invoice}}</td>
                    <td>{{history.cashier_name}}</td>
                    <td>{{history.orders_date}}</td>
                    <td>
                      <a @click="detail(history.id)" class="btn btn-primary btn-sm" data-toggle="modal"
                        data-target="#ModalDetail"   >Detail Order </a>
                    </td>
                    <td>Rp. {{history.amount}} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Bar, mixins } from 'vue-chartjs'
import Collapse from '../components/Collapse'
import ModalDetail from '../components/Modal'
import { mapGetters, mapActions } from 'vuex'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
// import { Bar } from 'vue-chartjs'
export default {
  mixins: [mixins.reactiveData],
  extends: Bar,
  components: {
    Collapse,
    Navbar,
    Sidebar,
    ModalDetail
  },
  data () {
    return {
      detailData: [],
      chartOptionsLine: null,
      amount: [],
      totalSales: null,
      totalQty: null
    }
  },
  computed: {
    ...mapGetters({
      allDetailHistory: 'history/getHistory',
      allDetail: 'history/getDetail',
      history_detail: 'history/get_history_detail'
    })
  },
  methods: {
    ...mapActions({
      getHistory: 'history/getHistory',
      getDetail: 'history/getDetail',
      actHistoryDetail: 'history/getHistoryDetail'
    }),
    detail (id) {
      // alert(id)
      const data = this.allDetail.dataDetail.data.filter(e => e.history_id === id)
      this.detailData = data
    }

  },
  mounted () {
    this.getHistory()
      .then((result) => {
        const amount = result.data.map(e => {
          return e.amount
        })
        const date = result.data.map(e => {
          const split = e.orders_date.split(' ')
          return split[0]
        })
        const amountSales = result.data.reduce((acc, data) => {
          return acc + data.amount
        }, 0)
        this.totalSales = amountSales
        this.chartOptionsLine = {
          xAxis: {
            data: date
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              type: 'line',
              data: amount
            }
          ],
          title: {
            text: 'Income every month',
            x: 'center',
            textStyle: {
              fontSize: 24
            }
          },
          color: ['#29dfff']
        }
      }).catch((err) => {
        console.log(err.message)
      })
    this.getDetail()
    this.actHistoryDetail()
      .then((result) => {
        const qty = result.reduce((acc, data) => {
          return acc + data.qty
        }, 0)
        this.totalQty = qty
      }).catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style>
.card.shadow1 {
  position: relative;
  background: linear-gradient(
    278.29deg,
    #fbb2b4 30.05%,
    rgba(255, 143, 178, 0) 133.19%
  );

  filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
  font-family: "airnbBold";
  border-radius: 10px;
}
.card.shadow2 {
  position: relative;
  font-family: "airnbBold";
  border-radius: 10px;
  border-radius: 10px;
  background: linear-gradient(
    278.29deg,
    #29dfff 30.05%,
    rgba(41, 223, 255, 0) 133.19%
  );
}

.card.shadow3 {
  position: relative;
  font-family: "airnbBold";
  background: linear-gradient(
    278.29deg,
    #ab84c8 30.05%,
    rgba(241, 201, 236, 0) 133.19%
  );
  filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
  border-radius: 10px;
}
.circle1 {
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: blueviolet;
  border-radius: 50%;
  top: 10%;
  right: 20%;
  background: rgba(253, 211, 228, 0.3);
}

.circle2 {
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: blueviolet;
  border-radius: 50%;
  top: 20%;
  right: 30%;
  background: rgba(253, 211, 228, 0.3);
}

.circle3 {
  position: absolute;
  width: 70px;
  height: 70px;
  background-color: blueviolet;
  border-radius: 50%;
  top: 20px;
  right: 40px;
  background: rgba(253, 211, 228, 0.3);
}
.shadow h4 {
  font-weight: 700;
}
.chart{
  width: 100%;
  height: 100%;

}
.echarts {
  width: 100%;
  height: 100%;
}

.cart-order {
    display: none;
    position: fixed;
    top: 400px;
    left: 0;
    z-index: 999;
    background-color: rgba(245, 31, 31, 0.8);
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
</style>
