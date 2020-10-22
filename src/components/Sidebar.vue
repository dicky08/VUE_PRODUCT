<template>
  <div class="col-lg-1 side-left text-center zz">
    <div class="row side">

       <div class="col-lg-12 col-md-3 col-sm-3 sides">
        <div class="fork mt-5">
          <router-link to="/" class="nav-link">
            <img src="../assets/img/home.svg"/> Home
          </router-link>
        </div>
      </div>
      <div class="col-lg-12 col-md-3 col-sm-3 sides">
        <div class="fork mt-5">
          <router-link to="/product" class="nav-link">
            <img src="../assets/img/fork.svg" /> Foods
          </router-link>
        </div>
      </div>

      <div class="col-lg-12 col-md-3 col-sm-3 sides">
        <div class="history mt-5">
          <router-link to="/history" class="nav-link">
            <img src="../assets/img/clip.svg" /> History
          </router-link>
        </div>
      </div>
        <Modal type="add"/>
      <div class="col-lg-12 col-md-3 col-sm-3 sides">
        <div class="add mt-5 mb-5">
          <div  class="nav-link">
            <img src="../assets/img/add.svg" data-toggle="modal"
            data-target="#ModalAddProduct" /> Add
          </div>
        </div>
      </div>

      <div class="col-lg-12 col-md-3 col-sm-3 sides">
        <div class="add">
          <div  class="nav-link">
            <img src="../assets/img/log.png" @click="onLogout">Logout
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from './Modal'
import { mapActions } from 'vuex'
export default {
  name: 'Sidebar',
  components: {
    Modal
  },
  methods: {
    ...mapActions({
      actionLogout: 'auth/logout'
    }),
    onLogout () {
      this.actionLogout()
        .then(() => {
          window.location = '/'
        })
    }
  }
}

</script>

<style>
.nav-link img{
    width: 45px;
}
.sides {
  margin-left: 5px;
}
/* Sidebar Kiri */
.side-left {
  /* background-color: darkmagenta; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.side img:hover{
  cursor: pointer;
}
.nav-link {
  color: rgb(84, 84, 230);
}
/* ===================================================================== */
/* Break-POint */
@media(max-width:1024px){
      /* Sidebar Kiri */
#app{
  position: relative;
}
  .side {
    width: 100%;
    height: 70px;
    z-index: 3;
    position: fixed;
    bottom: 0;
    background-color: rgb(224, 220, 220);
  }
  .side {
    line-height: 70px;
  }

  .side img {
    width: 40px;
    margin-top: -100px;
  }
  .sides {
  margin-left: 0px;
}
}
/* Phone */
@media (max-width: 600px) {
  /* Collapse */
  .side-left {
    display: none;
  }
}
</style>
