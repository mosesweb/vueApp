module.exports = (sequelize, DataTypes) => {

    const VocabularyList = sequelize.define('VocabularyList', {
        title: DataTypes.STRING,
        mainText: DataTypes.TEXT,
        difficulty: DataTypes.STRING
    })

    VocabularyList.associate = function (models) {
        VocabularyList.hasMany(models.Word)
        VocabularyList.belongsTo(models.User)
    }
    return VocabularyList
}
