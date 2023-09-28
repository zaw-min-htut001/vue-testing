<template>
  <div>
    <div class="breadcrumbs" data-aos="fade-in">
      <div class="container">
        <h2>Forgot Password</h2>
      </div>
    </div>
    <div class="container mb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card shadow-lg border-0 rounded-lg mt-5">
            <div class="card-header">
              <h3 class="text-center font-weight-light my-4">
                Forgot Password
              </h3>
            </div>
            <div class="card-body">
              <span v-if="status === true">
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                Wait a moment ...</span
              >
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
                  <div class="mt-3">
                    <p v-if="success" class="text-start text-success">
                      Reset password email sent
                    </p>
                    <p v-else class="text-start text-danger">{{ error }}</p>
                  </div>
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

<script src="../js/ForgotPassword.js"></script>

<style lang="stylus" scoped></style>
