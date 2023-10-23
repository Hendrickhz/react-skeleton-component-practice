import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard = ({ cardQty }) => {
  return Array(cardQty)
    .fill(0)
    .map((card, i )=> (
      <div key={i} className=" border p-2 rounded-sm w-[400px] shadow-sm flex gap-3 items-center">
        <Skeleton circle={true} width={40} height={40} />
        <div className=" text-gray-700 font-semibold  tracking-wide w-full ">
          <Skeleton count={3} className="w-[80%]" />
        </div>
      </div>
    ));
};

export default SkeletonCard;
