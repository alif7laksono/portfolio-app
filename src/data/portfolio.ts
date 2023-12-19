export interface PortfolioItem {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    client: string;
    category: string;
    date: string;
  }
  
  const portfolioData: PortfolioItem[] = [

    {
      id: 1,
      title: "Project 1",
      description: "Description for Project 1",
      imgUrl: "https://picsum.photos/200/300",
      client: "Client 1",
      category: "Category 1",
      date: "2023-01-01",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for Project 2",
      imgUrl: "https://picsum.photos/200/301",
      client: "Client 2",
      category: "Category 2",
      date: "2023-02-01",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for Project 3",
      imgUrl: "https://picsum.photos/200/302",
      client: "Client 3",
      category: "Category 3",
      date: "2023-03-01",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description for Project 4",
      imgUrl: "https://picsum.photos/200/303",
      client: "Client 4",
      category: "Category 4",
      date: "2023-04-01",
    },
    {
      id: 5,
      title: "Project 5",
      description: "Description for Project 5",
      imgUrl: "https://picsum.photos/200/304",
      client: "Client 5",
      category: "Category 5",
      date: "2023-05-01",
    },
    {
      id: 6,
      title: "Project 6",
      description: "Description for Project 6",
      imgUrl: "https://picsum.photos/200/305",
      client: "Client 6",
      category: "Category 6",
      date: "2023-06-01",
    },
    // {
    //   id: 7,
    //   title: "Project 6",
    //   description: "Description for Project 6",
    //   imgUrl: "https://picsum.photos/200/305",
    //   client: "Client 6",
    //   category: "Category 6",
    //   date: "2023-06-01",
    // },
    // {
    //   id: 8,
    //   title: "Project 6",
    //   description: "Description for Project 6",
    //   imgUrl: "https://picsum.photos/200/305",
    //   client: "Client 6",
    //   category: "Category 6",
    //   date: "2023-06-01",
    // },
    // {
    //   id: 9,
    //   title: "Project 6",
    //   description: "Description for Project 6",
    //   imgUrl: "https://picsum.photos/200/305",
    //   client: "Client 6",
    //   category: "Category 6",
    //   date: "2023-06-01",
    // },
    // {
    //   id: 10,
    //   title: "Project 6",
    //   description: "Description for Project 6",
    //   imgUrl: "https://picsum.photos/200/305",
    //   client: "Client 6",
    //   category: "Category 6",
    //   date: "2023-06-01",
    // },
  ];
  
  export default portfolioData;
