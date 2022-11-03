const validateTeam = (req, res, next) => {
    const requiredProperties = ['nome', 'sigla'];
    if (requiredProperties.every((property) => property in req.body)) {
      next();
    } else {
      res.status(500).send({ message: err.message });
    };
  };
  
module.exports = validateTeam;