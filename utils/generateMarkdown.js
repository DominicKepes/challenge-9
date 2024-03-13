function generateLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

function generateLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

function generateLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.projectTitle}
${generateLicenseBadge(data.projectLicense)}

## Description

${data.projectDescription}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${generateLicenseLink(data.projectLicense)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.dependenciesInstallation}
\`\`\`

## Usage

${data.repositoryUsage}

${generateLicenseSection(data.projectLicense)}
  
## Contributing

${data.contributionInfo}

## Tests

To run tests, run the following command:

\`\`\`
${data.testCommand}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
    data.emailAddress
  }. You can find more of my work at [${data.githubUsername}](https://github.com/${
    data.githubUsername
  }/).

`;
}

module.exports = generateMarkdown;
