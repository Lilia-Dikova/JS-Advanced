import { html, render } from "../lib.js";
import {createSubmitHandler } from '../util.js'
import { login } from "../data/users.js";
import { page } from '../lib.js'

const loginTemplate = (onLogin) => html `
<section id="form-login" class="view-section">
        <form @submit=${onLogin}
          id="login-form"
          class="text-center border border-light p-5"
          action=""
          method=""
        >
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Email"
              name="email"
              value=""
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
              value=""
            />
          </div>

          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </section>
`

export function showLogin (ctx) {
    render (loginTemplate(createSubmitHandler(onLogin)))
}

export async function onLogin ({email, password}) {   

    await login(email,password);

    page.redirect('/')
};