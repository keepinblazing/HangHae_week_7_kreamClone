import axios from "axios";

const instance = axios.create({
  baseURL: "http://ec2-54-180-121-207.ap-northeast-2.compute.amazonaws.com:8080",
});

export default instance;
