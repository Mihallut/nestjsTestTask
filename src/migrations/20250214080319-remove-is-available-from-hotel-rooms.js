'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('HotelRooms', 'isAvailable');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('HotelRooms', 'isAvailable', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    });
  },
};