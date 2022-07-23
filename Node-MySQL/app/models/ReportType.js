'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ReportType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ReportType.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        description: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notNull: { msg: "Description required!" }
            }
        }
    }, {
        sequelize,
        modelName: 'ReportType',
        tableName: 'ReportType',
        timestamps: false
    });
    return ReportType;
};