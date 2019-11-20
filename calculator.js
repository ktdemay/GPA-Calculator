function addClass()
{
	var $tableBody = $('#gpaTable').find("tbody");
    var $lastRow = $tableBody.find("tr:last");
    var $newRow = $lastRow.clone();
	$lastRow.after($newRow);
	clearRow();
}

function clearRow()
{
	var $tableBody = $('#gpaTable').find("tbody");
    var $lastRow = $tableBody.find("tr:last");
    $lastRow.find('td:eq(0)').find('input').val("");
    $lastRow.find('td:eq(2)').find('input').val("");
}

function removeClass()
{
	var rowCount = $('#gpaTable > tbody > tr').length;
	if(rowCount > 1)
	{
		var $tableBody = $('#gpaTable').find("tbody");
	    var $lastRow = $tableBody.find("tr:last");
		$lastRow.remove();
	}
}

function calculateGrade()
{
	var grade = 0; 
	var credits = 0;
	var gradePoints = 0;
	var totalCredits = 0;

	$('#gpaTable > tbody > tr').each(function() {
		var td = $(this).find('td:eq(1)');
		grade = parseGrade(td.find('select').val());

		td = $(this).find('td:eq(2)');
		credits = parseInt(td.find('input').val());

		totalCredits += credits;
		gradePoints += grade*credits;
	});

	var gpa = gradePoints/totalCredits;
}

function parseGrade(text)
{
	switch(text){
		case "A": return 4;
		case "A-": return 3.7;
		case "B+": return 3.3;
		case "B": return 3;
		case "B-": return 2.7;
		case "C+": return 2.3;
		case "C": return 2;
		case "C-": return 1.7;
		case "D+": return 1.3;
		case "D": return 1;
		case "D-": return 0.7;
		case "F": return 0;
	}
}