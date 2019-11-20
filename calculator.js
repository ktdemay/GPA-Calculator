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
		credits = parseFloat(td.find('input').val());

		totalCredits += credits;
		gradePoints += grade*credits;
		console.log(grade*credits);
	});

	var cummGPA = document.getElementById("cummGPA").value;
	var creds = document.getElementById("totalCredits").value;

	if(cummGPA != "" && creds != "")
	{
		cummGPA = parseFloat(cummGPA);
		creds = parseFloat(creds);

		var semGPA = gradePoints/totalCredits;
		var newCumm = (gradePoints + cummGPA*creds)/(totalCredits+creds);
		document.getElementById("dispSem").innerText = "Semester GPA: " + semGPA.toFixed(2);
		document.getElementById("dispCumm").innerText = "Cummulative GPA: " + newCumm.toFixed(2);
	}
	else
	{
		var gpa = gradePoints/totalCredits;
		document.getElementById("dispSem").innerText = "Semester GPA: " + gpa.toFixed(2);
		document.getElementById("dispCumm").innerText = "";
	}
}

function parseGrade(text)
{
	switch(text){
		case "A": return 4;
		case "A-": return 3.75;
		case "B+": return 3.25;
		case "B": return 3;
		case "B-": return 2.75;
		case "C+": return 2.25;
		case "C": return 2;
		case "C-": return 1.75;
		case "D+": return 1.25;
		case "D": return 1;
		case "D-": return 0.75;
		case "F": return 0;
	}
}