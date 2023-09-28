<template>
  <div>
    <main id="main">
      <!-- ======= Breadcrumbs ======= -->
      <div class="breadcrumbs" data-aos="fade-in">
        <div class="container">
          <h2>Course</h2>
        </div>
      </div>
      <!-- End Breadcrumbs -->
      <div class="row container-fluid mt-3">
        <div class="col-lg-3 col-md-4">
          <ol class="list-group list-group-numbered">
            <!-- lesson video -->
            <li
              v-for="(item, index) in lessonVideo"
              :key="index"
              @click="playVid(item.file_name)"
              class="list-group-item list-group-item-action list-group-item-primary d-flex justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">{{ item.lesson_name }}</div>
                {{ item.name }}
              </div>
            </li>

            <!-- quiz section -->
            <li
              class="list-group-item list-group-item-action list-group-item-primary d-flex justify-content-between align-items-start"
              @click="quizSection(lessonId)"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold">Quiz Section</div>
                Take A Quiz
              </div>
            </li>
          </ol>
        </div>

        <div class="col-lg-9 col-md-10">
          <div class="course-player">
            <iframe
              width="100%"
              height="400px"
              :src="file_name"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script src="../js/videoLesson.js"></script>
