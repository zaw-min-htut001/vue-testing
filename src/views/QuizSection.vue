<template>
  <div>
    <main id="main">
      <!-- ======= Breadcrumbs ======= -->
      <div class="breadcrumbs" data-aos="fade-in">
        <div class="container">
          <h2>Quiz Section</h2>
        </div>
      </div>
      <!-- End Breadcrumbs -->
      <div class="container">
        <h4 class="text-start mt-3 fw-bolder">Multiple Choice</h4>
        <div class="text-danger" v-if="quizMessage === ''">
          0/{{ lessonQuiz.length }} (ungraded)
        </div>
        <div class="text-success" v-else>{{ quizMessage }}</div>

        <div class="text-start" v-for="quiz in lessonQuiz" :key="quiz.id">
          <h5 class="fst-italic">{{ quiz.question }}</h5>
          <div class="form-check">
            <ol
              v-for="option in [
                quiz.option_1,
                quiz.option_2,
                quiz.option_3,
                quiz.option_4,
              ]"
              :key="option"
            >
              <input
                class="form-check-input"
                type="radio"
                :name="quiz.id"
                :value="option"
                v-model="quiz.selectedOption"
              />
              <label class="form-check-label fw-bold">{{ option }}</label>
            </ol>
          </div>
          <hr />
        </div>
        <button
          @click="submitQuiz"
          class="btn btn-outline-success d-flex justify-content-start mb-5"
        >
          Submit
        </button>
      </div>
    </main>
  </div>
</template>

<script src="../js/QuizSec.js"></script>

<style lang="stylus" scoped></style>
