const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('Videos', {
    src: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      description: {
        type: DataTypes.TEXT, 
        allowNull: true,
      },
      artista:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: null
      },
  },{timestamps:false});
};