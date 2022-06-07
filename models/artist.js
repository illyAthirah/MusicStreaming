module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define('Artist', {
        artistID:{
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        artistName: DataTypes.STRING,
        artistAge: DataTypes.STRING,
        artistGender: DataTypes.STRING,
        category: DataTypes.STRING
    });
        
    Artist.associate = function(models) {
        Artist.hasMany(models.Album)
    }

    return Artist;
};