export const privatChats = [
  {
    id: 123,
    title: "my-chat",
    avatar: "/123/avatar1.jpg",
    unread_count: 0,
    last_message: {
      user: {
        first_name: "Petya",
        second_name: "Pupkin",
        avatar: "/path/to/avatar.jpg",
        email: "my@email.com",
        login: "userLogin",
        phone: "8(911)-222-33-22",
      },
      time: "2020-01-02T14:22:22.000Z",
      content: "this is message content",
    },
  },
  {
    id: 234,
    title: "poodles",
    avatar: "/123/avatar2.jpg",
    unread_count: 10,
    last_message: {
      user: {
        first_name: "Petya",
        second_name: "Pupkin",
        avatar: "/path/to/avatar.jpg",
        email: "my@email.com",
        login: "userLogin",
        phone: "8(911)-222-33-22",
      },
      time: "2020-01-02T14:22:22.000Z",
      content: "this is message content",
    },
  },
  {
    id: 456,
    title: "central-park",
    avatar: "/123/avatar3.jpg",
    unread_count: 1,
    last_message: {
      user: {
        first_name: "Petya",
        second_name: "Pupkin",
        avatar: "/path/to/avatar.jpg",
        email: "my@email.com",
        login: "userLogin",
        phone: "8(911)-222-33-22",
      },
      time: "2020-01-02T14:22:22.000Z",
      content: "this is message content",
    },
  },
];

export const messages = [
  {
    owner: "me",
    message: "test from me",
    time: "11:45",
  },
  {
    owner: "Ivan",
    message: "test from Ivan",
    time: "11:50",
  },
];
