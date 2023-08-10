import * as S from "./index";

import CreatePostForm from "./CreatePostForm/CreatePostForm";
import { Post } from "./Post";

const POSTS_DATA = {
  allPosts: [
    {
      user: {
        online: true,
        name: "TestUser",
        image: {
          url: "https://lh3.googleusercontent.com/a/AAcHTte6EyXTvadKfvGHNoFAvpOidRWSPz6PhTE-N06GImPUYA=s96-c",
        },
      },
      content: "Hi everyone",
      date: "Today 8:24",
    },
    {
      user: {
        name: "TestUser",
        image: {
          url: "https://lh3.googleusercontent.com/a/AAcHTte6EyXTvadKfvGHNoFAvpOidRWSPz6PhTE-N06GImPUYA=s96-c",
        },
      },
      content: "Wanna play a bit of fall guys? Anyone?",
      date: "1 day ago",
    },
  ],
};

export const Chat = () => {
  return (
    <S.ChatContainer>
      <CreatePostForm />
      <S.PostsWraper>
        {POSTS_DATA.allPosts.map((post) => (
          <Post postData={post} />
        ))}
      </S.PostsWraper>
    </S.ChatContainer>
  );
};
