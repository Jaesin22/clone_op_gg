import React from "react";

const Profile = () => {
  return (
    <article>
      <div className="flex h-56 w-full bg-white">
        <div className="wrapper flex w-[1080px] mx-auto my-0">
          <div className="header-profile flex pt-2.5 pr-2.5 pb-4 pl-0 mt-8 relative basis-24">
            <div className="profile-icon">
              <img
                src="https://opgg-static.akamaized.net/meta/images/profile_icons/profileIcon4922.jpg?image=q_auto,f_webp,w_auto&v=1690447901880"
                alt="icon"
                className="w-24 h-24 float-left rounded-2xl"
              />
              <div className="level absolute text-center pt-20 pl-7">
                <span className="inline-block py-0 px-2 bg-[#202D37] rounded-lg text-xs leading-5 text-white">
                  102
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
            <div className="name mt-2">
              <h1 className="summoner-name mr-2 text-2xl font-bold">
                슬기로운현재
              </h1>
              <button className="w-7 h-7 rounded border-solid border border-[#DBE0E4] ">
                <img
                  src="https://s-lol-web.op.gg/images/icon/icon-bookmark.svg?v=1690447902108"
                  alt="off"
                />
              </button>
            </div>
            <div className="advertise"></div>
            <div className="reload_button"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Profile;
