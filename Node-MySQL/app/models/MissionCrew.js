'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class MissionCrew extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    MissionCrew.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        missionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Missions',
                key: 'id'
            }
        }
    },
        {
            sequelize,
            modelName: 'MissionCrew',
            tableName: 'MissionCrew',
            timestamps: false
        });

    MissionCrew.associate = function (models) {
        MissionCrew.belongsTo(models.Users, { foreignKey: 'userId' })
        MissionCrew.belongsTo(models.Missions, { foreignKey: 'missionId' })
    };

    return MissionCrew;
};