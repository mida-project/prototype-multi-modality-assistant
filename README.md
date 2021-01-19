# MIDA Multi-Modality Assistant Prototype

<img src="https://github.com/MIMBCD-UI/prototype-multi-modality-assistant/blob/master/assets/banner.png?raw=true"/>

[![Last commit](https://img.shields.io/github/last-commit/MIMBCD-UI/prototype-multi-modality-assistant?style=flat-square)](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant/commits/master)
[![OpenCollective](https://opencollective.com/oppr/backers/badge.svg?style=flat-square)](#backers)
[![OpenCollective](https://opencollective.com/oppr/sponsors/badge.svg?style=flat-square)](#sponsors)
[![Gitter](https://img.shields.io/gitter/room/gitterHQ/gitter.svg?style=flat-square)](https://gitter.im/opprTeam)
[![Twitter](https://flat.badgen.net/twitter/follow/opprGroup)](https://twitter.com/opprGroup)

With this repository, researchers can explore the potential of an [Artificial Intelligence (AI)](https://en.wikipedia.org/wiki/Artificial_intelligence) assistance that is seamlessly integrated in the medical imaging workflow. This solution also enables researchers to easily integrate their own [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) algorithms and connect the algorithms with clinicians. Our developed [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) assistant, provides a proposed classification to clinicians for the breast cancer diagnosis of patients.

Messages of the assistant can be configurated and found inside the [`src/common/messages/`](src/common/messages/) folder so that the assistant can adpat the communication per each case. For a conceptual use of our [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) assistant, we used the [DenseNet](http://doi.org/10.1109/CVPR.2017.243) model for patient classification. In this piece of information, we also provide the used [`ai-classifier-densenet161`](https://github.com/MIMBCD-UI/ai-classifier-densenet161) repository. Results of the [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) algorithms can be inserted in the [`src/common/outputs/`](src/common/outputs/) folder so that the assistant could ask clinicians if the [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) model was right (or not) while classifying (*i.e.*, providing the [BI-RADS](https://en.wikipedia.org/wiki/BI-RADS) result) the patient.

The assistant provides three main functionalities: (1) **Accept**, if the clinician agrees with the [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) model result; (2) **Reject**, in this case the clinician will reject the result coming from the [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) model and can provide the new [BI-RADS](https://en.wikipedia.org/wiki/BI-RADS) so that the model could re-train; and (3) **Heatmaps**, where the assistant provides information concerning the *heat* intensity and length of the deliniation levels. Both **Accept** and **Reject** functionalities will trigger to update the files of the [`src/common/outputs/`](src/common/outputs/) folder. For the **Heatmaps**, we used the [`prototype-heatmap`](https://github.com/mida-project/prototype-heatmap) repository to show clinicians the important regions that the model considered as abnormalities.

The prototype was developed with [CornerstoneJS](https://cornerstonejs.org/) technologies, a complete web based platform for medical imaging. Furthermore, this prototype and repository was firstly developed and evaluated for the purpose of the [User Tests and Analysis 7 (UTA7)](https://github.com/MIMBCD-UI/meta/wiki/User-Research#user-test-evaluations-) study under our research work. Several [Datasets](https://github.com/MIMBCD-UI/meta/wiki/Datasets) are fostering this [UTA7](https://github.com/MIMBCD-UI/meta/wiki/User-Research#user-test-evaluations-) evaluation, therefore, it is important to also address it here.

For the [UTA7](https://github.com/MIMBCD-UI/meta/wiki/User-Research#user-test-evaluations-) study and tasks, the [`dataset-uta7-dicom`](https://github.com/MIMBCD-UI/dataset-uta7-dicom) repository has a sampling of medical images that was used under this study. Next, a group of radiologists annotated these medical images and the *dataset* can be found inside the [`dataset-uta7-annotations`](https://github.com/MIMBCD-UI/dataset-uta7-annotations) repository. Finally, we computed and generated the *heatmaps* which can be found inside the [`dataset-uta7-heatmaps`](https://github.com/MIMBCD-UI/dataset-uta7-heatmaps) repository. We also used for comparison, both [`prototype-multi-modality`](https://github.com/MIMBCD-UI/prototype-multi-modality) and [`prototype-heatmap`](https://github.com/mida-project/prototype-heatmap) repositories. Therefore, the [`prototype-multi-modality-assistant`](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant) should be paired with these two repositories as we did in our research work.

[MIMBCD-UI](https://mimbcd-ui.github.io/) is a research work that deals with the use of a recently proposed technique in literature: [Deep Convolutional Neural Networks (CNNs)](https://en.wikipedia.org/wiki/Convolutional_neural_network). These deep networks will incorporate information from several different modes and integrated inside a User Interface (UI). The UI was implemented based on our [Prototype Breast Screening](https://github.com/MIMBCD-UI/prototype-breast-screening) repository. The hereby repository is a mirror of our [Prototype Breast Screening](https://github.com/MIMBCD-UI/prototype-breast-screening) repository which is an Open Source solution with the goal to deliver an example of web based medical imaging platform for the breast cancer diagnosis. We also have several demos to see in our [YouTube Channel](https://www.youtube.com/channel/UCPz4aTIVHekHXTxHTUOLmXw), please follow us.


## Instructions

First of all, you will need [NodeJS](https://nodejs.org/) installed locally on your machine. This project needs both [`npm`](https://www.npmjs.com/) and [`http-server`](https://github.com/indexzero/http-server) dependencies to install and run the core project. If you do not have those installed please follow the [`INSTALL`](src/INSTALL.md) instructions.

### DICOM Server

The following assumes you will be using a [git](https://git-scm.com/) version control for this repository, storing thanks to [GitHub](https://github.com/). First, [Download](https://git-scm.com/downloads) and [Install](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) [git](https://git-scm.com/). Our system needs to be integrated with [WADO-URI](http://dicom.nema.org/dicom/2013/output/chtml/part18/sect_6.3.html) servers, [DICOMWeb](https://www.dicomstandard.org/dicomweb/) servers or any HTTP based server that returns a [DICOM P10](http://www.web3.lu/dicom-standard/) instances. We suggest you to use an [Orthanc](https://www.orthanc-server.com/) server, since it is a simple and powerful [**standalone DICOM server**](https://www.orthanc-server.com/static.php?page=about) by providing a [**RESTful API**](https://en.wikipedia.org/wiki/Representational_state_transfer).

You can [download](https://www.orthanc-server.com/download.php) a latest version or you can use our own sample of an [Orthanc](https://www.orthanc-server.com/) version with our examples of patient images. The instructions to use our solution are as follows.

#### Clone

1.1.1. Clone the DICOM Server [repository](https://github.com/MIMBCD-UI/dicom-server):

```
git clone git@github.com:MIMBCD-UI/dicom-server.git
```

1.1.2. Go inside the project folder:

```
cd dicom-server/
```

#### Install

1.2.1. Install the local dependencies:

```
npm install
```

1.2.2. You can now **Run** the project, just follow the [next section](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant#run).

#### Run

1.3.1. Inside the project folder:

```
cd dicom-server
```

1.3.2. Start the DICOM Server (Orthanc) for [MacOS](https://www.orthanc-server.com/static.php?page=download-mac):

```
npm run start:multi
```

**OR**

```
cd ..
cd dicom-server/orthancAndPluginsOSX.stable/
./startOrthanc.command
```

**NOTE**: If you are not using [MacOS](https://www.orthanc-server.com/static.php?page=download-mac), for instance, if you are using [Windows](https://www.orthanc-server.com/download-windows.php) or [Debian](https://packages.debian.org/search?keywords=orthanc&searchon=names&exact=1&suite=all&section=all) you have a [documentation](https://www.orthanc-server.com/static.php?page=documentation) for that. Just follow the [Windows](https://www.orthanc-server.com/resources/2015-02-09-emsy-tutorial/index.html) or [Debian](https://packages.debian.org/sid/orthanc) documentations. You also have several [other options](https://www.orthanc-server.com/download.php).

1.3.3. Open the link:

```
localhost:8248
```

NOTE: If you need some help see the [Demo](https://youtu.be/tkzpT3KpY2A).

### Main Server

Our main server uses [NodeJS](https://nodejs.org/en/) and has several [dependencies](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant/blob/master/package.json). For the following steps you must have already installed both [NodeJS](https://nodejs.org/en/) and [`npm`](https://www.npmjs.com/) in your machine.

#### Clone

2.1.1. Clone the project repository:

```
git clone git@github.com:MIMBCD-UI/prototype-multi-modality-assistant.git
```

2.1.2. Go inside the project folder:

```
cd prototype-multi-modality-assistant/
```

#### Install

2.2.1. Install the local dependencies:

```
npm install
```

2.2.2. You can now **Run** the project, just follow the [next section](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant#run).

#### Run

2.3.1. Inside the project folder:

```
cd prototype-multi-modality-assistant/
```

2.3.2. If you have already run the DICOM Server on a [previous section](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant#dicom-server), please jump to the **2.3.3.** point, otherwise do:

```
npm run dicom-server
```

2.3.3. Run the code:

```
npm run build:multi
```

2.3.4. Start the project:

```
npm run start:multi
```

2.3.5. Open the link:

```
localhost:8286/src/public/index.html
```

##### Allow-Control-Allow-Origin

Access-Control-Allow-Origin is a [CORS (Cross-Origin Resource Sharing) header](https://www.html5rocks.com/en/tutorials/cors/). If you want to know [How does Access-Control-Allow-Origin header work?](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work) follow the link.

###### Google Chrome

* To deal with the CORS issue it is necessary to open [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/) with `--disable-web-security` flag on:

```
open /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir
```

* Or install the  [CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) plugin for [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/).


## About

For more information about the [MIMBCD-UI](https://mimbcd-ui.github.io/) Project just follow the [link](https://github.com/MIMBCD-UI/meta). Pieces of information about details of this repository are also in a [wiki](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant/wiki). This prototype was developed using several libraries and dependencies. Despite that all libraries had their importance and supported the development, one of it was of chief importance. The [CornerstoneJS](https://cornerstonejs.org/) library and [secondary libraries](https://github.com/cornerstonejs), respectively, are supporting this prototype. We [Acknowledge](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant/blob/master/README.md#acknowledgments) all people involved in the path.

### License

Copyright © 2017 [Instituto Superior Técnico (IST)](https://tecnico.ulisboa.pt/)

The [`prototype-multi-modality-assistant`](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant) repository is distributed under the terms of both [Academic License](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant/blob/master/ACADEMIC.md) and [Commercial License](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant/blob/master/COMMERCIAL.md), for academic and commercial purpose, respectively. For more information regarding the [License](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant/blob/master/LICENSE.md) of the hereby repository, just follow both [ACADEMIC](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant/blob/master/ACADEMIC.md) and [COMMERCIAL](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant/blob/master/COMMERCIAL.md) files.

#### Acknowledgments

A special thanks to [Chris Hafey](https://www.linkedin.com/in/chafey/), the propelling person of [CornerstoneJS](https://cornerstonejs.org/), who also developed the [cornerstoneDemo](https://github.com/chafey/cornerstoneDemo). Not forgetting the three supporters of the CornerstoneJS library, [Aloïs Dreyfus](https://www.linkedin.com/in/alois-dreyfus), [Danny Brown](http://dannyrb.com/) and [Erik Ziegler](https://www.npmjs.com/~swederik). We also would like to give a special thanks to [Erik Ziegler](https://www.npmjs.com/~swederik) who support several [issues](https://groups.google.com/forum/#!forum/cornerstone-platform) during this path.

List of important people to acknowledgment:

- [Aloïs Dreyfus](https://www.linkedin.com/in/alois-dreyfus) ([adreyfus](https://github.com/adreyfus))

- [Chris Hafey](https://www.linkedin.com/in/chafey/) ([chafey](https://github.com/chafey))

- [Danny Brown](http://dannyrb.com/) ([dannyrb](https://github.com/dannyrb))

- [Erik Ziegler](https://www.npmjs.com/~swederik) ([swederik](https://github.com/swederik))

- [Jason Hostetter](http://www.jasonhostetter.com/)

- [Marcelo Ribeiro](http://www.sysline.inf.br/) ([sysline](https://github.com/sysline))

- [Sébastien Jodogne](https://www.linkedin.com/in/jodogne/) ([jodogne](https://github.com/jodogne))

- [Steve Pieper](https://lmi.med.harvard.edu/people/steve-pieper)

### Supporting

Our organization is a non-profit organization. However, we have many needs across our activity. From infrastructure to service needs, we need some time and contribution, as well as help, to support our team and projects.

<span>
  <a href="https://opencollective.com/oppr" target="_blank">
    <img src="https://opencollective.com/oppr/tiers/backer.svg" width="220">
  </a>
</span>

#### Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].

<span class="image">
  <a href="graphs/contributors">
    <img src="https://opencollective.com/oppr/contributors.svg?width=890" />
  </a>
</span>

#### Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/oppr#backer)]

<span>
  <a href="https://opencollective.com/oppr#backers" target="_blank">
    <img src="https://opencollective.com/oppr/backers.svg?width=890">
  </a>
</span>

#### Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/oppr#sponsor)]

<span>
  <a href="https://opencollective.com/oppr/sponsor/0/website" target="_blank">
    <img src="https://opencollective.com/oppr/sponsor/0/avatar.svg">
  </a>
</span>

<br />

<span>
  <a href="http://www.fct.pt/" title="FCT" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/fct_footer.png?raw=true" alt="fct" width="20%" />
  </a>
</span>
<span>
  <a href="https://www.fccn.pt/en/" title="FCCN" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/fccn_footer.png?raw=true" alt="fccn" width="20%" />
  </a>
</span>
<span>
  <a href="https://www.ulisboa.pt/en/" title="ULisboa" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/ulisboa_footer.png?raw=true" alt="ulisboa" width="20%" />
  </a>
</span>
<span>
  <a href="http://tecnico.ulisboa.pt/" title="IST" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/ist_footer.png?raw=true" alt="ist" width="20%" />
  </a>
</span>
<span>
  <a href="http://hff.min-saude.pt/" title="HFF" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/hff_footer.png?raw=true" alt="hff" width="20%" />
  </a>
</span>

##### Departments

<span>
  <a href="http://dei.tecnico.ulisboa.pt" title="DEI" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/dei_footer.png?raw=true" alt="dei" width="20%" />
  </a>
</span>
<span>
  <a href="http://deec.tecnico.ulisboa.pt" title="DEEC" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/deec_footer.png?raw=true" alt="dei" width="20%" />
  </a>
</span>

##### Laboratories

<span>
  <a href="http://sipg.isr.tecnico.ulisboa.pt/" title="SIPG" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/sipg_footer.png?raw=true" alt="sipg" width="20%" />
  </a>
</span>
<span>
  <a href="http://welcome.isr.tecnico.ulisboa.pt/" title="ISR" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/isr-lisboa_footer.png?raw=true" alt="isr" width="20%" />
  </a>
</span>
<span>
  <a href="http://larsys.pt/" title="LARSys" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/larsys_footer.png?raw=true" alt="larsys" width="20%" />
  </a>
</span>
<span>
  <a href="https://www.m-iti.org/" title="M-ITI" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/iti_footer.png?raw=true" alt="iti" width="20%" />
  </a>
</span>
<span>
  <a href="http://www.inesc-id.pt/" title="INESC-ID" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/inesc-id_footer.png?raw=true" alt="inesc-id" width="20%" />
  </a>
</span>

##### Domain

<span>
  <a href="https://europa.eu/" title="EU" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/eu_footer.png?raw=true" alt="eu" width="20%" />
  </a>
</span>
<span>
  <a href="https://www.portugal.gov.pt/" title="Portugal" target="_blank">
    <img src="https://github.com/mida-project/meta/blob/master/brands/pt_footer.png?raw=true" alt="pt" width="20%" />
  </a>
</span>
