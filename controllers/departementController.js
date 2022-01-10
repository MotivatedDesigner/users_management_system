const { User, Departement } = require('../models')

async function getDepartements(res) {
  const departements = await Departement.findAll({
    attributes: {

    },
    // include: {model: Departement, attributes : ['id', 'name']},
  })
  console.log(departements);
  res.render('departements', {departements})
} 

module.exports = {
  getDepartements
}