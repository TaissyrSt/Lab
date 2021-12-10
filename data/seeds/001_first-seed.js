const profiles = [
  {
    name: 'Imen',
    lastname: 'lastname1'
  },
  {
    name: 'Aymen',
    lastname: 'lastname2'
  },
  {
    name: 'Feres',
    lastname: 'lastname3'
  },
  {
    name: 'Nadia',
    lastname: 'lastname4'
  },
  {
    name: 'Mohamed',
    lastname: 'lastname5'

  }
];
exports.seed = function (knex) {
  return knex('profiles').del()
    .then(() => {
      return knex('profiles').insert(profiles)
    })
};