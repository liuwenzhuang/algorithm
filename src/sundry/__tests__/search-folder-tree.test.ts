import { SearchFolderTree } from '../search-folder-tree'

describe('SearchFolderTree', () => {
  const sft = new SearchFolderTree()
  const source = [
    {
      name: '111',
      data: {
        type: 'project',
      },
      children: [
        {
          name: 'oneoneone-children1',
        },
        {
          name: 'oneoneone-children2',
        },
      ],
    },
    {
      name: '222',
      children: [
        {
          name: 'twotwotwo-children1',
          children: [
            {
              name: 'children1-of',
            },
          ],
        },
        {
          name: 'twotwotwo-children2',
        },
      ],
    },
    {
      name: '333',
      children: [],
    },
  ]
  it('SearchFolderTree should work properly', () => {
    expect(sft.solution(source, '222')).toEqual([
      {
        name: '222',
        open: true,
        children: [
          {
            name: 'twotwotwo-children2',
            open: false,
          },
        ],
      },
    ])

    expect(sft.solution(source, 'twotwotwo-children1')).toEqual([
      {
        name: '222',
        open: true,
        children: [
          {
            name: 'twotwotwo-children1',
            children: [
              {
                name: 'children1-of',
                open: false,
              },
            ],
            open: true,
          },
        ],
      },
    ])

    expect(sft.solution(source, '333')).toEqual([])

    expect(sft.solution(source, 'oneoneone-children')).toEqual([
      {
        name: '111',
        open: true,
        data: {
          type: 'project',
        },
        children: [
          {
            name: 'oneoneone-children1',
            open: true,
          },
          {
            name: 'oneoneone-children2',
            open: true,
          },
        ],
      },
    ])

    expect(sft.solution(source, '111')).toEqual([
      {
        name: '111',
        open: false,
        data: {
          type: 'project',
        },
        children: [
          {
            name: 'oneoneone-children1',
            open: false,
          },
          {
            name: 'oneoneone-children2',
            open: false,
          },
        ],
      },
    ])
  })
})
