<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto">
        <a href=""><router-link to="/">CodeMentor</router-link></a>
      </h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li>
            <router-link to="/" class="active">Home</router-link>
          </li>

          <li class="">
            <router-link to="/courses" class="">Courses</router-link>
          </li>
        </ul>
      </nav>
      <!-- .navbar -->
      <div class="" v-if="auth == true">
        <router-link
          @click.prevent="logOut()"
          to="#"
          class="get-started-btn bg-danger text-light"
          >Log Out</router-link
        >
        <router-link to="#" class="get-started-btn"
          ><i class="fa-regular fa-user me-2"></i
          >{{ user.toUpperCase() }}</router-link
        >
      </div>
      <div class="" v-else>
        <router-link to="/register" class="get-started-btn bg-danger text-light"
          >Register</router-link
        >
        <router-link to="/login" class="get-started-btn">Login</router-link>
      </div>
    </div>
  </header>
  <!-- End Header -->
</template>

<script src="../js/nav.js"></script>
