import React, { useEffect, useState } from "react";
import { getData } from "../api/Champion";
import { summonerInfo } from "./Utils";
import { useQuery } from "react-query";

const Profile = () => {
  const { data, isLoading } = useQuery(["response.data"], getData);

  if (isLoading) {
    return <h3></h3>;
  }
  const imgUrl = process.env.REACT_APP_PROFILE_ICON_URL?.replaceAll(
    '"',
    ""
  ).replace(";", "");
  const profile_icons: string = `${imgUrl}${data.profileIconId}.png`;

  return (
    <article>
      {data && (
        <div className="flex h-[228px] w-full bg-white">
          <div className="wrapper flex w-[1080px] mx-auto my-0">
            <div className="header-profile flex pt-2.5 pr-2.5 pb-4 pl-0 mt-8 relative basis-24">
              <div className="profile-icon">
                <img
                  src={`${profile_icons}`}
                  alt="icon"
                  className="w-24 h-24 float-left rounded-2xl"
                />
                <div className="level absolute text-center pt-20 pl-7">
                  <span className="inline-block py-0 px-2 bg-[#202D37] rounded-lg text-xs leading-5 text-white">
                    {data?.summonerLevel}
                  </span>
                </div>
              </div>
            </div>
            <div className="info ml-6">
              <div className="prev-tier items-center justify-between mt-4">
                <ul className="flex tier-list list-none">
                  <li className="leading-5 py-0 px-1 text-xs ml-1 rounded-sm bg-[#ebeef1]">
                    <div className="releative text-[#9AA4AF]">
                      <b>S2023 S1</b> silver 4
                    </div>
                  </li>
                  <li className="leading-5 py-0 px-1 text-xs ml-1 rounded-sm bg-[#ebeef1]">
                    <div className="releative text-[#9AA4AF]">
                      <b>S2023</b> silver 4
                    </div>
                  </li>
                  <li className="leading-5 py-0 px-1 text-xs ml-1 rounded-sm bg-[#ebeef1]">
                    <div className="releative text-[#9AA4AF]">
                      <b>S2023</b> silver 4
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex name mt-2">
                <h1 className="summoner-name text-2xl font-bold">
                  {data?.name}
                </h1>
                <button className="w-7 h-7 rounded border-solid border ml-2 mt-0.5 border-[#DBE0E4]">
                  <img
                    src="https://s-lol-web.op.gg/images/icon/icon-bookmark.svg?v=1690447902108"
                    alt="off"
                  />
                </button>
              </div>
              <div className="advertise mt-2 items-center">
                <a
                  href="!#"
                  className="flex border border-[#DBE0E4] bg-white p-1.5 rounded"
                >
                  <img
                    src="https://s-lol-web.op.gg/assets/images/icons/riot-logomark-circle-offwhite@2x.png?image=q_auto,f_webp,w_32&v=1690447901880"
                    alt="logo"
                    className="w-4 h-4"
                  />
                  <span className="text-xs ml-2">
                    라이엇 계정 연동하고 나만의 프로필을 설정해보세요.
                  </span>
                  <img
                    src="https://s-lol-web.op.gg/images/icon/icon-arrow-right.svg?v=1690447901880"
                    alt=">"
                    className="ml-2.5 w-5 h-5"
                  />
                </a>
              </div>
              <div className="reload_button mt-2">
                <button
                  type="button"
                  className="rounded text-white bg-[#5383e9] py-2.5 px-3 text-sm"
                >
                  전적 갱신
                </button>
              </div>
              <div className="last-update mt-1.5 text-xs text-gray-400">
                <div>최근 업데이트 : 3일 전</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default Profile;
