<template>
  <div>
    <main id="main">
      <!-- ======= Breadcrumbs ======= -->
      <div class="breadcrumbs" data-aos="fade-in">
        <div class="container">
          <h2>Course Details</h2>
        </div>
      </div>
      <!-- End Breadcrumbs -->
      <div class="col-2 mt-2">
        <button @click="back()" class="btn btn-dark">
          <i class="fa-solid fa-circle-left text-light me-3"></i>Back
        </button>
      </div>
      <!-- ======= Cource Details Section ======= -->
      <section id="course-details" class="course-details">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-8">
              <img :src="myData.image" class="img-fluid" alt="" />
              <h3>{{ myData.name }}</h3>
              <p>
                {{ myData.content }}
              </p>
            </div>
            <div class="col-lg-4">
              <!-- ======= Cource Details Tabs Section ======= -->
              <section id="cource-details-tabs" class="cource-details-tabs">
                <div class="container" data-aos="fade-up">
                  <h1 class="text-start mb-3">Course Outlines</h1>
                  <div class="row">
                    <div class="col-lg-10">
                      <ul class="nav nav-tabs flex-column">
                        <li
                          class="nav-item"
                          v-for="(item, index) in lessonData"
                          :key="index"
                        >
                          <a class="nav-link active show">{{ item.name }}</a>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-start">
                      <button
                        class="btn btn-outline-dark"
                        @click="getLessonVideo(myData.id)"
                      >
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <!-- End Cource Details Tabs Section -->
            </div>
          </div>
        </div>
      </section>
      <!-- End Cource Details Section -->
    </main>
    <!-- End #main -->
  </div>
</template>

<script src="../js/CourseDetails.js"></script>

<style lang="stylus" scoped></style>
