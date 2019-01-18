/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Load in HTML templates
var viewportPath = "../public/templates/viewport.html";
var studyViewerPath = "../public/templates/studyViewer.html";

// The file with the list of all studies.
var fileName = '../common/studyList';
var fileFormat = '.json';
var studyListFile = fileName + fileFormat;

//console.log('Read Study List File From: \n', studyListFile);

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

          // Abdus Samad___ Freelancer.com

          // Json file path 
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
                    let assistantText = msg1 +" "+ msg2 + " <br />" + msg3 + " <span class'cancer_parcentage'>"+ cancerChance +"% </span> " + msg4 + "!! <br />" + msg5 +":" + biradsPhys; 
                    // display text if any data for the patient 
                    document.getElementById("assistant_information").innerHTML = assistantText;
                  })

              })
              .fail(function(jqXHR, textStatus) {
                if (textStatus == 'parsererror') {
                  $('.assistant_information').css({display:"block"});
                  let failAssistantText = "Sorry i have no infomation about the patient!"
                  document.getElementById("assistant_information").innerHTML = failAssistantText;
                }
            })
   

          // End - Abdus Samad___ Freelancer.com




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
            // Close Assistant -- by Samad
            $('.assistant_information').css({display:'none'});
          });

          // Now load the study.json
          loadStudy(studyViewerCopy, viewportTemplate, study.studyId + fileFormat);
        }
      });
    });
  } else {
    //console.log("There is no list of studies. Please Upload some DICOM files.");
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

// Abdus Samad___ Freelancer.com

// // Json file path 
// var jsonFileUrl = "../server/patients/patientdata.json";
// $.getJSON(jsonFileUrl, function(patientInfo) {
//   var cancerChance = patientInfo.patientData.patientList[1].cancerChance;
//   var birads = patientInfo.patientData.patientList[1].biradsAssis;
//   document.getElementById('cancer_parcentage').innerHTML = " " + cancerChance +"%";
//   document.getElementById('cancerBirads').innerHTML = " " + birads;
// })

/***/ })
/******/ ]);