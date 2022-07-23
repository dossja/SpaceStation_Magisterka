'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: { msg: "Name required!" }
      }
    },
    surname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: { msg: "Surname required!" }
      }
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notNull: { msg: "Email required!" }
      }
    },
    manager: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: { msg: "IsManager required!" }
      }
    },
    positionTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'PositionType',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'Users',
    timestamps: false
  });
  Users.associate = function (models) {
    Users.belongsTo(models.PositionType, { foreignKey: 'positionTypeId' });
    Users.hasMany(models.Incidents, { foreignKey: 'userId' });
    Users.belongsToMany(models.Missions, { through: 'MissionCrew', foreignKey: 'userId', as: 'UserMissions' });
  };
  return Users;
};