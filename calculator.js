function addClass()
{
	var $tableBody = $('#gpaTable').find("tbody");
    var $lastRow = $tableBody.find("tr:last");
    var $newRow = $lastRow.clone();
	$lastRow.after($newRow);
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
	var gradeTotal = 0; 
	var creditsTotal = 0;

	$('#gpaTable > tbody > tr').each(function() {
		$(this).find('td').each(function() {
			if(this.id == "letter_grade")
			{
				gradeTotal += parseGrade((this).find('input').val);
			}
			else if(this.id == "credits")
			{
				creditsTotal += (this).find('input').val;
			}
		})
	});

	//console.log(gradeTotal);
	//console.log(creditsTotal);
	console.log(gradeTotal/creditsTotal);
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
		case "F": return 0;
	}
}