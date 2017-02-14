var csv = require("fast-csv");

var readCsv = function () {
    var board = {};
    board.questions = [];
	csv.fromPath("./data/code_challenge_question_dump.csv")
	.on("data", function (data) {
        var dataArray = data.toString().split('|');
        var jsonData = {};
        jsonData.question = dataArray[0];
        jsonData.answer = dataArray[1];
        jsonData.options = dataArray.filter(function(x, i){ return i > 0});
		board.questions.push(jsonData);

	})
	.on("end", function () {
		console.log("done");
	});
    return board;
};

module.exports = readCsv;
