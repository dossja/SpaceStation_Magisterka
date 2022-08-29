'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Incidents extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Incidents.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        reportId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: 'Reports',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Incidents',
        tableName: 'Incidents',
        timestamps: false
    });

    Incidents.associate = function (models) {
        Incidents.belongsTo(models.Users, { foreignKey: 'userId' })
        Incidents.belongsTo(models.Reports, { foreignKey: 'reportId' })
    };

    return Incidents;
};