import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
    name: "HomePage",
    data () {
        return {
            allCourseList: {},
            allCategoryList: {},
            studentCount: '',
            courseCount: '',
        };
    },
    // 
    computed: {
      ...mapGetters(['getUser' , 'authenticated' , ]),
    },
    methods: {
    getAllCourse () {
            axios.get('http://localhost:8000/api/course/list')
                .then((response) => {
                    for (let i = 0; i < response.data.getAllCourse.length; i++) {
                        response.data.getAllCourse[i].image =
                        "http://localhost:8000/storage/web_img/" + response.data.getAllCourse[i].image;
                        
                    }
                    this.allCourseList = response.data.getAllCourse;

            
                });
        },

    // Get Category
        getAllCategory() {
         axios.get('http://localhost:8000/api/category/list')
                .then((response) => {
                    
                    this.allCategoryList = response.data.getAllCategory;
                });
        },
        

        // Get Lesson
        getAllLesson(id) {
            this.$router.push({
                path: '/courseDetails',
                query: {
                    course_id :id
                }
            });
        },

        getAllStudent() {
            axios.post('http://localhost:8000/api/getStudentList')
                .then((response) => {
                    
                    this.studentCount = response.data.getStudentList;
                });
        },

         getAllCourseList() {
            axios.post('http://localhost:8000/api/getCourseList')
                .then((response) => {
                    
                    this.courseCount = response.data.getCourseList;
                });
        },
         
      
    },
    mounted () {
        this.getAllCourse();
        this.getAllCategory();
        this.getAllStudent();
        this.getAllCourseList();
    }
};