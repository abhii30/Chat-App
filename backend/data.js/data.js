const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "John Doe",
        email: "john@example.com",
      },
      {
        name: "Abhishek",
        email: "akumar@gmail.com",
      },
    ],
    _id: "1",
    chatName: "John Doe",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "a@gmail.com",
      },
      {
        name: "Abhishek",
        email: "b@gmail.com",
      },
      {
        name: "C",
        email: "c@gmail.com",
      },
    ],
    _id: "2",
    chatName: "Group Chat",
  },
];

module.exports = { chats };
