import { Users } from "../userInfo/Users";
import * as S from "./Container.Styles";
import { useState } from "react";
import { getCards } from "../../Api";

export const Container = () => {
  const [usersInfo, setUsersInfo] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState(false);
  const [order, setOrder] = useState("desc");
  const [error, setError] = useState(null);

  const getUsersCard = (i, s, orient) => {
    getCards(searchValue, i || page, s || sort, orient || order)
      .then((cards) => {
        setLoading(false);
        setUsersInfo(cards);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const userCards = () => {
    if (searchValue === "") {
      setError("введите логин");
      return;
    } else {
      setError(null);
      setLoading(true);
      getUsersCard();
    }
  };

  const choicePage = (p) => {
    setLoading(true);
    let i = page + p;
    setPage(i);
    getUsersCard(i);
  };

  const sortPage = (orient) => {
    setLoading(true);
    setSort(true);
    setOrder(orient);
    getUsersCard(page, true, orient);
  };

  return (
    <S.Main>
      <S.MainTop>
        <S.MainInput
          data-testid="input"
          type="search"
          placeholder="Поиск по пользователям"
          name="search"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <S.InputButton data-testid="button" onClick={userCards}>
          Найти
        </S.InputButton>
      </S.MainTop>
      <p style={{ display: loading ? "block" : "none" }}>Поиск...</p>
      <p style={{ display: usersInfo.total_count !== 0 ? "none" : "block" }}>
        Ничего не найдено
      </p>
      <p style={{ display: !error ? "none" : "block" }}>{error}</p>
      <S.SortText>
        <p>Сортировать по количеству репозирориев:</p>
        <p onClick={() => sortPage("desc")}>Сначала больше</p>
        <p onClick={() => sortPage("asc")}>Сначала меньше</p>
      </S.SortText>
      <div style={{ visibility: usersInfo ? "visible" : "hidden" }}>
        {usersInfo.items?.map((user, index) => (
          <Users data-testid="users" key={index} user={user} />
        ))}
        {usersInfo && (
          <S.PagBlock>
            <S.PagButton
              onClick={() => choicePage(1)}
              style={{
                visibility:
                  page === Math.round(usersInfo.total_count / 10) && page < 10
                    ? "hidden"
                    : "visible",
              }}
            >
              {" "}
              Вперед
            </S.PagButton>
            <S.PagButton
              onClick={() => choicePage(-1)}
              style={{ visibility: page !== 1 ? "visible" : "hidden" }}
            >
              Назад
            </S.PagButton>
          </S.PagBlock>
        )}
      </div>
    </S.Main>
  );
};
