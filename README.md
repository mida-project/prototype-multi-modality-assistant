# MIDA Multi-Modality Assistant Prototype

<img src="https://github.com/mida-project/prototype-multi-modality-assistant/blob/master/assets/banner.png?raw=true"/>

[![Last commit](https://img.shields.io/github/last-commit/mida-project/prototype-multi-modality-assistant?style=flat-square)](https://github.com/mida-project/prototype-multi-modality-assistant/commits/master)
[![OpenCollective](https://opencollective.com/oppr/backers/badge.svg?style=flat-square)](#backers)
[![OpenCollective](https://opencollective.com/oppr/sponsors/badge.svg?style=flat-square)](#sponsors)
[![Gitter](https://img.shields.io/gitter/room/gitterHQ/gitter.svg?style=flat-square)](https://gitter.im/opprTeam)
[![Twitter](https://flat.badgen.net/twitter/follow/opprGroup)](https://twitter.com/opprGroup)

With this repository, researchers can explore the potential of [Artificial Intelligence (AI)](https://en.wikipedia.org/wiki/Artificial_intelligence) assistance that is seamlessly integrated into the medical imaging workflow. This solution also enables researchers to easily integrate their own [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) algorithms and connect the algorithms with clinicians. Our developed [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) assistant, provides a proposed classification to clinicians for the breast cancer diagnosis of patients.

Messages of the assistant can be configurated and found inside the [`src/common/messages/`](src/common/messages/) folder so that the assistant can adpat the communication per each case. For a conceptual use of our [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) assistant, we used the [DenseNet](http://doi.org/10.1109/CVPR.2017.243) model for patient classification. In this piece of information, we also provide the used [`ai-classifier-densenet161`](https://github.com/MIMBCD-UI/ai-classifier-densenet161) repository. Results of the [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) algorithms can be inserted in the [`src/common/outputs/`](src/common/outputs/) folder so that the assistant could ask clinicians if the [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) model was right (or not) while classifying (*i.e.*, providing the [BI-RADS](https://en.wikipedia.org/wiki/BI-RADS) result) the patient.

The assistant provides three main functionalities: (1) **Accept**, if the clinician agrees with the [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) model result; (2) **Reject**, in this case the clinician will reject the result coming from the [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) model and can provide the new [BI-RADS](https://en.wikipedia.org/wiki/BI-RADS) so that the model could re-train; and (3) **Heatmaps**, where the assistant provides information concerning the *heat* intensity and length of the deliniation levels. Both **Accept** and **Reject** functionalities will trigger to update the files of the [`src/common/outputs/`](src/common/outputs/) folder. For the **Heatmaps**, we used the [`prototype-heatmap`](https://github.com/mida-project/prototype-heatmap) repository to show clinicians the important regions that the model considered as abnormalities.

The prototype was developed with [CornerstoneJS](https://cornerstonejs.org/) technologies, a complete web based platform for medical imaging. Furthermore, this prototype and repository was firstly developed and evaluated for the purpose of the [User Tests and Analysis 7 (UTA7)](https://github.com/MIMBCD-UI/meta/wiki/User-Research#user-test-evaluations-) study under our research work. Several [Datasets](https://github.com/MIMBCD-UI/meta/wiki/Datasets) are fostering this [UTA7](https://github.com/MIMBCD-UI/meta/wiki/User-Research#user-test-evaluations-) evaluation, therefore, it is important to also address it here.

For the [UTA7](https://github.com/MIMBCD-UI/meta/wiki/User-Research#user-test-evaluations-) study and tasks, the [`dataset-uta7-dicom`](https://github.com/MIMBCD-UI/dataset-uta7-dicom) repository has a sampling of medical images that was used under this study. Next, a group of radiologists annotated these medical images and the *dataset* can be found inside the [`dataset-uta7-annotations`](https://github.com/MIMBCD-UI/dataset-uta7-annotations) repository. Finally, we computed and generated the *heatmaps* which can be found inside the [`dataset-uta7-heatmaps`](https://github.com/MIMBCD-UI/dataset-uta7-heatmaps) repository. We also used for comparison, both [`prototype-multi-modality`](https://github.com/MIMBCD-UI/prototype-multi-modality) and [`prototype-heatmap`](https://github.com/mida-project/prototype-heatmap) repositories. Therefore, the [`prototype-multi-modality-assistant`](https://github.com/mida-project/prototype-multi-modality-assistant) should be paired with these two repositories as we did in our research work.

[MIMBCD-UI](https://mimbcd-ui.github.io/) is a research work that deals with the use of a recently proposed technique in literature: [Deep Convolutional Neural Networks (CNNs)](https://en.wikipedia.org/wiki/Convolutional_neural_network). These deep networks will incorporate information from several different modes and integrated inside a User Interface (UI), so that clinicians can interact with the deep neural networks. The UI was implemented based on our [Prototype Breast Screening](https://github.com/MIMBCD-UI/prototype-breast-screening) repository. The hereby repository is a mirror of our [Prototype Breast Screening](https://github.com/MIMBCD-UI/prototype-breast-screening) repository which is an Open Source solution with the goal to deliver an example of web based medical imaging platform for the breast cancer diagnosis. We also have several demos to see in our [MIMBCD-UI YouTube Channel](https://www.youtube.com/channel/UCPz4aTIVHekHXTxHTUOLmXw) and [BreastScreening YouTube Channel](https://www.youtube.com/channel/UCGSCL9RETBck4cwP4iJzQXQ), please follow us. For a proper video demonstration of this repository during the [UTA7](https://github.com/MIMBCD-UI/meta/wiki/User-Research#user-test-evaluations-) study, please follow this [YouTube Playlist](https://www.youtube.com/playlist?list=PLV6M7Z-t1Fy_38GaJvnVd_q6Mq8iNULRh) as an example.

## Citing

We kindly ask **scientific works and studies** that make use of the repository to cite it in their associated publications. Similarly, we ask **open-source** and **closed-source** works that make use of the repository to warn us about this use.

You can cite our work using the following BibTeX entry:

```
@inproceedings{10.1145/3399715.3399744,
author = {Calisto, Francisco Maria and Nunes, Nuno and Nascimento, Jacinto C.},
title = {BreastScreening: On the Use of Multi-Modality in Medical Imaging Diagnosis},
year = {2020},
isbn = {9781450375351},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3399715.3399744},
doi = {10.1145/3399715.3399744},
abstract = {This paper describes the field research, design and comparative deployment of a multimodal medical imaging user interface for breast screening. The main contributions described here are threefold: 1) The design of an advanced visual interface for multimodal diagnosis of breast cancer (BreastScreening); 2) Insights from the field comparison of Single-Modality vs Multi-Modality screening of breast cancer diagnosis with 31 clinicians and 566 images; and 3) The visualization of the two main types of breast lesions in the following image modalities: (i) MammoGraphy (MG) in both Craniocaudal (CC) and Mediolateral oblique (MLO) views; (ii) UltraSound (US); and (iii) Magnetic Resonance Imaging (MRI). We summarize our work with recommendations from the radiologists for guiding the future design of medical imaging interfaces.},
booktitle = {Proceedings of the International Conference on Advanced Visual Interfaces},
articleno = {49},
numpages = {5},
keywords = {user-centered design, breast cancer, human-computer interaction, healthcare systems, multimodality, medical imaging, annotations},
location = {Salerno, Italy},
series = {AVI '20}
}
```

## Table of contents

* [Prerequisites](#Prerequisites)
* [Usage](#Usage)
* [Roadmap](#Roadmap)
* [Contributing](#Contributing)
* [License & Copyright](#License--Copyright)
* [Team](#Team)
* [Acknowledgements](#Acknowledgements)

## Prerequisites

The following list is showing the required dependencies for this project to run locally:

* [Git](https://git-scm.com/) or any other Git or GitHub version control tool
* [NodeJS](https://nodejs.org/) (v10.15.3 or newer)
* [npm](https://www.npmjs.com/) (6.14.4 or newer)

Here are some tutorials and documentation, if needed, to feel more comfortable about using and playing around with this repository:

* [Git Tutorial](https://git-scm.com/docs/gittutorial)
* [GitHub Quick Tutorial](https://guides.github.com/activities/hello-world/)
* [NodeJS Documentation](https://nodejs.org/en/docs/)

## Usage

Usage follow the instructions here to setup the current repository and extract the present data. To understand how the hereby repository is used for, read the following steps.

### Instructions

First of all, you will need [NodeJS](https://nodejs.org/) installed locally on your machine. This project needs both [`npm`](https://www.npmjs.com/) and [`http-server`](https://github.com/indexzero/http-server) dependencies to install and run the core project. If you do not have those installed please follow the [`INSTALL`](src/INSTALL.md) instructions.

#### DICOM Server

The following assumes you will be using a [git](https://git-scm.com/) version control for this repository, storing thanks to [GitHub](https://github.com/). First, [download](https://git-scm.com/downloads) and [install](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) a [git](https://git-scm.com/) distribution. Our system needs to be integrated with [WADO-URI](http://dicom.nema.org/dicom/2013/output/chtml/part18/sect_6.3.html) servers, [DICOMWeb](https://www.dicomstandard.org/dicomweb/) servers or any HTTP based server that returns a [DICOM P10](http://www.web3.lu/dicom-standard/) instances. We suggest you to use an [Orthanc](https://www.orthanc-server.com/) server, since it is a simple and powerful [**standalone DICOM server**](https://www.orthanc-server.com/static.php?page=about) by providing a [**RESTful API**](https://en.wikipedia.org/wiki/Representational_state_transfer).

##### Download

1.1.1. Download the DICOM Server by following the next instruction:

You can [download](https://www.orthanc-server.com/download.php) a latest version or you can use our own sample of an [Orthanc](https://www.orthanc-server.com/) version with our examples of patient images. The instructions to use our solution are as follows.

1.1.2. Follow the [Orthanc Documentation](https://www.orthanc-server.com/static.php?page=documentation) to properly configure your server;

1.1.3. Memorize the configured `<port>` number of the [Orthanc](https://www.orthanc-server.com/) which will be important for the [configurations](https://github.com/mida-project/prototype-multi-modality-assistant#configurations) section;

1.1.4. You will need to populate the [Orthanc](https://www.orthanc-server.com/) server with your own medical images, or you can use our sample from the [`dataset-uta7-dicom`](https://github.com/MIMBCD-UI/dataset-uta7-dicom) repository;

#### Main Server

Our main server uses [NodeJS](https://nodejs.org/en/) and has several [dependencies](https://github.com/mida-project/prototype-multi-modality-assistant/blob/master/package.json). For the following steps you must have already installed both [NodeJS](https://nodejs.org/en/) and [`npm`](https://www.npmjs.com/) in your machine.

##### Clone

2.1.1. Clone the project repository:

```
git clone git@github.com:mida-project/prototype-multi-modality-assistant.git
```

2.1.2. Now, you will need to populate both [`src/common/messages/`](src/common/messages/) and [`src/common/outputs/`](src/common/outputs/) folders with your own *dataset* of classifications or you can clone our example:

```
git clone git@github.com:MIMBCD-UI/dataset-uta7-ai.git
```

2.1.3. Go inside the project folder:

```
cd prototype-multi-modality-assistant/
```

2.1.4. Next, run our script by doing:

```
./scripts/filler.sh
```

##### Configurations

2.2.1. Go inside the [`config/`](config/) folder:

```
cd config/
```

2.2.2. Copy the sample version of the `env` file to the new one:

```
cp sample-env.json env.json
```

2.2.3. Copy the sample version of the `local` file to the new one:

```
cp sample-local.json local.json
```

2.2.4. Change the `<port>` number of this new `local.json` file for the one configured in the 

##### Install

2.3.1. Install the local dependencies:

```
npm install
```

2.3.2. You can now **Run** the project, just follow the [next section](https://github.com/mida-project/prototype-multi-modality-assistant#run).

##### Run

2.4.1. Inside the project folder:

```
cd prototype-multi-modality-assistant/
```

2.4.2. If you have already run the DICOM Server on a [previous section](https://github.com/mida-project/prototype-multi-modality-assistant#dicom-server), please jump to the **2.3.3.** point, otherwise do:

```
./Orthanc
```

2.4.3. Run the code:

```
npm run build:multi
```

2.4.4. Start the project:

```
npm run start:multi
```

2.4.5. Open the link:

```
localhost:8286/src/public/index.html
```

###### Allow-Control-Allow-Origin

Access-Control-Allow-Origin is a [CORS (Cross-Origin Resource Sharing) header](https://www.html5rocks.com/en/tutorials/cors/). If you want to know [How does Access-Control-Allow-Origin header work?](https://stackoverflow.com/questions/10636611/how-does-access-control-allow-origin-header-work) follow the link.

###### Google Chrome

* To deal with the CORS issue it is necessary to open [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/) with `--disable-web-security` flag on:

```
open /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir
```

* Or install the  [CORS](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) plugin for [Google Chrome](https://www.google.com/intl/en/chrome/browser/desktop/).

## Roadmap

[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/3819/badge)](https://bestpractices.coreinfrastructure.org/projects/3819)

We need to follow the repository goal, by addressing the thereby information. Therefore, it is of chief importance to scale this solution supported by the repository. The repository solution follows the best practices, achieving the [Core Infrastructure Initiative (CII)](https://bestpractices.coreinfrastructure.org/en/projects/3172) specifications.

Besides that, one of our goals involves creating a configuration file to automatically test and publish our code to pip or any other package manager. It will be most likely prepared for the [GitHub Actions](https://github.com/features/actions). Other goals may be written here in the future.

## Contributing

This project exists thanks to all the people who [contribute](CONTRIBUTING.md). We welcome everyone who wants to help us improve this repository. As follows, we present some suggestions.

### Issuer

Either as something that seems missing or any need for support, just open a [new issue](https://github.com/MIMBCD-UI/prototype-multi-modality-assistant/issues/new). Regardless of being a simple request or a fully-structured feature, we will do our best to understand them and, eventually, solve them.

### Developer

We like to develop, but we also like collaboration. You could ask us to add some features... Or you could want to do it yourself and fork this repository. Maybe even do some side-project of your own. If the latter ones, please let us share some insights about what we currently have.

## Information

The current information will summarize important items of this repository. In this section, we address all fundamental items that were crucial to the current information.

### Related Repositories

The following list, represents the set of related repositories for the presented one:

- [`prototype-heatmap`](https://github.com/mida-project/prototype-heatmap)

- [`prototype-multi-modality`](https://github.com/MIMBCD-UI/prototype-multi-modality)

- [`dataset-uta7-annotations`](https://github.com/MIMBCD-UI/dataset-uta7-annotations)

- [`dataset-uta7-co-variables`](https://github.com/MIMBCD-UI/dataset-uta7-co-variables)

- [`dataset-uta7-dicom`](https://github.com/MIMBCD-UI/dataset-uta7-dicom)

- [`dataset-uta7-heatmaps`](https://github.com/MIMBCD-UI/dataset-uta7-heatmaps)

- [`dataset-uta7-rates`](https://github.com/MIMBCD-UI/dataset-uta7-rates)

- [`dataset-uta4-dicom`](https://github.com/MIMBCD-UI/dataset-uta4-dicom)

- [`dataset-uta9-dicom`](https://github.com/MIMBCD-UI/dataset-uta9-dicom)

- [`dataset-uta10-dicom`](https://github.com/MIMBCD-UI/dataset-uta10-dicom)

### Dataset Resources

To publish our [datasets](https://www.kaggle.com/MIMBCD-UI) we used a well known platform called [Kaggle](https://www.kaggle.com). To access our project's [Profile Page](https://www.kaggle.com/MIMBCD-UI) just follow the [link](https://www.kaggle.com/MIMBCD-UI). Last but not least, you can also follow our work at [data.world](https://data.world/mimbcdui-project), [figshare.com](https://figshare.com/authors/MIMBCD-UI_Project/8674887) and [openml.org](https://www.openml.org/u/11806) platforms.

## About

For more information about the [MIMBCD-UI](https://mimbcd-ui.github.io/) research work just follow the [link](https://github.com/MIMBCD-UI/meta). Pieces of information about details of this repository are also in a [wiki](https://github.com/mida-project/prototype-multi-modality-assistant/wiki). This prototype was developed using several libraries and dependencies. Despite that all libraries had their importance and supported the development, one of it was of chief importance. The [CornerstoneJS](https://cornerstonejs.org/) library and [secondary libraries](https://github.com/cornerstonejs), respectively, are supporting this prototype. We [Acknowledge](https://github.com/mida-project/prototype-multi-modality-assistant/blob/master/README.md#acknowledgments) all people involved in the path.

### License

Copyright © 2017 [Instituto Superior Técnico (IST)](https://tecnico.ulisboa.pt/)

The [`prototype-multi-modality-assistant`](https://github.com/mida-project/prototype-multi-modality-assistant) repository is distributed under the terms of both [Academic License](https://github.com/mida-project/prototype-multi-modality-assistant/blob/master/ACADEMIC.md) and [Commercial License](https://github.com/mida-project/prototype-multi-modality-assistant/blob/master/COMMERCIAL.md), for academic and commercial purpose, respectively. For more information regarding the [License](https://github.com/mida-project/prototype-multi-modality-assistant/blob/master/LICENSE.md) of the hereby repository, just follow both [ACADEMIC](https://github.com/mida-project/prototype-multi-modality-assistant/blob/master/ACADEMIC.md) and [COMMERCIAL](https://github.com/mida-project/prototype-multi-modality-assistant/blob/master/COMMERCIAL.md) files.

### Team

Our team brings everything together sharing ideas and the same purpose, developing even better work. In this section, we will nominate the full list of important people for this repository, as well as respective links.

#### Authors

* Francisco Maria Calisto [ [Website](https://web.tecnico.ulisboa.pt/francisco.calisto) | [ResearchGate](https://www.researchgate.net/profile/Francisco_Maria_Calisto) | [GitHub](https://github.com/FMCalisto) | [Twitter](https://twitter.com/FMCalisto) | [LinkedIn](https://www.linkedin.com/in/fmcalisto/) ]

* Carlos Santiago [ [ResearchGate](https://www.researchgate.net/profile/Carlos_Santiago6) ]

* Nuno Nunes [ [ResearchGate](https://www.researchgate.net/profile/Nuno_Nunes2) ]

* Jacinto Nascimento [ [ResearchGate](https://www.researchgate.net/profile/Jacinto_Nascimento) ]

#### Revisors

* Hugo Lencastre [ [ResearchGate](https://www.researchgate.net/profile/Hugo_Lencastre) ]

* Nádia Mourão [ [ResearchGate](https://www.researchgate.net/profile/Nadia_Mourao) ]

#### Companions

* Alfredo Ferreira
* Bruno Cardoso
* Bruno Dias
* Bruno Oliveira
* Catarina Barata
* Daniel Gonçalves
* João Bernardo Tavares
* Luís Ribeiro Gomes
* Madalena Pedreira
* Pedro Miraldo

#### Acknowledgments

This work was partially supported by national funds through [FCT](http://fct.pt/) and [IST](http://tecnico.ulisboa.pt/) through the [UID/EEA/50009/2013](https://www.fct.pt/apoios/projectos/consulta/vglobal_projecto.phtml.en?idProjecto=147329&idElemConcurso=8999) project, [BL89/2017-IST-ID](http://ist-id.pt/en/) grant. We thank [Dr. Clara Aleluia](https://www.researchgate.net/profile/Clara_Aleluia) and her [radiology team](https://repositorio.hff.min-saude.pt/handle/10400.10/4?locale=en) of [HFF](https://hff.min-saude.pt/) for valuable insights and helping using the *Assistant* on their daily basis. From [IPO-Lisboa](http://www.ipolisboa.min-saude.pt/), we would like to thank the medical imaging teams of [Dr. José Carlos Marques](https://www.researchgate.net/profile/Jose_Marques42) and [Dr. José Venâncio](http://www.ipolisboa.min-saude.pt/servicosclinicos/radiologia/). From [IPO-Coimbra](https://ipocoimbra.com), we would like to thank the radiology department director and the all team of [Dr. Idílio Gomes](https://ipocoimbra.com/servico-de-imagiologia/). Also, we would like to provide our acknowledgments to Dr. Emília Vieira and Dr. Cátia Pedro from [Hospital Santa Maria](http://www.chln.min-saude.pt/). Furthermore, we want to thank all team from the radiology department of [HB](http://www.chbm.min-saude.pt/) for participation. Last but not least, a great thanks to [Dr. Cristina Ribeiro da Fonseca](http://imi.pt/pt/content/31-corpo-clnico/32-profissionais-imi?content=55), who among others is giving us crucial information for the [BreastScreening](https://github.com/BreastScreening) project.

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
