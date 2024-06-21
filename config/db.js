if (process.env.NODE_ENV == "production") {
  module.exports = {mongoURI: "mongodb+srv://gustavosouza:5zNDSX2gidKYw0bi@souza-bloggapp.fyoc8on.mongodb.net/"}
} else {
  module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}