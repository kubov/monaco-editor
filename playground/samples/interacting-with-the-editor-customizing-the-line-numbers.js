// This is a generated file. Please do not edit directly.
var SAMPLES = this.SAMPLES || [];
SAMPLES.push({"id":"interacting-with-the-editor-customizing-the-line-numbers","js":"//---------------------------------------------------\n// Interacting with the editor > Customizing the line numbers\n//---------------------------------------------------\n\nfunction lineNumbersFunc(originalLineNumber) {\n\tvar map = [ 'O', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];\n\tif (originalLineNumber < map.length) {\n\t\treturn map[originalLineNumber];\n\t}\n\treturn originalLineNumber;\n}\n\nvar jsCode = [\n\t'\"use strict\";',\n\t'function Person(age) {',\n\t'\tif (age) {',\n\t'\t\tthis.age = age;',\n\t'\t}',\n\t'}',\n\t'Person.prototype.getAge = function () {',\n\t'\treturn this.age;',\n\t'};'\n].join('\\n');\n\nvar editor = monaco.editor.create(document.getElementById(\"container\"), {\n\tvalue: jsCode,\n\tlanguage: \"javascript\",\n\tlineNumbers: lineNumbersFunc\n});\n","html":"<div id=\"container\" style=\"height:100%\"></div>\n","css":"\n"});
