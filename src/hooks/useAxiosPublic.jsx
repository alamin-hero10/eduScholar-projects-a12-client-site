import axios from 'axios';

// ---axiosPublic---
const axiosPublic = axios.create({
    baseURL: "http://localhost:5100"
})

// ---useAxiosPublic---
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;