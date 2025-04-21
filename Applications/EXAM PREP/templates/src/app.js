import { page } from './lib.js';
import { displayContent } from './views/example.js';

// REMOVE THESE AFTER TESTING
import * as api from './data/request.js';
import * as userApi from './data/users.js';

page('/', displayContent);
page();

// REMOVE THESE AFTER TESTING
window.api = api;
window.userApi = userApi;