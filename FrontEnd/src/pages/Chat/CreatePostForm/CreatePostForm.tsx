import { Icon } from "@iconify/react/dist/iconify.js";
import * as S from ".";

function CreatePostForm() {
  return (
    <S.PostFormContainer>
      <S.FormHeading>
        <S.Text>Create New Post</S.Text>
        <S.Button>
          Send Post <Icon icon="mingcute:arrow-right-line" />
        </S.Button>
      </S.FormHeading>
      <S.FormComponent>
        <textarea placeholder="Write your post"></textarea>
      </S.FormComponent>
      <S.FormFooter>
        <S.NotifyFrends>
          <input draggable="false" type="checkbox" id="notifyFriends" />
          <label draggable="false" htmlFor="notifyFriends">
            Notify Friends
          </label>
        </S.NotifyFrends>
      </S.FormFooter>
    </S.PostFormContainer>
  );
}

export default CreatePostForm;
