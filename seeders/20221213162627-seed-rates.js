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
        rate: 2.7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 18,
        rate: 2.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 24,
        rate: 2.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 30,
        rate: 2.4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 36,
        rate: 2.3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 42,
        rate: 2.2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 100,
        max: 10000,
        term: 48,
        rate: 2.1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 12,
        rate: 1.7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 18,
        rate: 1.6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 24,
        rate: 1.5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 30,
        rate: 1.4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 36,
        rate: 1.3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 42,
        rate: 1.2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        min: 10001,
        max: 15000,
        term: 48,
        rate: 1.1,
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
