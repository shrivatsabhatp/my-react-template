const destinationPath = "src/components/{{pascalCase name}}/";

const styleFileType = "css";

const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + " is required";
    }
    return true;
  };
};

const typeScriptTemplate = () => {
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

const javaScriptTemplate = () => {
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

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("basics", {
    description: "This is a skeleton plop-file",
    prompts: [
      {
        type: "boolean",
        name: "type",
        message: "Type of file extension (js/tsx)?",
        validate: requireField("type"),
      },
      {
        type: "input",
        name: "name",
        message: "Name of your component?",
        validate: requireField("name"),
      },
    ],
    actions: function (data) {
      let action = [];

      if (data.type === "tsx") {
        action = typeScriptTemplate();
      } else {
        action = javaScriptTemplate();
      }
      return action;
    },
  });
};
