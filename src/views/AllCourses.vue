<template>
  <div>
    <main>
      <div class="breadcrumbs" data-aos="fade-in">
        <div class="container">
          <h2>Courses</h2>
        </div>
      </div>
      <div class="container">
        <!--  -->
        <div class="row">
          <div class="col-2">
            <button @click="back()" class="btn btn-dark mt-2">
              <i class="fa-solid fa-circle-left text-light me-3 mt-1"></i>Back
            </button>
          </div>
          <!-- search  -->
          <div class="input-group col-6 offset-7 w-25 mb-3 mt-2">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              class="form-control"
              v-model="searchKey"
              v-on:keyup.enter="search()"
            />
            <button class="btn btn-success" @click="search()">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="container text-center mt-2">
        <div class="row">
          <div class="col">
            <button
              @click="searchCategory('')"
              class="p-3 btn btn-outline-success rounded-pill"
            >
              All
            </button>
          </div>
          <div
            class="col"
            v-for="(item, index) in allCategoryList"
            :key="index"
          >
            <button
              class="p-3 btn btn-outline-success rounded-pill"
              @click="searchCategory(item.category_name)"
            >
              {{ item.category_name }}
            </button>
          </div>
        </div>
      </div>
      <!-- ======= Popular Courses Section ======= -->
      <section id="popular-courses" class="courses">
        <div class="container" data-aos="fade-up">
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div class="text-danger" v-if="allCourseList.length == 0">
              <h1>Hmmm , Not Found !</h1>
            </div>
            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch"
              v-for="(allCourse, index) in allCourseList"
              :key="index"
              v-else-if="allCourseList.length != 0"
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
    </main>
  </div>
</template>

<script src="../js/AllCourses.js"></script>

<style lang="stylus" scoped></style>
