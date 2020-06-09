export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edf6db9e1d021019ebf1f5a',
                  title: 'Sanity Studio',
                  name: 'senso-sanity-studio',
                  apiId: '5363df8e-811e-4504-86ac-5980db2f1afb'
                },
                {
                  buildHookId: '5edf6db9e1d02101b2bf1ef4',
                  title: 'Landing pages Website',
                  name: 'senso-sanity',
                  apiId: '6ebeb228-58a3-443b-8227-578bc0c4033d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thompson-mcdonald/senso-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://senso-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
