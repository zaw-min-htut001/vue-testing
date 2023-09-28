<template>
  <div>
    <div class="breadcrumbs" data-aos="fade-in">
      <div class="container">
        <h2>Register</h2>
      </div>
    </div>
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="card shadow-lg border-0 rounded-lg mt-5">
            <div class="card-header">
              <h3 class="text-center font-weight-light my-4">Create Account</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleRegister()">
                <div class="row mb-3">
                  <div class="col-md-12">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                        class="form-control"
                        :class="{ 'is-invalid': nameErrors }"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your name"
                        v-model="name"
                      />
                      <label for="inputFirstName">User Name</label>
                      <div
                        id="validationServer05Feedback"
                        class="invalid-feedback text-start"
                      >
                        {{ nameErrors }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input
                    class="form-control"
                    :class="{ 'is-invalid': emailErrors }"
                    id="inputEmail"
                    type="email"
                    placeholder="name@example.com"
                    v-model="email"
                  />
                  <label for="inputEmail">Email address</label>
                  <div
                    id="validationServer05Feedback"
                    class="invalid-feedback text-start"
                  >
                    {{ emailErrors }}
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                        class="form-control"
                        :class="{ 'is-invalid': passwordErrors }"
                        id="inputPassword"
                        type="password"
                        v-model="password"
                        placeholder="Create a password"
                      />
                      <label for="inputPassword">Password</label>
                      <div
                        id="validationServer05Feedback"
                        class="invalid-feedback text-start"
                      >
                        {{ passwordErrors }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-4 mb-0">
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary btn-block">
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer text-center py-3">
              <div class="small">
                <a href="#"
                  ><router-link to="/login"
                    >Have an account? Go to login</router-link
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

<script src="../js/Register.js"></script>

<style lang="stylus" scoped></style>
