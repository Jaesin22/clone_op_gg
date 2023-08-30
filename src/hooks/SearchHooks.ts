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
    const newFavorite = {
      id: Date.now(),
      name: text,
    };
    localStorage.setItem(
      "favorites",
      JSON.stringify([
        newFavorite,
        ...favorites.filter(
          (favorite: any) => favorite.name !== newFavorite.name
        ),
      ])
    );
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
        ...keywords.filter((keyword: any) => keyword.text !== newKeyword.text),
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
