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
    

    authenticate (context, credentials, redirect) {
        console.log("Auth route hit, credentials: ", credentials)
        Axios.post(`${BirthdayAPI}/login`, credentials)
        .then(data => {
            console.log(data);
        })
    }
}