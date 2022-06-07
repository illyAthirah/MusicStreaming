module.exports = (sequelize, DataTypes) => {
    const download = sequelize.define('download', {
         
        paymentMethod: DataTypes.STRING,
        
    });


    download.associate = function(models) {
        download.belongsTo(models.Listener),
        download.belongsTo(models.Album)
    }

    return download;
};