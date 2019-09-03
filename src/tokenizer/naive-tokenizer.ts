function splitSentences(text: string): string[] {
    return text.split('. ');
}

function splitWords(sentence: string): string[] {
    return sentence.split(' ');
}

export default {
    sentence: splitSentences,
    word: splitWords,
}