module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define('Album', {
         
        albumName: DataTypes.STRING,
        albumPrice: DataTypes.DOUBLE,
        releaseDate: DataTypes.DATEONLY,
        region: DataTypes.STRING,

    });


    Album.associate = function(models) {
        Album.hasMany(models.download),
        Album.belongsTo(models.Artist),
        Album.hasMany(models.Song)
    }

    return Album;
};