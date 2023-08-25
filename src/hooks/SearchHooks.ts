import { useState, useEffect } from "react";
const SearchHooks = () => {
  //string은 map을 사용 할 수 없기때문에 object 형태로 변환 시키기 위해 parsing을 해줘야함
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  //keyword에 변화가 일어날때만 랜더링
  useEffect(() => {
    //array 타입을 string형태로 바꾸기 위해 json.stringfy를 사용한다.
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  // 추가
  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords((prevKeywords: any) => [newKeyword, ...prevKeywords]);
    // localStorage.setItem("keywords", JSON.stringify([newKeyword, ...keywords]));
  };

  // 삭제
  const handleRemoveKeyword = (id: Date) => {
    const nextKeyword = keywords.filter(
      (thisKeyword: { id: Date; text: string }) => {
        return thisKeyword.id !== id;
      }
    );
    setKeywords(nextKeyword);
  };
  return { handleAddKeyword, handleRemoveKeyword, keywords };
};

export default SearchHooks;
