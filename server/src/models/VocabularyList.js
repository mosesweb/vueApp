module.exports = (sequelize, DataTypes) => {

    const VocabularyList = sequelize.define('VocabularyList', {
        title: DataTypes.STRING,
        mainText: DataTypes.TEXT,
        difficulty: DataTypes.STRING,
        UserId: DataTypes.INTEGER
    })

    VocabularyList.associate = function (models) {
        VocabularyList.hasMany(models.Word)
    }
    return VocabularyList
}
