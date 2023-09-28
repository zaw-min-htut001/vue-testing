import axios from "axios";
import { mapGetters } from 'vuex';

export default {
  name: "AllCourses",
  data() {
    return {
      allCourseList: {},
      allCategoryList: {},
      searchKey:""
    };
  },
  computed: {
      ...mapGetters(['getUser' , 'authenticated']),
    },
  methods: {
    getAllCourse() {
      axios.get("http://localhost:8000/api/course/list").then((response) => {
        for (let i = 0; i < response.data.getAllCourse.length; i++) {
          response.data.getAllCourse[i].image =
            "http://localhost:8000/storage/web_img/" +
            response.data.getAllCourse[i].image;
        }
        this.allCourseList = response.data.getAllCourse;
      });
    },

    // Get Category
    getAllCategory() {
      axios.get("http://localhost:8000/api/category/list").then((response) => {
        this.allCategoryList = response.data.getAllCategory;
      });
    },

    // Get Lesson
    getAllLesson(id) {
      this.$router.push({
        path: "/courseDetails",
        query: {
          course_id: id,
        },
      });
    },
    //search
    search() {
      let search = {
        key: this.searchKey,
      };
      axios.post("http://localhost:8000/api/category/search", search).then((response) => {
        
           for (let i = 0; i < response.data.data.length; i++) {
          response.data.data[i].image =
            "http://localhost:8000/storage/web_img/" +
            response.data.data[i].image;
        }
        this.allCourseList = response.data.data;
        
        
      });
    },

    // search Category
    searchCategory(searchData) {
      let search = {
        key: searchData,
      };
      axios.post("http://localhost:8000/api/post/search/", search).then((response) => {
       
           for (let i = 0; i < response.data.data.length; i++) {
          response.data.data[i].image =
            "http://localhost:8000/storage/web_img/" +
            response.data.data[i].image;
        }
        this.allCourseList = response.data.data;
      });
    },

    // back
      back() {
          history.back();
    },
      
     
  },
  mounted() {
    this.getAllCourse();
    this.getAllCategory();
  },
};