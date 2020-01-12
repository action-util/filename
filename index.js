const core = require('@actions/core');
const github = require('@actions/github');

const setOutputs = (dirname, basename) => {
  console.log(`dirname: “${dirname}”`);
  console.log(`basename: “${basename}”`);
  core.setOutput('dirname', dirname);
  core.setOutput('basename', basename);
};

try {
  const path = core.getInput('path');
  console.log(`path: “${path}”`);

  if (path.match(/[/]/)) {
    setOutputs(
      path.replace(/[/][^/]*$/, ''),
      path.replace(/.*[/]/, '')
    );
  } else {
    setOutputs('.', path);
  }

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
