<template>
<div>
  <h1>Login!</h1>
  <p>User Name: <v-text-field type="text" v-model="credentials.username" style="border: solid 1px black;"></v-text-field></p>
  <p>Password: <v-text-field type="password" v-model="credentials.password" style="border: solid 1px black;"></v-text-field></p>
  <v-btn @click.native="authenticate()">Submit</v-btn>
</div>
</template>
<script>
  import Axios from 'axios'
import router from '@/router'
const BirthdayAPI = `http://${window.location.hostname}:8081/api`

export default {

    data () {
        return {
            credentials: { username: '', password: '' },
        }
    },

    user: {isAuthenticated: false},
    
  methods: {
    authenticate (context, credentials, redirect) {
        console.log("Auth route hit, credentials: ", this.credentials)
        Axios.post(`${BirthdayAPI}/login`, this.credentials)
        .then(data => {
            console.log(data);
        })
    }
  }
}
</script>