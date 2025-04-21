function validator(request) {
    const method = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /^[\w.]+$/gm;
    let messageRegex = /^[^<>\\&'"]*$/;

    if (!method.includes(request.method)) {
        throw Error('Invalid request header: Invalid Method');
    }
    if (!(request.uri && (request.uri === '*' || uriRegex.test(request.uri)))) {
        throw Error('Invalid request header: Invalid URI')
    }
    if (!versions.includes(request.version)) {
        throw Error('Invalid request header: Invalid Version');
    }
    if (!(request.hasOwnProperty('message') && (request.message === '' || messageRegex.test(request.message)))) {
        throw Error('Invalid request header: Invalid Message')
    }

    return request
}

console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

validator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});