import axios from 'axios';

export default {
    name: "ResetPassword",
    
    data () {
        return {
            email :'' ,
            password: '',
            password_comfirmation : '' ,
            success: false,
            error: null,
        }
    },


    methods: {
        async submitForm() {
    try {
        const response = await axios.post('http://localhost:8000/api/resetPassword/', {
            email: this.email ,
            password: this.password,
            password_comfirmation: this.password_comfirmation,
            token: this.$route.query.token 
            
        });
        console.log(response.data);
        this.success = true;
        this.$router.push({name:"login"})
    } catch (error) {
        this.error = error.response.data.errors;
    }
        },
    },
};