

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `https://choosealicense.com/licenses/${license}`
    )
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      Licensed under the ${license} license.`

    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  ![Demo Screenshot](./assets/images/${data.screenshot})

  ## Credits
  ${data.credits}
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license.toLowerCase())}
  
`;
}

module.exports = generateMarkdown;