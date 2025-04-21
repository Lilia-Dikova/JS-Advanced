import { get, post , put, del } from './request.js';

const endpoints = {
    dashboard: '/data/cyberpunk?sortBy=_createdOn%20desc',
    events: '/data/cyberpunk',
    eventById: '/data/cyberpunk/'
};

export async function getAllEvents () {
    return get (endpoints.dashboard);
}
export async function getEventById (id) {
    return get (endpoints.eventById + id);
}

export async function createEvent (item,imageUrl,price, availability,type, description) {
    return post (endpoints.events, {
        item,
        imageUrl, 
        price, 
        availability,
        type,
        description
    });
}

export async function updateEvent (id, data) {
    return put(endpoints.eventById + id, data);
}

export async function deleteEvent (id) {
    return del (endpoints.eventById + id);
}