export const menuItemsData = [
    {
        title: 'Accueil',
        url: '/accueil'
    },
    {
      title: 'Club',
      url: '/routine',
      submenu: [
        {
            title: 'Club 1 GP',
            url: 'club-1-gp',
          },
        {
          title: 'Club 2 GP',
          url: 'club-2-gp',
        },
        {
          title: 'Club 3 GP',
          url: 'club-3-gp',
        },
      ],
    },
    {
        title: 'Amateur',
        url: '/routine',
        submenu: [
          {
              title: 'Amat 1 A',
              url: 'amateur-1-a',
            },
          {
            title: 'Amat 2 A',
            url: 'amateur-2-a',
          },
          {
            title: 'Amat 3 A',
            url: 'amateur-3-a',
          },
        ],
      },
    {
        title: 'À propos',
        url: '/about'
    }
  ];