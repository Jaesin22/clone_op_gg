import React, { useState } from "react";
import Spinner from "./spinner/Spinner";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Beacon = () => {
  const [content, setContent] = useState("");
  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSendEmailLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string,
        process.env.REACT_APP_NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
        e.currentTarget,
        process.env.REACT_APP_NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY as string
      )
      .then(
        () => {
          toast.success("문의가 등록되었습니다 :)");
          setIsSendEmailLoading(false);
        },
        (error) => {
          console.log(error);
          toast.error("잠시후 다시 시도해주세요 :(");
          setIsSendEmailLoading(false);
        }
      );
  };
  const [isSendEmailLoading, setIsSendEmailLoading] = useState(false);
  return (
    <div className="absolute right-[15px] bottom-[15px] w-fit z-50">
      <div className="content absolute top-[1200px] right-0 w-[300px] h-[400px] pt-5 pl-6 pr-2.5 pb-6 rounded-2xl bg-white shadow-lg">
        <h3 className="w-fit mb-2.5 font-semibold">문의하기</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full h-[280px] mb-2.5 border rounded p-2.5 resize-none"
            name="content"
            placeholder="에러 발생, 문의 사항, 기능 추가 등등 많은 의견 보내주시면 감사하겠습니다!"
            onChange={handleContent}
          ></textarea>
          <button
            className="flex justify-center content-center text-center font-semibold w-full p-2 rounded text-white bg-[#1683E7]"
            disabled={content.trim().length === 0 || isSendEmailLoading}
          >
            {isSendEmailLoading ? <Spinner /> : "등록"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Beacon;
