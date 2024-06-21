// Esse helper ele serve para permitir que apenas usuários autenticados entrem em certas rotas do sistema
module.exports = {
  eAdmin: function(req, res, next) {
    
    // Essa função também é gerada pelo passport
    if (req.isAuthenticated() && req.user.eAdmin == 1) {
      return next();
    }

    req.flash("error_msg", "Você precisa ser um Admin!")
    res.redirect("/")

  }
}