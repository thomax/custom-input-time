export default {
  widgets: [
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
                  buildHookId: '5d8213ff3f11dc4c3deaf089',
                  title: 'Sanity Studio',
                  name: 'custom-input-time-studio',
                  apiId: '7dd31cdb-16e6-4b4e-a6e3-c165155b9d39'
                },
                {
                  buildHookId: '5d8213ffd6037873d41db534',
                  title: 'Landing pages Website',
                  name: 'custom-input-time',
                  apiId: 'b95ce74b-6678-4184-8da7-553d4df17169'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thomax/custom-input-time',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://custom-input-time.netlify.com', category: 'apps'}
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
