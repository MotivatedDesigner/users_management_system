'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('departements', [
    {
      name: 'physics',
      description: 'lal lal lala',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'chemistry',
      description: 'lal lal lala',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'math',
      description: 'lal lal lala',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'biology',
      description: 'lal lal lala',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('departements', null, {});
  }
};
