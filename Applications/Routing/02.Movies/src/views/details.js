import { getMoviesById } from "../data/movie_s.js";
import { html, render } from "../lib.js";
import { getUserData } from "../util.js";

const detailsTemplate = (movie, isOwner) => html `
<section id="movie-example" class="view-section">
        <div class="container">
          <div class="row bg-light text-dark">
            <h1>Movie title: ${movie.title}</h1>

            <div class="col-md-8">
              <img
                class="img-thumbnail"
                src="${movie.img}"
                alt="Movie"
              />
            </div>
            <div class="col-md-4 text-center">
              <h3 class="my-3">Movie Description</h3>
              <p>
                ${movie.description}
              </p>
              ${isOwner 
                ? html `
              <a class="btn btn-danger" href="#">Delete</a>
              <a class="btn btn-warning" href="#">Edit</a>
              `
                : html 
                `<a class="btn btn-primary" href="#">Like</a>`
                }
              <span class="enrolled-span">Liked 1</span>
            </div>
          </div>
        </div>
      </section>
`
export async function showDetails (ctx) {
    const movie = await getMoviesById(ctx.params.id)
    const userData = getUserData();

    const isOwner = userData && movie._ownerId == userData?._id

    render(detailsTemplate(movie, isOwner))
}