import { number } from "framer-motion";
import React from "react";

const mockLeaderboardData = [
  { rank: 1, name: "Abdullah Al Kaabi", score: "98%", avatar: "/images/avatar1.png" },
  { rank: 2, name: "Sarah Mohamed", score: "95%", avatar: "/images/avatar2.png" },
  { rank: 3, name: "Ali Al Khafaji", score: "91%", avatar: "/images/avatar1.png" },
  { rank: 4, name: "Fatima Zahra", score: "88%", avatar: "/images/avatar2.png" },
  { rank: 5, name: "Khaled Bin Saeed", score: "85%", avatar: "" }, // no avatar
  { rank: 6, name: "Nour El Din", score: "82%", avatar: "" },
];

const defaultAvatar = "/images/default-avatar.png";


const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
        style={{ maxWidth: "500px" }}
      >
        <LeaderboardHeader />

        <div className="p-4 space-y-3 sm:space-y-4">
          {mockLeaderboardData.map((item) => (
            <LeaderboardItem key={item.rank} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};


interface LeaderboardItemProps {
  data: {
    rank: number;
    name: string;
    score: string ;
    avatar: string;
  };
}

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ data }) => {
  const { rank, name, score, avatar } = data;
  const isTopThree = rank <= 3;

  return (
    <div
      className={`
        flex items-center justify-between p-3 sm:p-4 h-16 sm:h-20
        rounded-xl transition duration-150 cursor-pointer
        ${
          isTopThree
            ? "bg-indigo-50 border-indigo-200 border-2 shadow-md hover:shadow-lg"
            : "bg-gray-50 border-gray-100 border-2 hover:bg-gray-100"
        }
      `}
    >
      <div className="flex items-center gap-4">
        <span
          className={`
            font-extrabold text-lg sm:text-xl w-6 text-center
            ${isTopThree ? "text-indigo-700" : "text-gray-500"}
          `}
        >
          {rank}
        </span>

        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-gray-200">
          <img
            src={avatar || defaultAvatar}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>

        <span className="font-semibold text-gray-800 text-base sm:text-lg truncate">
          {name}
        </span>
      </div>

      <span
        className={`
          font-bold text-base sm:text-lg
          ${isTopThree ? "text-indigo-600" : "text-gray-600"}
        `}
      >
        {score}
      </span>
    </div>
  );
};


const LeaderboardHeader = () => {
  return (
    <>
      <div className="text-center pt-8 pb-4">
        <p className="text-gray-600 font-medium">Course Name Shown Here</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-indigo-800 mt-1">
          Leaderboard
        </h1>
      </div>

      <div className="bg-blue-50/70 p-4 sm:p-6 text-center rounded-t-lg mx-4">
        <p className="text-gray-700 leading-relaxed font-medium">
          Great job! Your performance in this course is better than 60% of other students.
          Keep it up and aim to reach the top of the leaderboard!
        </p>
      </div>
    </>
  );
};

export default Leaderboard;
