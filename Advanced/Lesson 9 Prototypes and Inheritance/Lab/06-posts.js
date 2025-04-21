function solution () {
    class Post {
        constructor (title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            let info =  [`Post: ${this.title}`, `Content: ${this.content}`]
            return info.join(`\n`)
        }
    }
    return {
        Post
    }
}
const classes = solution();

let post = new classes.Post("Post", "Content");

console.log(post.toString());