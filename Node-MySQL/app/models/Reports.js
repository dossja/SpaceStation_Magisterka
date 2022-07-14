'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reports.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notNull: { msg: "Title required!" }
      }
    },
    submitDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        notNull: { msg: "SubmitDate required!" }
      }
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reportTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ReportType',
        key: 'id'
      },
      validate: {
        notNull: { msg: "ReportTypeId required!" }
      }
    },
    reportStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ReportStatus',
        key: 'id'
      },
      validate: {
        notNull: { msg: "ReportStatusId required!" }
      }
    },
    reportingUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
      validate: {
        notNull: { msg: "ReportingUserId required!" }
      }
    }
  }, {
    sequelize,
    modelName: 'Reports',
    tableName: 'Reports',
    timestamps: false
  });
  Reports.associate = function (models) {
    Reports.belongsTo(models.ReportType, { foreignKey: 'reportTypeId', as: 'ReportType' });
    Reports.belongsTo(models.ReportStatus, { foreignKey: 'reportStatusId', as: 'ReportStatus' });
    Reports.belongsTo(models.Users, { foreignKey: 'reportingUserId', as: 'ReportingUser' });
  };
  return Reports;
};