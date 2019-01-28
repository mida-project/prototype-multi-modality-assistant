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
      var cpnt001 = '<tr><td>';
      var cpnt002 = '</td><td>';
      var cpnt003 = '</tr>';
      var v001 = study.patientId;
      var v002 = study.studyDate;
      var v003 = study.modality;
      var v004 = study.studyDescription;
      var v005 = study.numImages;
      var set001 = cpnt001 + v001 + cpnt002;
      var set002 = v002 + cpnt002 + v003 + cpnt002 + v004;
      var set003 = cpnt002 + v005 + cpnt002 + cpnt003;
      var studyRow = set001 + set002 + set003;
      // Append the row to the study list
      var studyRowElement = $(studyRow).appendTo('#studyListData');
      // On study list row click
      $(studyRowElement).click(function() {
        if ($('#tabs li').length >= 2) {
          alert('Please close the opened patient first !');
        } else {
          // Add new tab for this study and switch to it
          var completeTab = '<li><div id=complete-tab><a href="#x';
          var dataToggle = '" data-toggle="tab">';
          var aTag = '</a>';
          var clsBtn = '<input type="button" class="closeBtn" value="X" />';
          var fnsTab = '</li></div>';
          var stdPatId = study.patientId;
          var studyTab = completeTab + stdPatId + dataToggle + stdPatId + aTag + clsBtn + fnsTab;
          // Json file path
          var jsonFileUrl = "../common/dataset/" + study.patientId + ".json";
          var messageUrl = "../common/messages/assistant_msg.json";
          $.getJSON(jsonFileUrl).done(function(individualPatientData) {
            // informations reading from json file
            let biradsAssis = individualPatientData.patient[0].biradsAssis;
            let biradsPhys = individualPatientData.patient[0].biradsPhys;
            let cancerChance = individualPatientData.patient[0].cancerChance;
            $.getJSON(messageUrl).done(function(messageText) {
              let msg1 = messageText.assisMessage[0].message_001;
              let msg2 = messageText.assisMessage[0].message_002;
              let msg3 = messageText.assisMessage[0].message_003;
              let msg4 = messageText.assisMessage[0].message_004;
              let msg5 = messageText.assisMessage[0].message_005;
              $('.assistant_information').css({
                display: "block"
              });
              let cmplt001 = msg1 + " " + msg2 + " <br />" + msg3;
              let cmplt002 = " <span class'cancer_parcentage'>" + cancerChance;
              let cmplt003 = "% </span> " + msg4 + "!! <br />";
              let cmplt004 = msg5 + ":" + biradsPhys;
              let assistantText = cmplt001 + cmplt002 + cmplt003 + cmplt004;
              // display text if any data for the patient 
              document.getElementById("assistant_information").innerHTML = assistantText;
              avator_animation();
            })
          }).fail(function(jqXHR, textStatus) {
            if (textStatus == 'parsererror') {
              $.getJSON(messageUrl).done(function(messageText) {
                let warn1 = messageText.assisWarning[0].warning_001;
                let warn2 = messageText.assisWarning[0].warning_002;
                let warn3 = messageText.assisWarning[0].warning_003;
                $('.assistant_information').css({
                  display: "block"
                });
                let cmplt005 = "Sorry i have no infomation about the patient! <br />";
                let cmplt006 = warn1 + " <span />" + warn2;
                let cmplt007 = "<br />" + warn3;
                let failAssistantText = cmplt005 + cmplt006 + cmplt007;
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
            if ($(tabDataElement).length > 0) {
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
  } else {}
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