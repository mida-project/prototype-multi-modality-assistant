
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
        // alert("Accept");
        var jsonFileUrl = "../common/dataset/" + '1E60E211-42B6-4556-A1F6-223E85AD38A6' + ".json";

        $.getJSON(jsonFileUrl)
            .done(function(individualPatientData) {
                let biradsAssis = individualPatientData.patient[0].biradsAssis;
                let biradsPhys = individualPatientData.patient[0].biradsPhys;
                alert(biradsPhys);
                 biradsPhys = biradsAssis;
                alert(biradsPhys);
                
            })
    }
  // reject Result
    function reject_assistant_rerult() {
        alert("reject");
    }
