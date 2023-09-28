<template>
  <div>
    <div class="breadcrumbs" data-aos="fade-in">
      <div class="container">
        <h2>Reset Your Password</h2>
      </div>
    </div>
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card shadow-lg border-0 rounded-lg mt-5">
            <div class="card-header">
              <h3 class="text-center font-weight-light my-4">
                Reset Your Password
              </h3>
            </div>
            <div class="card-body">
              <div class="alert alert-success" role="alert" v-if="success">
                {{ message }}
              </div>
              <div class="alert alert-danger" role="alert" v-if="error">
                <li
                  v-for="(item, index) in error"
                  :key="index"
                  class="text-start"
                >
                  {{ item }}
                </li>
              </div>
              <form @submit.prevent="submitForm()">
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputEmail"
                    type="email"
                    placeholder="name@example.com"
                    v-model="email"
                  />
                  <label for="inputEmail">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputPassword"
                    type="password"
                    v-model="password"
                  />
                  <label for="inputPassword">Enter New Password</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputc_Password"
                    type="password"
                    v-model="password_comfirmation"
                  />
                  <label for="inputc_Password">Retype Your Password</label>
                </div>

                <div
                  class="d-flex align-items-center justify-content-between mt-4 mb-0"
                >
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/ResetPassword.js"></script>

<style lang="stylus" scoped></style>
