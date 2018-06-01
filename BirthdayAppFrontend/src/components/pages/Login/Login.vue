<template>
<div>
  <h1>Login!</h1>
  <p v-if="usernameErr" style="color: red;">Invalid username!</p>
  <p v-if="passwordErr" style="color: red;">Invalid password!</p>
  <p>User Name: <v-text-field type="text" v-model="credentials.username" style="border: solid 1px black;"></v-text-field></p>
  <p>Password: <v-text-field type="password" v-model="credentials.password" style="border: solid 1px black;"></v-text-field></p>
  <v-btn @click.native="authenticate()">Submit</v-btn>
</div>
</template>
<script>
  import Axios from 'axios'
import router from '@/router'
const BirthdayAPI = `http://localhost:8081/api`

export default {

    data () {
        return {
            credentials: { username: '', password: '' },
            usernameErr: false,
            passwordErr: false,
        }
    },

    user: {isAuthenticated: false},
    
  methods: {
    authenticate (context, credentials, redirect) {
        this.usernameErr = false;
        this.passwordErr = false;
        console.log("Auth route hit, credentials: ", this.credentials)
        Axios.post(`${BirthdayAPI}/login`, this.credentials)
        .then(data => {
          let res = data.data;
          console.log('Login return data: ', res);
          if (res.success) {
            console.log('Logged in successfully!!!')
            router.push('checkBirthday');
          } else if (res.message === 'Invalid username!') {
            this.usernameErr = true;
          } else if (res.message === 'Invalid password!') {
            this.passwordErr = true;
          }
        })
        .catch(err => {
          console.log('Login ERROR: ', err);
        })
    }
  }
}
</script>