import PropTypes from "prop-types";
import { Wrapper, TextWrapper, Text, Image } from "./ActorCard.styled";

function ActorCard({ actors }) {
  const { character, name, profile_path } = actors;
  const imageStub = "https://i.ibb.co/4MnLhbM/sorry1.jpg";
  const imageBaseUrl = "https://image.tmdb.org/t/p/w342";

  return (
    <Wrapper>
      <Image
        src={profile_path ? imageBaseUrl + profile_path : imageStub}
        alt={name}
      />
      <TextWrapper>
        <Text>{name}</Text>
        <Text>Character: {character}</Text>
      </TextWrapper>
    </Wrapper>
  );
}

ActorCard.propTypes = {
  actors: PropTypes.object.isRequired,
};

export default ActorCard;
