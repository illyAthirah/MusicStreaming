module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        songID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        songName: DataTypes.STRING,
        songDuration: DataTypes.TIME,
        genre: DataTypes.STRING
    });

    Song.associate = function(models) {
        Song.belongsTo(models.Album)
    }

    return Song;
};