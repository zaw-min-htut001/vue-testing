<template>
  <div>
    <div class="breadcrumbs" data-aos="fade-in">
      <div class="container">
        <h2>Login</h2>
      </div>
    </div>
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card shadow-lg border-0 rounded-lg mt-5">
            <div class="card-header">
              <h3 class="text-center font-weight-light my-4">Login</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="login()">
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputEmail"
                    type="email"
                    placeholder="name@example.com"
                    v-model="email"
                    :class="{ 'is-invalid': emailErrors }"
                  />
                  <label for="inputEmail">Email address</label>
                  <div
                    id="validationServer05Feedback"
                    class="invalid-feedback text-start"
                  >
                    {{ emailErrors[0] }}
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    id="inputPassword"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                    :class="{ 'is-invalid': passwordErrors }"
                  />
                  <label for="inputPassword">Password</label>
                  <div
                    id="validationServer05Feedback"
                    class="invalid-feedback text-start"
                  >
                    {{ passwordErrors[0] }}
                  </div>
                </div>

                <div
                  class="d-flex align-items-center justify-content-between mt-4 mb-0"
                >
                  <a class="small" href="#"
                    ><router-link to="/forgotPassword"
                      >Forgot Password?</router-link
                    ></a
                  >
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
            <div class="card-footer text-center py-3">
              <div class="small">
                <a href="#"
                  ><router-link to="/register"
                    >Need an account? Sign up!</router-link
                  ></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../js/login.js"></script>

<style lang="stylus" scoped></style>
