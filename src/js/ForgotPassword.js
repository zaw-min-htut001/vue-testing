import axios from 'axios';

export default {
    name: "ForgotPassword",
    
    data() {
    return {
      email: '',
      success: false,
      error: null,
      status : null
    };
    },
    
    methods: {
      async submitForm() {
      this.status= true
    try {
        const response = await axios.post('http://localhost:8000/api/forgot-password/', {
          email: this.email,
        });
        console.log(response.data);
      this.success = true;
      this.status= false
    } catch (error) {
        this.error = error.response.data.errors;
    }
    },
    }
};