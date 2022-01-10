const { User, Departement } = require('../models')
async function getDepartements(res) {
  const departements = await Departement.findAll({
    attributes: {

    },
    include: {model: User},
  })
  res.render('departements', {departements})
} 

module.exports = {
  getDepartements
}