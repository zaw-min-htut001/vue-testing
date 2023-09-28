import axios from 'axios';

export default {
    name: "RegisterPage",
    
    data () {
        return {
            name: '',
            email: '' ,
            password: '',            
            nameErrors: '',
            emailErrors : '' ,
            passwordErrors : '' ,            
        }
    },

    methods: {
        async handleRegister() {
            await axios.post('http://localhost:8000/api/register', {
                name: this.name,
                email: this.email,
                password: this.password,

            }).then(response => {
                console.log(response);
                this.$router.push('/login');
            })
            .catch(error => {
            console.log(error);
            if (error.response && error.response.status === 422) {
                this.nameErrors = error.response.data.errors[0];
                this.emailErrors = error.response.data.errors[1];
                this.passwordErrors = error.response.data.errors[2];
            } else {
                this.nameErrors= '',
                this.emailErrors = '' ,
                this.passwordErrors = '' ,     
                console.log(error.message);
            }
        });

        },
    }
};