import { api } from ".";
// import axios from 'axios'
// import { SERVER_URL } from "../utils/constants";

const prefix = 'auth'

export const signUp = async(data) => await api.post(`/${prefix}`, data)

export const logIn = async(data) => await api.post(`/${prefix}/sign-in`, data);

export const getMe = async() => await api.get(`/${prefix}/get-me`);