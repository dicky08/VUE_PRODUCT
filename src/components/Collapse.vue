<template>
    <div v-if="type==='product'">
      <div class="row phone">
      <Modal type="add" />
      <div class="col">
        <div class="navbar mb-5">
          <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand food-mobile" href="#">Food Item</a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <router-link to="/" class="nav-link" >
                    <b-icon-house></b-icon-house> Home
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/product" class="nav-link" >
                   <img src="../assets/img/fork.svg" width="17px"> Foods
                  </router-link>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link" data-toggle="modal"
                    data-target="#ModalAddProduct">
                    <b-icon-plus></b-icon-plus> Add Foods
                  </a>
                </li>
                <li class="nav-item">
                  <router-link to="/history" class="nav-link" >
                    <b-icon-clipboard></b-icon-clipboard> History
                  </router-link>
                </li>

                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter name of the food or drink"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    </div>
    <div v-else-if="type==='history'">
      <div class="row phone">
      <Modal type="add" />
      <div class="col">
        <div class="navbar mb-5">
          <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand food-mobile" href="#">History</a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <router-link to="/" class="nav-link" >
                    <b-icon-house></b-icon-house> Home
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/product" class="nav-link" >
                   <img src="../assets/img/fork.svg" width="17px"> Foods
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/history" class="nav-link" >
                    <b-icon-clipboard></b-icon-clipboard> History
                  </router-link>
                </li>

                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter name of the food or drink"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import Modal from './Modal'
export default {
  name: 'Collapse',
  props: ['nama', 'type'],
  components: {
    Modal
  }
}
</script>

<style scoped>

/* Collapse */
.navbar{
    display: none;
}

/* Phone */
@media(max-width:600px) {
    /* Collapse */
    .phone {
    width: 100%;
  }
  .navbar {
    display: inline-block;
    width: 100%;
    text-align: right;
    font-family: "airnbBold";
  }
}
</style>
