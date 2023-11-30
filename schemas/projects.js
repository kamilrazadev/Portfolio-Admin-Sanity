export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description',
      },
      {
        name: 'liveLink',
        type: 'string',
        title: 'Live Link',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Project Image',
      },
      {
        name: 'overview',
        type: 'string',
        title: 'Overview',
      },
      {
        name: 'toolsUsed',
        type: 'object',
        title: 'Tools Used',
        fields: [
          {
            name: 'tools',
            type: 'array',
            title: 'Tools',
            of: [{ type: 'string' }],
          },
        ],
      },
    ],
  };
  