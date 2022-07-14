'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Missions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Missions.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: "StartDate required!" }
      }
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: "EndDate required!" }
      }
    },
  }, {
    sequelize,
    modelName: 'Missions',
    tableName: 'Missions',
    timestamps: false
  });
  Missions.associate = function (models) {
    Missions.belongsToMany(models.Users, { through: 'MissionCrew', foreignKey: 'missionId', as: 'Mission' });
  };
  return Missions;
};