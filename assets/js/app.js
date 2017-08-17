		$(document).ready(function(){
			$('.during_game').css('visibility', 'hidden');
			$('#login-modal').modal('show');
			$('#letsGobtn').on("click", function() {
				var  log_in_obj = $('#nameform').serializeArray()
				name = log_in_obj[0]['value']
				if (name != ''){		
					$('.during_game').css('visibility', 'visible');
					$('#player_name_main').text('Player name: '+name)
					$('#login-modal').modal('hide');
					stopwatch.start();
					fill_questions(Q_ID);
				}
				});

			$( ".options" ).on( "click", function() {
				var answer =  $( ".options:checked" ).val();
				if (answer.toString() == Q_and_choices['correct'].slice(-1)){
					results[Q_ID.toString()] = 1;
				}else{
					results[Q_ID.toString()] = 0;
					}
				});

			$('#next').on( "click", function() {
				stopwatch.pause();
				$('#correct_wrong_modal').modal('show');
				});


			$( "#resultModal" ).on('shown.bs.modal', function (e) {
					$('.during_game').css('visibility', 'hidden');
					$('#result_player_name').text(name);
					var unanswered_Q =  number_of_all_Q - Object.keys(results).length
					if (unanswered_Q > 0){
						$('#result_unanswered_Q').text(' Number of unanswered questions: '+unanswered_Q);
					}	
					var right_answer = 0;
					var wrong_answer = 0;
					for(var i in results){
						if (results[i] == 1){
							right_answer++
						}else{
							wrong_answer++
						}


						}

					$('#result_right_answer').text(right_answer);
					$('#result_wrong_answer').text(wrong_answer);
					
			});

			$('#correct_wrong_modal').on('shown.bs.modal', function () {
				if (results[Q_ID.toString()] == 1){
					$('#correct_wrong_result').text('Correct');
					$('#correct_wrong_result').css('color', '#298402');
					$('#correct_wrong_correct_answer').text('');

				}else{
					$('#correct_wrong_result').text('Wrong');
					$('#correct_wrong_result').css('color', '#a30800');
					var correct_answer_code = Q_and_choices['correct'];
					var correct_answer = Q_and_choices[correct_answer_code]
					$('#correct_wrong_correct_answer').text('The correct answer is:  '+correct_answer);
				}
			});



			$('#correct_wrong_modal').on('hidden.bs.modal', function () {
				next_Q()
			});




			$('#close_state').on("click", function() {
				// clean up and restart the game 
				stopwatch.time = 10;
				Q_ID = 1
				$('.during_game').css('visibility', 'hidden');
				for (var member in results) delete results[member];
				$('#login-modal').modal('show');


				});
		});