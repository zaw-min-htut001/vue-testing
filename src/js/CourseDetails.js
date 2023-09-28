import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    name: "CourseDetails",
    
    data () {
        return {
            courseId: 0,
            myData: {},
            lessonData: {},
        };
    },
     computed: {
      ...mapGetters(['getToken' ,'getUser' ,'authenticated']),
    },
    
    methods: {
        getCourse(id) {
            let course_id = {
              course_id :id  ,
            };
            axios.post('http://localhost:8000/api/course/' , course_id)
                .then((response) => {
                        response.data.getCourse.image =
                        "http://localhost:8000/storage/web_img/" + response.data.getCourse.image;
                    this.myData = response.data.getCourse;      
                });
        },
         // back
      back() {
          history.back();
    },
      

        // get All lesson
        getAllLesson(id) {
            let lesson_id = {
              lesson_id :id  ,
            };
            axios.post('http://localhost:8000/api/lesson/' , lesson_id ,{headers: {
                      Authorization :'Bearer ' + this.getToken
                    }
                  })
                .then((response) => {
                    for (let i = 0; i < response.data.getAllLesson.length; i++) {
                        response.data.getAllLesson[i].file_name =
                        "http://localhost:8000/storage/videos/" + response.data.getAllLesson[i].file_name;
                        
                    }
                    this.lessonData = response.data.getAllLesson;
                });
        },

      // Lesson video Get
        getLessonVideo(id) {
            this.$router.push({
                path: '/videoLesson',
                query: {
                    lesson_id :id
                }
            });
        }
    },
    mounted () {
        this.courseId = this.$route.query.course_id;
        this.getCourse(this.courseId);
        this.getAllLesson(this.courseId);
    }
};