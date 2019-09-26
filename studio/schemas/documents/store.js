export default {
  title: 'Store',
  name: 'store',
  type: 'document',
  fields: [
    {
      title: 'Store Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Physical Address',
      name: 'address',
      type: 'string'
    },
    {
      title: 'Opening Hours',
      name: 'openingHours',
      type: 'array',
      of: [{type: 'dayAndTime'}]
    },
    {
      title: 'Storefront Image',
      name: 'storefrontImage',
      type: 'image',
      description: 'A nice picture of the store so bypassers will know what to look for'
    }
  ]
}
