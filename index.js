const core = require('@actions/core');
const github = require('@actions/github');

try {
  const path = core.getInput('path');
  console.log(`path: “${path}”`);

  const match = path.match(/^(.*)\/([^\\]*)$/);

  if (match) {
    core.setOutput('dirname', match[2]);
    core.setOutput('basename', match[3]);
  } else {
    core.setOutput('dirname', '.');
    core.setOutput('basename', path);
  }

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
