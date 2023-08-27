import { useState } from "react";
const SearchHooks = () => {
  //string은 map을 사용 할 수 없기때문에 object 형태로 변환 시키기 위해 parsing을 해줘야함
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

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
  return { handleAddKeyword, handleRemoveKeyword, keywords };
};

export default SearchHooks;
