// Load in HTML templates
var viewportPath = "../public/templates/viewport.html";
var studyViewerPath = "../public/templates/studyViewer.html";

// The file with the list of all studies.
var fileName = '../common/studyList';
var fileFormat = '.json';
var studyListFile = fileName + fileFormat;

$("#assistant_information").hide();
$(".assistance_img").hide();

var viewportTemplate; // the viewport template
loadTemplate(viewportPath, function(element) {
  viewportTemplate = element;
});

var studyViewerTemplate; // the study viewer template
loadTemplate(studyViewerPath, function(element) {
  studyViewerTemplate = element;
});

// Get study list from JSON manifest
$.getJSON(studyListFile, function(data) {
  //console.log("Getting study list...");
  if (typeof data.studyList === "object") {
    //console.log("Consuming study list...");
    data.studyList.forEach(function(study) {
      //console.log("Creating study list tables...");
      // Create one table row for each study in the manifest
      var studyRow = '<tr><td>' +
        study.patientId + '</td><td>' +
        study.studyDate + '</td><td>' +
        study.modality + '</td><td>' +
        study.studyDescription + '</td><td>' +
        study.numImages + '</td><td>' +
        '</tr>';

      // Append the row to the study list
      var studyRowElement = $(studyRow).appendTo('#studyListData');

      // On study list row click
      $(studyRowElement).click(function() {
        if ($('#tabs li').length >= 2) {
          alert('Please close the opened patient first !');
        } else {

          // Add new tab for this study and switch to it
          var studyTab = '<li><div id=complete-tab><a href="#x' + study.patientId + '" data-toggle="tab">' + study.patientId + '</a>' +
            '<input type="button" class="closeBtn" value="X" />' + '</li></div>';

          // JSON File Path
          var jsonFileUrl = "../common/dataset/" + study.patientId +".json";
          var messageUrl = "../common/messages/assistant_msg.json";
          $.getJSON(jsonFileUrl)
            .done(function(individualPatientData) {
                // informations reading from json file
                let biradsAssis = individualPatientData.patient[0].biradsAssis;
                let biradsPhys = individualPatientData.patient[0].biradsPhys;
                let cancerChance = individualPatientData.patient[0].cancerChance; 
                $.getJSON(messageUrl)
                  .done(function(messageText) {
                      let msg1 = messageText.assisMessage[0].message_001;
                      let msg2 = messageText.assisMessage[0].message_002;
                      let msg3 = messageText.assisMessage[0].message_003;
                      let msg4 = messageText.assisMessage[0].message_004;
                      let msg5 = messageText.assisMessage[0].message_005;
                    $('.assistant_information').css({display:"block"});
                    let assistantText = msg1 +" "+ msg2 + " <br />" + msg3 + " <span style='color:red'>"+ cancerChance +"% </span> " + msg4 + "!! <br />" + msg5 +": <span style='color:red'>" + biradsPhys+ "</span>"; 
                    // display text if any data for the patient 
                    document.getElementById("assistant_information").innerHTML = assistantText;
                    avator_animation();
                  })

              })
              .fail(function(jqXHR, textStatus) {
                if (textStatus == 'parsererror') {
                  $.getJSON(messageUrl)
                  .done(function(messageText) {
                    let warn1 = messageText.assisWarning[0].warning_001;
                    let warn2 = messageText.assisWarning[0].warning_002;
                    let warn3 = messageText.assisWarning[0].warning_003;
                    $('.assistant_information').css({display:"block"});
                    let failAssistantText = "Sorry i have no infomation about the patient! <br />" + warn1 +" <span />" + warn2 + warn3;
                    document.getElementById("assistant_information").innerHTML = failAssistantText;
                    avator_animation();
                  })
                }
            })

          $('#tabs').append(studyTab);
          // Add tab content by making a copy of the studyViewerTemplate element
          var studyViewerCopy = studyViewerTemplate.clone();

          var viewportCopy = viewportTemplate.clone();
          studyViewerCopy.find('.imageViewer').append(viewportCopy);

 
          studyViewerCopy.attr("id", 'x' + study.patientId);
          // Make the viewer visible
          studyViewerCopy.removeClass('hidden');
          // Add section to the tab content
          studyViewerCopy.appendTo('#tabContent');

          // Show the new tab (which will be the last one since it was just added
          $('#tabs a:last').tab('show');

          // Toggle window resize (?)
          $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            $(window).trigger('resize');
          });

          studyViewerCopy.roiData = {
            studyId: study.studyId,
            modality: study.modality,
            stacks: [],
          };

          $('.closeBtn').click(function() {
            var element = this.parentNode.parentNode;
            $('#tabs a:first').tab('show');
            element.remove();
            var tabDataElement = element.firstChild.firstChild.getAttribute('href');
            if($(tabDataElement).length > 0){
              $(tabDataElement)[0].remove();
            }
            // Close Assistant
            // $('.assistant_information').css({display:'none'});
            $("#assistant_information").hide();
            $(".assistance_img").hide();

          });

          // Now load the study.json
          loadStudy(studyViewerCopy, viewportTemplate, study.studyId + fileFormat);
        }
      });
    });
  } else {
  }
});



// Resize main


// Show tabs on click
$('#tabs a').click (function(e) {
  e.preventDefault();
  $(this).tab('show');
});

// Resize main
function resizeMain() {
  var height = $(window).height();
  $('#main').height(height - 50);
  $('#tabContent').height(height - 50 - 42);
}

// Call resize main on window resize
$(window).resize(function() {
    resizeMain();
});
resizeMain();

// Prevent scrolling on iOS
document.body.addEventListener('touchmove', function(e) {
  e.preventDefault();
});

// Assistant Avatar Animation
function avator_animation () {
  $("#assistant_information").fadeIn();
  $(".assistance_img").fadeIn()
}