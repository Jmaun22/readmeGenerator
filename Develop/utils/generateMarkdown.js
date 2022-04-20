// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT'){
    return `![MIT license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else if(license == 'APACHE 2.0') {
    return `![MIT license](https://img.shields.io/badge/license-${license}-blue.svg)`;

  } else if(license == 'GPL 3.0') {
    return `![MIT license](https://img.shields.io/badge/license-${license}-blue.svg)`;

  } else if(license == 'BSD 3') {
    return `![MIT license](https://img.shields.io/badge/license-${license}-blue.svg)`;

  } else {
    return ''
  }



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == 'MIT'){
    return `(MIT${license})[https://choosealicense.com/licenses/mit/]`;
  } else if(license == 'APACHE 2.0') {
    return `(APACHE 2.0${license})[https://www.apache.org/licenses/LICENSE-2.0]`;

  } else if(license == 'GPL 3.0') {
    return `(GPL 3.0${license})[https://www.gnu.org/licenses/gpl-3.0.en.html]`;

  } else if(license == 'BSD 3') {
    return `(BSD 3${license})[https://docs.oracle.com/cloud/latest/big-data-discovery-cloud/BDDLG/cl_bsd_license.htm#BDDLG-concept_1F381CA11423445A90B7C3D6CB4DF612]`;

  } else {
    return ''
  }



}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

