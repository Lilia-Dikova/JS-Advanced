import { get, post , put, del } from './request.js';

const endpoints = {
    dashboard: '/data/motorcycles?sortBy=_createdOn%20desc',
    allMotors: '/data/motorcycles',
    motorById: '/data/motorcycles/'
};

export async function getAllMotors () {
    return get (endpoints.dashboard);
}
export async function getMotorById (id) {
    return get (endpoints.motorById + id);
}

export async function createMotor (model,imageUrl,year, mileage,contact,about) {
    return post (endpoints.allMotors, {
        model,
        imageUrl,
        year,
        mileage,
        contact,
        about
    });
};

export async function updateMotor (id, data) {
    return put(endpoints.motorById + id, data);
}

export async function deleteMotor (id) {
    return del (endpoints.motorById + id);
}