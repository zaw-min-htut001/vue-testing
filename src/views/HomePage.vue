<template>
  <div>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex justify-content-center align-items-center">
      <div
        class="container position-relative"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1 class="text-start">Learning Today,<br />Leading Tomorrow</h1>

        <router-link to="/courses"
          ><a href="" class="btn-get-started d-flex col-2 justify-content-start"
            >Get Started</a
          ></router-link
        >
      </div>
    </section>
    <!-- End Hero -->
    <main id="main">
      <!-- ======= Counts Section ======= -->
      <section id="counts" class="counts section-bg">
        <div class="container">
          <div class="row counters justify-content-center">
            <div class="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1232"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Students</p>
              <span class="fs-2">{{ studentCount }}</span>
            </div>

            <div class="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="64"
                data-purecounter-duration="1"
                class="purecounter"
              ></span>
              <p>Courses</p>
              <span class="fs-2">{{ courseCount }}</span>
            </div>
          </div>
        </div>
      </section>
      <!-- End Counts Section -->

      <!-- ======= Popular Courses Section ======= -->
      <section id="popular-courses" class="courses">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Courses</h2>
            <p>Popular Courses</p>
          </div>

          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch"
              v-for="(allCourse, index) in allCourseList"
              :key="index"
            >
              <div class="course-item">
                <img
                  :src="allCourse.image"
                  class="img-fluid img-thumbnail h-50"
                  alt="..."
                />
                <div class="course-content">
                  <div
                    class="d-flex justify-content-between align-items-center mb-3"
                  >
                    <h4>{{ allCourse.category_name }}</h4>
                  </div>

                  <h3>
                    <a @click="getAllLesson(allCourse.id)">{{
                      allCourse.name
                    }}</a>
                  </h3>
                  <p>{{ allCourse.content.slice(0, 100) }}...</p>
                </div>
              </div>
            </div>
            <!-- End Course Item-->
          </div>
        </div>
      </section>
      <!-- End Popular Courses Section -->

      <!-- End Trainers Section -->
    </main>

    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>Mentor</h3>
              <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>
                  <router-link to="/courses">Courses</router-link>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" /><input
                  type="submit"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container d-md-flex py-4">
        <div class="me-md-auto text-center text-md-start">
          <div class="copyright">
            &copy; Copyright <strong><span>Mentor</span></strong
            >. All Rights Reserved
          </div>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ -->
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div class="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<script src="../js/HomePage.js"></script>
