# Description

There have been various versions of an email going around indicating that a study has been done at some university proving that your mind reads words not letters and can therefore read scrambled words easily as long as the first and last letters remain in place. I don't think it's a real study and there are plenty of flaws with the claim (Google it if you care). But, it's still kind of fun to scramble some text and try to read it.

# Instructions

This tool will scramble text on any web page. To use, go to a web page you want to scramble. Then paste this into your address bar and hit enter. You can also add this code as a bookmark that you can simply click when you are on the page you want to translate.

	javascript:(function(){var c={};c.doForNodes=function(a,d,b){typeof b=="undefined"&&(b=document);a(b)&&d(b);if(b.childNodes)for(var e=0;e<b.childNodes.length;e++)c.doForNodes(a,d,b.childNodes[e])};c.isTextNode=function(a){return a.nodeType==(a.TEXT_NODE||3)};c.scrambleWordsInTextNode=function(a){a.data=c.scrambleText(a.data)};c.scrambleText=function(a){for(var a=a.match(/(\w+)|(\W+)/g),d=[],b=0;b<a.length;b++)a[b].match(/\w+/)?d.push(c.scrambleWord(a[b])):d.push(a[b]);return d.join("")};c.scrambleWord=function(a){if(a.length<=2)return a;for(var d=[],b=0;b<a.length;b++)d.push(a.substr(b,1));var a=d.splice(0,1),b=d.splice(d.length-1,1),c=[];for(c.push(a);d.length;)c.push(d.splice(parseInt(Math.random()*d.length),1));c.push(b);return c.join("")};c.scramble=function(){c.doForNodes(c.isTextNode,c.scrambleWordsInTextNode)};c.scramble()})();
 
# Generating the bookmark

1. Copy the contents of [Scrambler.js](https://github.com/dmcquay/WebScrambler/raw/master/Scrambler.js)
2. Go to [Google's Closure Complier](http://closure-compiler.appspot.com/home) and paste this code
3. Wrap the code in an anonymous function and call it like this --> (function(){ ... code here ... })();
4. Compile the code
5. The output may be on several lines. You'll need to make it just one line so that it will work as a bookmark
6. Prefix the resulting code with "javascript:" (sans the quotes)