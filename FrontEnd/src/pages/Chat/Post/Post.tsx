import { Icon } from "@iconify/react/dist/iconify.js";
import * as S from "./index";

type PostData = {
  user: {
    online?: boolean;
    name: string;
    image: {
      url: string;
    };
  };
  content: string;
  date: string;
};

type PostProps = {
  postData: PostData;
};

export const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <S.PostWrapper>
      <S.PostTop>
        <S.UserContainer>
          <S.UserImage src={postData.user.image.url} alt="User Image" />
          <S.PostText>
            <S.Username>{postData.user.name}</S.Username>
            <S.PostTime>{postData.date}</S.PostTime>
          </S.PostText>
        </S.UserContainer>

        <div>
          <p>|</p>
        </div>
      </S.PostTop>

      <S.PostContent>
        <S.PostContentText>{postData.content}</S.PostContentText>
      </S.PostContent>

      <S.PostBottom>
        <S.CommentsContainer>
          <Icon icon="bxs:message" color="white" />
          <S.PinText>7</S.PinText>
        </S.CommentsContainer>

        <S.CommentsContainer>
          <Icon icon="mdi:heart" color="white" />
          <S.PinText>5</S.PinText>
        </S.CommentsContainer>
      </S.PostBottom>
    </S.PostWrapper>
  );
};
