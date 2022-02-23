import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getMovieCast } from "../../services/moviesApi";
import { CastList, CastItem, CastText } from "./Cast.styled";
import ActorCard from "./ActorCard";
import { FaSadTear } from "react-icons/fa";
import Loader from "../Loader";

function Cast() {
  const [cast, setCast] = useState(null);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getMovieCast(params.movieId)
      .then(({ cast }) => setCast(cast))
      .finally(() => setIsLoading(false));
  }, [params.movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {cast && (
        <>
          {cast?.length === 0 ? (
            <div>
              <CastText>
                Sorry, we don't have any cast for this movie <FaSadTear />
              </CastText>
            </div>
          ) : (
            <CastList>
              {cast.map((actors) => (
                <CastItem key={actors.id}>
                  <ActorCard actors={actors} />
                </CastItem>
              ))}
            </CastList>
          )}
        </>
      )}
    </>
  );
}

export default Cast;
