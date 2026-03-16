module.exports = (plop) => {
    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Enter component name'
            }
        ],
        actions: () => {
            const path = `src/components/`
            return [
                {
                    type: 'add',
                    path: `${path}{{pascalCase name}}/{{pascalCase name}}.tsx`,
                    templateFile: 'plop-templates/Component/Component.tsx.hbs'
                },
                {
                    type: 'add',
                    path: `${path}{{pascalCase name}}/index.ts`,
                    templateFile: 'plop-templates/Component/index.ts.hbs'
                },
                {
                    type: 'add',
                    path: `${path}{{pascalCase name}}/style.module.scss`
                }
            ]
        }
    })
}
