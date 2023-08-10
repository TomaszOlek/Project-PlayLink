import styled from "styled-components";
import { Helmet } from "react-helmet";

const UserProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const UserProfile = ({ user }) => {
  const { name, location, picture, login } = user;
  const { first, last } = name;
  const { street, city, state, postcode } = location;
  const pageTitle = `${login.username}'s Profile`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <UserProfileContainer>
        <img src={picture.large} alt={login.username} />
        <h2>{`${first} ${last}'s Profile`}</h2>
        <p>
          Location:{" "}
          {`${street.number} ${street.name}, ${city}, ${state}, ${postcode}`}
        </p>
      </UserProfileContainer>
    </>
  );
};

export default UserProfile;
