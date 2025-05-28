function cleanTags(tags){
    const normalizedTags = tags.map(tag => {
        let trimmedTag = tag.trim();
        let lowerCaseTag = trimmedTag.toLowerCase();
        let cleanTag = '';
        for(let char of lowerCaseTag){
            if((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')){
                cleanTag += char;
            }
        }
        return cleanTag;
    });
    const uniqueTags = [...new Set(normalizedTags)];
    return uniqueTags.join(', ')
}
const tags = [
    " JavaScript ",
    "python",
    "JAVASCRIPT",
    " machine-learning",
    "Python  ",
    " Data Science!",
    "machine_learning"
  ];
  const cleanedTags = cleanTags(tags);
  console.log(cleanedTags)