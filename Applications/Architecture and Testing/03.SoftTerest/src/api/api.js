const host = 'http://localhost:3030';

async function request(method, url, data) {

    const options = {
        method,
        headers: {}
    }

    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    if (data != undefined) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const res = await fetch (host+url, options);


        if (!res.ok) {
            
            if (user && res.status == 403) {
                localStorage.removeItem('user');
            }

            const err = await res.json();
            throw new Error(err.message)
        }

        if (res.status == 204) {
            return res;
        } else {
            return res.json();
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

const get = request.bind( null, 'get');
const post = request.bind( null, 'post');
const put = request.bind( null, 'put');
const del = request.bind( null, 'delete');

export {
    get,
    post,
    put,
    del as delete
};

// window.api = {
//     request
// };