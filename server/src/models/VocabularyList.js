module.exports = (sequelize, DataTypes) => {
    
    const Word = sequelize.define('Word', {
        japanese: DataTypes.STRING,
        hiragana: DataTypes.STRING,
        romaji: DataTypes.STRING,
        translation: DataTypes.TEXT,
    })

    const VocabularyList = sequelize.define('VocabularyList', {
        title: DataTypes.STRING,
        mainText: DataTypes.TEXT,
        difficulty: DataTypes.STRING
    })

    Word.belongsTo(VocabularyList)

    return VocabularyList

}
