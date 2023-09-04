import { useState } from "react";
const SearchHooks = () => {
  //string은 map을 사용 할 수 없기때문에 object 형태로 변환 시키기 위해 parsing을 해줘야함
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  const handleAddFavorites = (text: string) => {
    if (
      !favorites.find(
        (favorite: { id: Date; name: string }) => favorite.name === text
      )
    ) {
      const newFavorite = {
        id: Date.now(),
        name: text,
      };
      setFavorites((prevFavorites: []) => [newFavorite, ...prevFavorites]);
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, newFavorite])
      );
    } else {
      // 이미 즐겨찾기에 추가된 경우 제거
      const updatedFavorites = favorites.filter(
        (favorite: { id: Date; name: string }) => favorite.name !== text
      );
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const handleRemoveFavorites = (id: Date) => {
    const nextFavorite = favorites.filter(
      (thisFavorite: { id: Date; name: string }) => {
        return thisFavorite.id !== id;
      }
    );
    setFavorites(nextFavorite);
    localStorage.setItem("favorites", JSON.stringify(nextFavorite));
  };

  // 추가
  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    //setKeywords((prevKeywords: any) => [newKeyword, ...prevKeywords]);
    localStorage.setItem(
      "keywords",
      JSON.stringify([
        newKeyword,
        ...keywords.filter(
          (keyword: { id: Date; text: string }) =>
            keyword.text !== newKeyword.text
        ),
      ])
    );
    //
  };

  // 삭제
  const handleRemoveKeyword = (id: Date) => {
    const nextKeyword = keywords.filter(
      (thisKeyword: { id: Date; text: string }) => {
        return thisKeyword.id !== id;
      }
    );
    setKeywords(nextKeyword);
    localStorage.setItem("keywords", JSON.stringify(nextKeyword));
  };
  return {
    handleAddKeyword,
    handleRemoveKeyword,
    keywords,
    favorites,
    handleAddFavorites,
    handleRemoveFavorites,
  };
};

export default SearchHooks;
