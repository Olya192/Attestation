import { getInfo, getInfoTwo } from "../../Api";
import * as S from "./Users.Styles";
import { useState } from "react";

export const Users = ({ user }) => {
  const [userFollowers, setUserFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [accordion, setAccordion] = useState(false);
  const [repositories, setRepositories] = useState([]);

  const userInfo = () => {
    if (accordion) {
      setAccordion(false);
      return;
    }
    setLoading(true);
    getInfo(user.followers_url)
      .then((followers) => {
        setUserFollowers(followers);
      })
      .then(() =>
        getInfo(user.repos_url).then((repos) => {
          console.log("repos", repos);
          setRepositories(repos);
          setLoading(false);
          setAccordion(true);
        })
      );
  };

  return (
    <S.userInform onClick={userInfo}>
      <S.UserData>
        <S.UserImg src={user.avatar_url} />
        <p>{user.login}</p>
      </S.UserData>
      <div style={{ display: accordion ? "block" : "none" }}>
        <p style={{ display: loading ? "block" : "none" }}>
          Загружаю информацию...
        </p>
        <div style={{ display: loading ? "none" : "block" }}>
          <p>Repositories {repositories.length}</p>
          <p>Followers {userFollowers.length}</p>
          <S.UserLink href={user.html_url}> Перейти в профиль</S.UserLink>
        </div>
      </div>
    </S.userInform>
  );
};
