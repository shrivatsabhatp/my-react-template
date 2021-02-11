const defaultDestinationPath = "src/components/{{pascalCase name}}/";

const styleFileType = "css";

const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + " is required";
    }
    return true;
  };
};

const typeScriptTemplate = (destinationPath) => {
  return [
    {
      type: "add",
      path: destinationPath + "{{pascalCase name}}.tsx",
      templateFile: "plop-templates/typescript/component.hbs",
    },
    {
      type: "add",
      path: destinationPath + "{{pascalCase name}}.test.tsx",
      templateFile: "plop-templates/typescript/component.test.hbs",
    },
    {
      type: "add",
      path: destinationPath + "{{pascalCase name}}.stories.tsx",
      templateFile: "plop-templates/typescript/component.stories.hbs",
    },
    {
      type: "add",
      path: destinationPath + "{{pascalCase name}}.module." + styleFileType,
      templateFile: "plop-templates/typescript/component.module.hbs",
    },
    {
      type: "add",
      path: destinationPath + "index.ts",
      templateFile: "plop-templates/typescript/index.hbs",
    },
  ];
};

const javaScriptTemplate = (destinationPath) => {
  return [
    {
      type: "add",
      path: destinationPath + "{{pascalCase name}}.js",
      templateFile: "plop-templates/javascript/component.hbs",
    },
    {
      type: "add",
      path: destinationPath + "{{pascalCase name}}.test.js",
      templateFile: "plop-templates/javascript/component.test.hbs",
    },
    {
      type: "add",
      path: destinationPath + "{{pascalCase name}}.stories.js",
      templateFile: "plop-templates/javascript/component.stories.hbs",
    },
    {
      type: "add",
      path: destinationPath + "{{pascalCase name}}.module." + styleFileType,
      templateFile: "plop-templates/javascript/component.module.hbs",
    },
    {
      type: "add",
      path: destinationPath + "index.js",
      templateFile: "plop-templates/javascript/index.hbs",
    },
  ];
};

const listComponents = [
  {
    name: "index file",
    value: "index",
  },
  {
    name: "component file",
    value: "component",
  },
  {
    name: "style file ",
    value: "style",
  },
  {
    name: "storybook file",
    value: "stories",
  },
  {
    name: "testing file",
    value: "test",
  },
];

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("basics", {
    description: "Generate a new React component",
    prompts: [
      {
        type: "list",
        name: "action",
        message: "Select action",
        default: "create",
        choices: () => [
          {
            name: "Create component folder",
            value: "create",
          },
          {
            name: "Add separate component",
            value: "add",
          },
        ],
      },
      {
        type: "list",
        name: "component",
        message: "Select component",
        when: (answer) => answer.action === "add",
        choices: listComponents,
      },
      {
        type: "input",
        name: "name",
        message: "Component name:",
        when: (answer) => answer.component !== "index",
        validate: (value) => {
          if (!value) {
            return "Component name is required";
          }
          return true;
        },
      },
      {
        type: "list",
        name: "type",
        message: "Select type of file extension for component",
        default: "js",
        choices: () => [
          { name: "JavaScript(.js)", value: "js" },
          { name: "TypeScript(.tsx)", value: "tsx" },
          // { name: "JSX(.jsx)", value: "jsx" },
        ],
      },
      {
        type: "confirm",
        name: "check",
        message: "Do you want change generated file location?",
        default: false,
      },
      {
        type: "input",
        name: "path",
        message: "Enter the path (base: src/components/):",
        when: (answer) => answer.check === true,
        validate: (value) => {
          if (!value) {
            return "Path name is required";
          }
          return true;
        },
      },
    ],
    actions: function (data) {
      console.log(data);
      return data.action === "add"
        ? AddTheTemplate(data)
        : CreateNewTemplate(data);
    },
  });
};

const CreateNewTemplate = (data) => {
  let path = defaultDestinationPath;
  if (data.check) {
    path = "src/components/" + data.path + "/{{pascalCase name}}/";
  }

  if (data.type === "tsx") {
    return typeScriptTemplate(path);
  } else {
    return javaScriptTemplate(path);
  }
};

const AddTheTemplate = (data) => {
  let path = defaultDestinationPath;
  let folder = data.type === "tsx" ? "typescript" : "javascript";

  if (data.check) {
    path = "src/components/" + data.path;
  }

  if (data.component === "component") {
    return [
      {
        type: "add",
        path: path + "/{{pascalCase name}}/{{pascalCase name}}." + data.type,
        templateFile: "plop-templates/" + folder + "/component.hbs",
      },
    ];
  } else if (data.component === "style") {
    return [
      {
        type: "add",
        path: path + "{{pascalCase name}}." + styleFileType,
        templateFile: "plop-templates/" + folder + "/component.module.hbs",
      },
    ];
  } else if (data.component === "test") {
    return [
      {
        type: "add",
        path: path + "{{pascalCase name}}.test." + data.type,
        templateFile: "plop-templates/" + folder + "/component.test.hbs",
      },
    ];
  } else if (data.component === "stories") {
    return [
      {
        type: "add",
        path: path + "{{pascalCase name}}." + data.type,
        templateFile: "plop-templates/" + folder + "/component.stories.hbs",
      },
    ];
  } else {
    const type = data.type === "tsx" ? "ts" : "js";
    return [
      {
        type: "add",
        path: path + "/index." + type,
        templateFile: "plop-templates/" + folder + "/index.hbs",
      },
    ];
  }
};
