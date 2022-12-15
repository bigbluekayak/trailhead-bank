'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Rates', [
      {
        min: 100,
        max: 10000,
        term: 12,
        rate: 0.027,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 18,
        rate: 0.026,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 24,
        rate: 0.025,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 30,
        rate: 0.024,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 36,
        rate: 0.023,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 42,
        rate: 0.022,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 48,
        rate: 0.021,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 12,
        rate: 0.017,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 18,
        rate: 0.016,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 24,
        rate: 0.015,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 30,
        rate: 0.014,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 36,
        rate: 0.013,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 42,
        rate: 0.012,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 48,
        rate: 0.011,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Rates', null, {});
  }
};
