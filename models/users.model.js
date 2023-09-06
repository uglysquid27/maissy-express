'use strict';
const bcrypt = require('bcrypt');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	const Events = sequelize.define('events', { timestamps: false });
	const Users = sequelize.define(
		'users',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			email: {
				type: DataTypes.STRING,
			},
			password: {
				type: DataTypes.STRING,
			},
			name: {
				type: DataTypes.STRING,
			},
			role: {
				type: DataTypes.ENUM(['User', 'Super']),
				defaultValue: 'User',
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		},
		{
			hooks: {
				beforeCreate: async (user) => {
					if (user.password) {
						const salt = await bcrypt.genSaltSync(10, 'a');
						user.password = bcrypt.hashSync(user.password, salt);
					}
				},
			},
		},
		{ tableName: 'users' }
	);
	Users.hasMany(Events);
	// class users extends Model {
	// 	/**
	// 	 * Helper method for defining associations.
	// 	 * This method is not a part of Sequelize lifecycle.
	// 	 * The `models/index` file will call this method automatically.
	// 	 */
	// 	static associate(models) {
	// 		// define association here
	// 	}
	// }
	// users.init(
	// 	{
	// 		email: DataTypes.STRING,
	// 		password: DataTypes.STRING,
	// 		name: DataTypes.STRING,
	// 		role_id: DataTypes.ENUM,
	// 	},
	// 	{
	// 		sequelize,
	// 		modelName: 'users',
	// 	}
	// );
	return Users;
};
