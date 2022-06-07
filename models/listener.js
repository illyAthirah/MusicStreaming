module.exports = (sequelize, DataTypes) => {
    const Listener = sequelize.define('Listener', {
        
        listenerName: DataTypes.STRING,
        email: DataTypes.STRING,
        listenerAge: DataTypes.INTEGER,
        listenerGender: DataTypes.STRING
    });

    Listener.associate = function(models) {
        Listener.hasMany(models.download);
    }

    return Listener;
};