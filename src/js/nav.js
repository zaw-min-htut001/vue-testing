import { mapGetters } from "vuex";
import axios from 'axios';

export default {
    name: "NavBar",
  
    computed: {
        ...mapGetters(['getToken', 'getUser', 'authenticated']),
        user() {
            return this.getUser.name;
        },
        auth() {
            return this.authenticated;
        }
    },
    
   methods: {
    logOut () {
        axios.post('http://localhost:8000/api/logout',null,{
              headers: {
                      Authorization :'Bearer ' + this.$store.state.token
                    }
                  })
          .then(response => {
          localStorage.removeItem('token');
         localStorage.removeItem('user');
            console.log(response);
          this.$store.dispatch('setToken', '');
          this.$store.dispatch('setUser', {});  
          this.$store.dispatch('authUser', false);  
          this.$router.push({name:"home"})
      })
      .catch(error => {
        console.log(error);
        
      });
    }
   }
};
