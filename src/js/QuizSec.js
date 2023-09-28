import axios from 'axios';
import { mapGetters } from 'vuex';


export default {
    name: "QuizSection",
    data() {
        return {
            quizId: 0,
            lessonQuiz: [],
            quizMessage :""
        };
    },
     computed: {
      ...mapGetters(['getToken' ,'getUser']),
    },
   methods: {
      //quiz
    getAllQuiz(id) {
       let quiz_id = {
              quiz_id :id  ,
            };
            axios.post('http://localhost:8000/api/quiz/' , quiz_id ,{headers: {
                      Authorization :'Bearer ' + this.getToken
                    }
                  })
                .then((response) => {
                    this.lessonQuiz = response.data.getAllQuiz;
                });
    },

       // submit quiz
     submitQuiz() {
      let score = 0;
      for (let quiz of this.lessonQuiz) {
        if (quiz.selectedOption === quiz.answer) {
          score++;
        }
      }
          this.quizMessage = `Your score is: ${score}/${this.lessonQuiz.length}`;
      // reset selected options
      for (let quiz of this.lessonQuiz) {
        quiz.selectedOption = null;
      }
    }
    },
   
   mounted () {
        this.quizId = this.$route.query.quiz_id;
       this.getAllQuiz(this.quizId);
   }
    
};

