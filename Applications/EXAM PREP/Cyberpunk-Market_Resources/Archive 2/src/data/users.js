import { clearUserData, setUserData } from '../util.js';
import { get, post } from './request.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
};

//Adapt user profile to exam requirements

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    setUserData(result);
}

export async function register(email, password) {
    const result = await post(endpoints.register, { email, password });
    setUserData(result);
}

export async function logout() {
    const promise = get(endpoints.logout);
    clearUserData();
    await promise;
}

