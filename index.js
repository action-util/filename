const core = require('@actions/core');
const github = require('@actions/github');

try {
  const path = core.getInput('path');
  console.log(`path: “${path}”`);

  if (path.match(/\//) {
    core.setOutput('dirname', path.replace(/\/[^/]*$/, '');
    core.setOutput('basename', path.replace(/.*\//, '');
  } else {
    core.setOutput('dirname', '.');
    core.setOutput('basename', path);
  }

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
