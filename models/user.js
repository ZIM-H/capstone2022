module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
      uId: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: true
      },
      pw: {
        type: DataTypes.STRING(256),
        allowNull: false
      },
    })
    user.associate = (models) => {
    }
    return user
  }