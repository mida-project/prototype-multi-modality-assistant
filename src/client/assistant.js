
// Assistant Switch 
function assistantSwitch(){

    var assistant_block_width = $('.assistant_block').width();
    if (assistant_block_width < 200) {
        $('.assistant_block')
            .animate({
                'width' : '270px',
            }, 400, function () {
                assis_animation()
            })
        }else{
            assis_animation()
    }
    function assis_animation() {
        $(".info_n_btn").slideToggle("slow", "linear", function() {
            
            if ($("#switchInput").prop("checked") == false) {
                $('.assistant_block').animate({
                    width: "70px"
                })
            }
        })
    }
}

// Assistant Information Buttons functionality
  // Accept result
    function accept_assistant_result() {
        $.ajax
        ({
            type: "POST",
            url: "/updatebiradsphys", 
            crossDomain:true, 
            dataType: "json",
            data:  JSON.stringify({patientID: patientID})
        }).done(function ( data ) {
            alert(data.result)
        })
        
    }
  // reject Result
    function reject_assistant_rerult() {
        
    }

    function rejectPatient() {
        
        $.ajax
        ({
            type: "POST",
            url: "/rejectbiradsphys", 
            crossDomain:true, 
            dataType: "json",
            data:  JSON.stringify({patientID: patientID,biradsPhys:$('#selectbiradsPhys').val()})
        }).done(function ( data ) {
            alert(data.result)
        })
    }
    