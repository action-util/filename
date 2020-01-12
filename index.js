const core = require('@actions/core');
const github = require('@actions/github');

try {
  const path = core.getInput('path');
  console.log(`path: “${path}”`);

  const basename = path.replace(/.*\//, '');
  const dirname = path.replace(/\/[^\/]*$/, '');

  core.setOutput("dirname", dirname);
  core.setOutput("basename", basename);

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
