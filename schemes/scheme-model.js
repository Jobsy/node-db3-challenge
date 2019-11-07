const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    find,
    findById,
    findSteps,
    add,
    // update,
    // remove,
  };

 function find() {
    return db('schemes');
  }

  function findById(id) {
    return db('schemes').where({id}).first();
  }

  function findSteps (id) {
    // select schemes.id, schemes.scheme_name, steps.step_number, steps.instructions
    // from schemes
    // join steps on schemes.id = steps.step_number
    // where schemes.id = 2
    return db.select("schemes.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .from("schemes")
    .join("steps", "schemes.id", "=", "steps.step_number")
    // .where(`schemes.id = ${id}`)
    .where("schemes.id", "=", `${id}`)
  }

  function add(schemes) {
    return db('schemes')
      .insert(schemes)
      .then(ids => {
        return findById(ids[0]);
      });
  }