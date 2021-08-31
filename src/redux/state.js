let state = {
    messagePage: {
      messageData : [
        {id: 1, message: 'hello'},
        {id: 2, message: 'good bye!'},
        {id: 3, message: 'good afternoon!'},
        {id: 4, message: 'adios!'},
      ],
      dialogData: [
        {id: 1, name: 'Victoria'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Jhon'},
        {id: 4, name: 'Cristian'},
        {id: 5, name: 'Hanz'},
        {id: 6, name: 'Ashley'},
      ]
    },
    profilePage: {
      postData: [{
          id: 1,
          message: 'Hi, how are you?',
          likes: 5
        },
        {
          id: 2,
          message: 'Hi, i`m Jhon!',
          likes: 10
        },
      ],
    },
    navMenu: {
      friendsData: [{
          id: 1,
          message: 'Hi, how are you?',
          likes: 5
        },
        {
          id: 2,
          message: 'Hi, i`m Jhon!',
          likes: 10
        },
      ],
    },
}

export let addPost = (postMessage) => {
  let newPost = {
      id: 5,
      message: postMessage,
      likes: 0
  };
  state.profilePage.postData.push(newPost);
}

export default state;
