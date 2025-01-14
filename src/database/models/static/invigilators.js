const db = require('../../conn');
const DataTypes = db.DataTypes;
const sequelize = db.conn;

module.exports = sequelize.define(
	'invigilators',
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		name: {
			type: DataTypes.TEXT
		},
		psrn_no: {
			type: DataTypes.TEXT
		},
		dept: {
			type: DataTypes.TEXT
		},
		stat1: {
			type: DataTypes.TEXT
		},
		stat2: {
			type: DataTypes.TEXT
		},
		email: {
			type: DataTypes.TEXT
		},
		duties_to_be_alloted: {
			type: DataTypes.TEXT
		},
		mobile: {
			type: DataTypes.INTEGER
		}
	},
	{
		underscored: true,
		timestamps: true
	}
);
