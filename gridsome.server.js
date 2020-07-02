// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async (actions) => {
    // skills
    const skillsList = require('./src/data/skills.json');
    const skillsCollection = actions.addCollection({
      typeName: 'skillsList',
    });
    for (const skillItem of skillsList) {
      skillsCollection.addNode(skillItem);
    }
    // project list
    const ProjectList = require('./src/data/projectList.json');
    const projectCollection = actions.addCollection({
      typeName: 'ProjectList',
    });
    for (const projectItem of ProjectList) {
      projectCollection.addNode(projectItem);
    }
    // contact links
    const ContactList = require('./src/data/links.json');
    const contactCollection = actions.addCollection({
      typeName: 'ContactList',
    });
    for (const contactItem of ContactList) {
      contactCollection.addNode(contactItem);
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
