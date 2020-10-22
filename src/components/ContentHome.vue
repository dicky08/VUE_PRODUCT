<template>
  <div class="content">
    <div class="d-none d-md-block">
      <div class="row mt-5">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                Find your Favorite Food
                <s>with</s>
                <strong>
                  <br />Your Partner
                </strong>
              </h2>
              <p>Enjoy Your Meal <img src="../assets/img/fork.svg" width="20px"></p>
              <router-link to="/product" class="btn btn-info">
                <b-icon-arrow-right></b-icon-arrow-right>Order Food
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/dinner.png" width="100%" />
        </div>
      </div>
    </div>

    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6">
          <img src="../assets/img/dinner.png" width="100%" />
        </div>
        <div class="col-md-6 mt-5">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                Find your Favorite Food
                <s>with</s>
                <strong>
                  <br />Your Partner
                </strong>
              </h2>
              <p>Enjoy Your Meal <img src="../assets/img/fork.svg" width="20px" style="margin-left: 1px"></p>
              <router-link to="/product" class="btn btn-info">
                <b-icon-arrow-right></b-icon-arrow-right>Order Food
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentHome'
}
</script>

<style>
</style>
