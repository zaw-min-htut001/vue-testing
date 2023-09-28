import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    name: "LoginPage",
    data() {
    return {
      email: '',
      password: '',
      emailErrors: '',
      passwordErrors :''
    }
  },
  computed: {
      ...mapGetters(['getToken' ,'getUser' , 'authenticated']),
    },
  methods: {

    //
    login() {
      axios.post('http://localhost:8000/api/login/', {
        email: this.email,
        password: this.password,
      })
        .then(response => {
          localStorage.setItem('token', response.data.token);
           localStorage.setItem('user', JSON.stringify(response.data.data));
          this.$store.dispatch('setToken', response.data.token);
          this.$store.dispatch('setUser', response.data.data);  
          this.$store.dispatch('authUser', true);  
          this.$router.push({name:"home"})
      })
      .catch(error => {
        console.log(error);
        if (error.response && error.response.status === 401) {
                this.emailErrors = error.response.data.errors;
                this.passwordErrors = error.response.data.errors;
            } else {
                this.emailErrors = '' ,
                this.passwordErrors = '' ,     
                console.log(error.message);
            }
      });
    }

    
  }
};