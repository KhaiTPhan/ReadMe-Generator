const inquirer = require('inquirer');
const fs = require('fs');

// * Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of the project?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you located?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Write a bio.',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linkedin',
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'github',
    },
  ])
  .then((response) => {
    let data = `
    
    # ${name}

      Foobar is a Python library for dealing with word pluralization.

      ## Installation

      Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

      ```bash
      pip install foobar
      ```

      ## Usage

      ```python
      import foobar

      foobar.pluralize('word') # returns 'words'
      foobar.pluralize('goose') # returns 'geese'
      foobar.singularize('phenomena') # returns 'phenomenon'
      ```

      ## Contributing
      Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

      Please make sure to update tests as appropriate.

      ## License
      [MIT](https://choosealicense.com/licenses/mit/)
    
    `
    fs.writeFile('Readme.md', data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    }
  );

  