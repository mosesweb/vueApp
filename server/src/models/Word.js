module.exports = (sequelize, DataTypes) => {

    const Word = sequelize.define('Word', {
        japanese: DataTypes.STRING,
        hiragana: DataTypes.STRING,
        romaji: DataTypes.STRING,
        translation: DataTypes.TEXT,
    })
    
    Word.associate = function (models) {
        Word.belongsTo(models.VocabularyList)
    }
    return Word
}