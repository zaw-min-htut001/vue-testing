import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: "VideoLesson",
  data() {
    return {
        lessonId: 0,
        lessonVideo: [],
        file_name: "",
      };
  },
   computed: {
      ...mapGetters(['getToken' ,'getUser']),
    },
  methods: {
    //
       // get All lesson
      getLessonVideo(id) {
            let lesson_id = {
              lesson_id :id  ,
            };
            axios.post('http://localhost:8000/api/lesson/', lesson_id, {
              headers: {
                      Authorization :'Bearer ' + this.getToken
                    }
                  })
                .then((response) => {
                    for (let i = 0; i < response.data.getAllLesson.length; i++) {
                        response.data.getAllLesson[i].file_name =
                        "http://localhost:8000/storage/videos/" + response.data.getAllLesson[i].file_name;
                        
                    }
                    this.lessonVideo = response.data.getAllLesson;
               // Set the first video in the playlist as the default video to play
                  if (this.lessonVideo.length > 0) {
                    this.file_name = this.lessonVideo[0].file_name;
                  }    
                });
        },
      
      //
      playVid(file) {
          this.file_name = file;
    },
      
    
    // to quiz section
    quizSection(id) {
      this.$router.push({
        path: "/quiz",
        query: {
          quiz_id: id,
        },
      });
    },
   
  },
  mounted() {
   
    this.lessonId = this.$route.query.lesson_id;
    this.getLessonVideo(this.lessonId);
  },
};