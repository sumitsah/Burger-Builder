import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-7a449.firebaseio.com/'
});

export default instance;