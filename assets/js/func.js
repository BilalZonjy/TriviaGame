var Q_and_choices
var results ={}
var Q_ID = 1
var number_of_all_Q = Object.keys(Qbank).length;
var name;
function fill_questions(Q_ID){
	Q_and_choices = Qbank[Q_ID.toString()];
	$('.Question').text(Q_and_choices['Q']);
	$('#choice_1').text(Q_and_choices['c1']);
	$('#choice_2').text(Q_and_choices['c2']);
	$('#choice_3').text(Q_and_choices['c3']);
	$('#choice_4').text(Q_and_choices['c4']);
	$('.options').prop('checked', false);
}





function next_Q(){

	stopwatch.time = 10;
	stopwatch.start();
	Q_ID++;
	if(Q_ID<=number_of_all_Q){
		fill_questions(Q_ID);
	}else{
		stopwatch.stop();
	}

}	