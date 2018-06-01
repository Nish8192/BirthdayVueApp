<template>
<div>
  <h1>Enter your birthday!</h1>
  <v-date-picker v-model="birthday" :reactive="true" color="green lighten-1" full-width landscape></v-date-picker>
  <br>
  <v-btn @click.native="checkBirthday()">Check Birthday</v-btn>
  <v-btn @click.native="reset()">Reset</v-btn>
<br>
  <div v-if="resReceived">
      <br>
      <p style="font-size: 1.3em;">You were born on <span style="font-weight: bold; color: green;">{{ formattedBirthday }}</span>!</p>
        <p style="font-size: 1.3em;">You should avoid the following foods on your birthday:</p>
      <br>

      <div v-if="allergies.apples" style="display: inline-block;">
        <img src="../../../assets/images/apples.jpeg" alt="Apples">
        <p>Apples</p>
      </div>

      <div v-if="allergies.beans" style="display: inline-block;">
        <img src="../../../assets/images/beans.jpeg" alt="Beans">
        <p>Beans</p>
      </div>

      <div v-if="allergies.bread" style="display: inline-block;">
        <img src="../../../assets/images/bread.jpeg" alt="Bread">
        <p>Bread</p>
      </div>

      <div v-if="allergies.cheese" style="display: inline-block;">
        <img src="../../../assets/images/cheese.jpeg" alt="Cheese">
        <p>Cheese</p>
      </div>

      <div v-if="allergies.corn" style="display: inline-block;">
        <img src="../../../assets/images/corn.jpeg" alt="Corn">
        <p>Corn</p>
      </div>

      <div v-if="allergies.lettuce" style="display: inline-block;">
        <img src="../../../assets/images/lettuce.jpg" alt="Lettuce">
        <p>Lettuce</p>
      </div>

      <div v-if="allergies.milk" style="display: inline-block;">
        <img src="../../../assets/images/milk.jpeg" alt="Milk">
        <p>Milk</p>
      </div>

      <div v-if="allergies.salt" style="display: inline-block;">
        <img src="../../../assets/images/salt.jpeg" alt="Salt">
        <p>Salt</p>
      </div>

      <div v-if="allergies.shrimp" style="display: inline-block;">
        <img src="../../../assets/images/shrimp.jpeg" alt="Shrimp">
        <p>Shrimp</p>
      </div>

      <div v-if="allergies.sugar" style="display: inline-block;">
        <img src="../../../assets/images/sugar.jpeg" alt="Sugar">
        <p>Sugar</p>
      </div>
  </div>
</div>
</template>
<script>
  import Axios from 'axios'
import router from '@/router'
const BirthdayAPI = `http://${window.location.hostname}:8081/api`

export default {

    data () {
        return {
            birthday: '1992-08-01',
            resReceived: false,
            allergies: {
                apples: false,
                beans: false,
                bread: false,
                cheese: false,
                corn: false,
                lettuce: false,
                milk: false,
                salt: false,
                shrimp: false,
                sugar: false,
            },
            formattedBirthday: '',
        }
    },
    
  methods: {
    checkAuth () {
        console.log('Checking auth...')
        Axios.get(`${BirthdayAPI}/isLoggedIn`)
        .then (data => {
            let res = data.data;
            console.log('Check auth results: ', res);
            if (!res.success) {
                router.push('');
            }
        })
    },
    checkBirthday (context, credentials, redirect) {
            this.resReceived = false;        
        console.log("checkBirthday route hit, birthday: ", this.birthday)
        Axios.post(`${BirthdayAPI}/checkBirthday`, {birthday: this.birthday})
        .then(data => {
            let res = data.data;
            console.log(res);
            this.resReceived = true;
            this.allergies = res.allergies;
            this.formattedBirthday = res.birthday;
        })
    },
    reset () {
        this.birthday = '1992-08-01';
            this.resReceived = false;
            this.allergies = {
                apples: false,
                beans: false,
                bread: false,
                cheese: false,
                corn: false,
                lettuce: false,
                milk: false,
                salt: false,
                shrimp: false,
                sugar: false,
            };
            this.formattedBirthday = '';
    },
    // mounted: function() {
    //     this.checkAuth();
    // },
  }
}
</script>

<style>
    .picker__title {
        color: black !important;
    }
    img {
        width: 275px;
        height: 183px;
        object-fit: cover;
    }
</style>