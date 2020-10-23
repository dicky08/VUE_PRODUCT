<template>
  <div class="login">
    <div class="row d-none d-md-block">
      <form @submit.prevent="onLogin">
        <div class="col-md-12">
          <div class="box-login">
            <div class="row mt-5">
              <div class="col-12 text-login text-center mt-4">
                <div class="dark font-weight-bold">Login</div>
              </div>
              <div class="col-md-6 col-12 col-lg-5 col-sm-12 img-login zz">
                <img src="../assets/img/view-login.svg" class="float-right" />
              </div>
              <div class="col-md-5 col-lg-6 col-sm-6 col-12 mt-5">
                <!-- Email -->
                <div class="input-group mb-3">
                  <input
                    v-model="form.email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    required
                  />
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <b-icon-envelope-fill></b-icon-envelope-fill>
                    </span>
                  </div>
                </div>
                <!-- Password -->
                <div class="input-group mb-3">
                  <input
                    v-model="form.password"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    required
                  />
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <b-icon-lock-fill></b-icon-lock-fill>
                    </span>
                  </div>
                </div>
                <!-- Button -->
                <button type="submit" class="btn btn-primary btn-block float-left">Login</button>
                <p>don't have an account yet? <router-link to="/register">Registrasi</router-link> / <router-link to="/">Home</router-link>  </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="row d-sm-block d-md-none mobile">
      <div class="col-md-12">
        <div class="row ml4">
          <div class="col-12 text-login mb-4">
            <div class="dark font-weight-bold text-center mt-3">Login</div>
          </div>
        </div>
        <div class="row login-mobile">
          <div class="col-md-6 col-12 col-sm-12">
            <img src="../assets/img/view-login.svg" class="ml-1" />
          </div>
          <div class="col-md-3 col-sm-11 col-sm-6 col-11 mt-5 ml-4">
            <!-- Email -->
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
              />
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <b-icon-envelope-fill></b-icon-envelope-fill>
                </span>
              </div>
            </div>
            <!-- Password -->
            <div class="input-group mb-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <b-icon-lock-fill></b-icon-lock-fill>
                </span>
              </div>
            </div>
            <!-- Button -->
            <button class="btn btn-primary btn-block float-left">Login </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onLogin () {
      this.actionLogin(this.form)
        .then((response) => {
          if (response.code === 404) {
            alert('Wrong password')
          } else {
            window.location = '/product'
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ...mapActions({
      actionLogin: 'auth/login'
    })
  }
}
</script>

<style>
.img-login {
  width: 400px;
}
.img-login img {
  width: 400px;
}
.text-login {
  font-size: 34px;
  font-style: "airnbBold";
}
.box-login {
  border-radius: 15px;
  margin: 90px auto;
  width: 1000px;
  border-radius: 2px solid black;
  background-color: rgb(78, 240, 240);
  height: 380px;
}

/* Break-Point Tablet */
@media (max-width: 768px) {
  .login-mobile img {
    width: 500px;
  }
  .login-mobile {
    text-align: center;
  }
  .text-login {
    margin-left: 30px;
  }
}

/* Break-Point Tablet */
@media (max-width: 600px) {
  .login-mobile img {
    width: 400px;
  }
}
</style>
