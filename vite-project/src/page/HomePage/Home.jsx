import React from "react";
import { IoSearch } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import Group from "../../componet/Group";
import { BlockedUsers, FriendRequest, Friends, GroupList, UserList } from "../../componet/InputField";

const Home = () => {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div>
          <div className="w-[427px] h-[60px] mb-[43px] relative">
            <span className="top-[50%] absolute left-[20px] translate-y-[-50%] text-[19px]">
              <IoSearch />
            </span>
            <input
              type="text"
              className="w-[427px] h-[60px] text-[16px] font-medium pl-[60px] font-poppins shadow-2xl rounded-2xl p-5 placeholder:pl-[30px]"
              placeholder="Search"
            />
            <span className="top-[50%] absolute right-[20px] translate-y-[-50%] text-bandColor text-2xl">
              <HiDotsVertical />
            </span>
          </div>
          <div>
            <div className="w-[427px] shadow-2xl rounded-2xl py-[20px] px-[15px]">
              <div className="flex justify-between items-center ">
                <h3 className="text-[20px] font-semibold font-poppins text-[#000]">
                  Groups List
                </h3>
                <span className="text-bandColor text-2xl">
                  <HiDotsVertical />
                </span>
              </div>
              <div>
                {GroupList.map((content, index) => {
                  return (
                    <Group
                      key={content.id}
                      GroupBorder={
                        index === GroupList.length - 1
                          ? "border-none"
                          : "border-b-2"
                      }
                      GroupHead={content.grouphead}
                      GroupText={content.grouptext}
                      GroupBtn={content.Btn}
                      GroupBtnDesing={"text-white"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-[427px] shadow-2xl rounded-2xl py-[20px] px-[15px]">
              <div className="flex justify-between items-center ">
                <h3 className="text-[20px] font-semibold font-poppins text-[#000]">
                Friends
                </h3>
                <span className="text-bandColor text-2xl ">
                  <HiDotsVertical />
                </span>
              </div>
              <div>
                {Friends.map((content, index) => {
                  return (
                    <Group
                      key={content.id}
                      GroupBorder={
                        index === Friends.length - 1
                          ? "border-none"
                          : "border-b-2"
                      }
                      GroupHead={content.grouphead}
                      GroupText={content.grouptext}
                      GroupBtn={content.Btn}
                      GroupBtnDesing={"bg-transparent text-[#00000080]"}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-[427px] shadow-2xl rounded-2xl py-[20px] px-[15px]">
              <div className="flex justify-between items-center ">
                <h3 className="text-[20px] font-semibold font-poppins text-[#000]">
                User List
                </h3>
                <span className="text-bandColor text-2xl">
                  <HiDotsVertical />
                </span>
              </div>
              <div>
                {UserList.map((content, index) => {
                  return (
                    <Group
                      key={content.id}
                      GroupBorder={
                        index === UserList.length - 1
                          ? "border-none"
                          : "border-b-2"
                      }
                      GroupHead={content.grouphead}
                      GroupText={content.grouptext}
                      GroupBtn={content.Btn}
                      
                      GroupBtnDesing={"text-white"}
                      User={'pr-[170px]'}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-[427px] shadow-2xl rounded-2xl py-[20px] px-[15px]">
              <div className="flex justify-between items-center ">
                <h3 className="text-[20px] font-semibold font-poppins text-[#000]">
                Friend  Request
                </h3>
                <span className="text-bandColor text-2xl">
                  <HiDotsVertical />
                </span>
              </div>
              <div>
                {FriendRequest.map((content, index) => {
                  return (
                    <Group
                      key={content.id}
                      GroupBorder={
                        index === FriendRequest.length - 1
                          ? "border-none"
                          : "border-b-2"
                      }
                      GroupHead={content.grouphead}
                      GroupText={content.grouptext}
                      GroupBtn={content.Btn}
                      GroupBtnDesing={"text-white"}
                      User={'pr-[120px]'}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-[427px] shadow-2xl rounded-2xl py-[20px] px-[15px]">
              <div className="flex justify-between items-center ">
                <h3 className="text-[20px] font-semibold font-poppins text-[#000]">
                Group
                </h3>
                <span className="text-bandColor text-2xl">
                  <HiDotsVertical />
                </span>
              </div>
              <div>
                {Friends.map((content, index) => {
                  return (
                    <Group
                      key={content.id}
                      GroupBorder={
                        index === Friends.length - 1
                          ? "border-none"
                          : "border-b-2"
                      }
                      GroupHead={content.grouphead}
                      GroupText={content.grouptext}
                      GroupBtn={content.Btn}
                      GroupBtnDesing={"bg-transparent text-[#00000080]"}
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-[427px] shadow-2xl rounded-2xl py-[20px] px-[15px]">
              <div className="flex justify-between items-center ">
                <h3 className="text-[20px] font-semibold font-poppins text-[#000]">
                Blocked Users
                </h3>
                <span className="text-bandColor text-2xl">
                  <HiDotsVertical />
                </span>
              </div>
              <div>
                {BlockedUsers.map((content, index) => {
                  return (
                    <Group
                      key={content.id}
                      GroupBorder={
                        index === BlockedUsers.length - 1
                          ? "border-none"
                          : "border-b-2"
                      }
                      GroupHead={content.grouphead}
                      GroupText={content.grouptext}
                      GroupBtn={content.Btn}
                      GroupBtnDesing={"text-white"}
                      User={"pr-[120px]"}
                    />
                  );
                })}
              </div>
            </div>
      </div>
    </>
  );
};

export default Home;
