var Scrambler = {};

Scrambler.doForNodes = function(matchFunc, doIfMatchFunc, node) {
	if (typeof(node) == 'undefined') node = document;
	if (matchFunc(node)) {
		doIfMatchFunc(node);
	}
	if (node.childNodes) {
		for (var i = 0; i < node.childNodes.length; i++) {
			Scrambler.doForNodes(matchFunc, doIfMatchFunc, node.childNodes[i]);
		}
	}
};

Scrambler.isTextNode = function(node) {
	var TEXT_NODE = node.TEXT_NODE || 3;
	return node.nodeType == TEXT_NODE;
};

Scrambler.scrambleWordsInTextNode = function(textNode) {
	textNode.data = Scrambler.scrambleText(textNode.data);
};

Scrambler.scrambleText = function(text) {
	var words = text.match(/(\w+)|(\W+)/g);
	var scrambledWords = [];
	for (var i = 0; i < words.length; i++) {
		if (words[i].match(/\w+/)) {
			scrambledWords.push(Scrambler.scrambleWord(words[i]));
		} else {
			scrambledWords.push(words[i]);
		}
	}
	return scrambledWords.join('');
};

Scrambler.scrambleWord = function(word) {
	if (word.length <= 2) return word;
	var wordArr = [];
	for (var i = 0; i < word.length; i ++) {
		wordArr.push(word.substr(i,1));
	}
	var firstLetter = wordArr.splice(0, 1);
	var lastLetter = wordArr.splice(wordArr.length - 1, 1);
	var outputArr = [];
	outputArr.push(firstLetter);
	while (wordArr.length) {
		outputArr.push(wordArr.splice(parseInt(Math.random() * wordArr.length), 1));
	}
	outputArr.push(lastLetter);
	return outputArr.join('');
}

Scrambler.scramble = function() {
	Scrambler.doForNodes(Scrambler.isTextNode, Scrambler.scrambleWordsInTextNode);
};

Scrambler.scramble();