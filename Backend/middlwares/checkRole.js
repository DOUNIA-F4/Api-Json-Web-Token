module.exports = (requiredRole) => {
    return (req, res, next) => {
      
      if(req.profile.role !== requiredRole) {
        return res.status(401).end();
      } else {
        console.log('User meet required role, going to next middleware')
        console.log(req.token.data.club_id)
        return next();
      }
    }
  }