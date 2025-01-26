import axios from 'axios';

// ---axiosPublic---
const axiosPublic = axios.create({
    baseURL: "https://edu-scholar-projects-a12-server-site.vercel.app"
})

// ---useAxiosPublic---
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;