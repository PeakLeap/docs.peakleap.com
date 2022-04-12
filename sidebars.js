/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Tutorial",
      items: ["intro"],
    },
    {
      type: "category",
      label: "Tutorial-Basic",
      items: [
        "tutorial-basics/congratulations",
        "tutorial-basics/create-a-blog-post",
        "tutorial-basics/create-a-document",
        "tutorial-basics/create-a-page",
        "tutorial-basics/deploy-your-site",
        "tutorial-basics/markdown-features",
      ],
    },
    {
      type: "autogenerated",
      dirName: "tutorial-extras",
    },
  ],
  docsSidebar: [
    {
      type: "category",
      label: "Documentation",
      items: ["documentation/getting-started"],
    },
    {
      type: "category",
      label: "Courses",
      items: [
        "documentation/courses/create-a-course",
        "documentation/courses/edit-course",
        "documentation/courses/participants",
        "documentation/courses/sections",
        "documentation/courses/settings",
      ],
    },
    {
      type: "category",
      label: "Assessments",
      items: [
        "documentation/assessments/create-new-assessment",
        "documentation/assessments/participants",
        "documentation/assessments/questions",
        "documentation/assessments/settings",
      ],
    },
    {
      type: "category",
      label: "Credentials",
      items: [
        "documentation/credentials/batch-issue",
        "documentation/credentials/issue-credential",
      ],
    },
    {
      type: "category",
      label: "Programs",
      items: [
        "documentation/programs/create-new-program",
        "documentation/programs/edit-program",
      ],
    },
  ],
};

module.exports = sidebars;
