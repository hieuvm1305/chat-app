import React from "react";
import Skeleton from "@mui/material/Skeleton";

function Loading() {
  return (
    <div>
      <div className="w-full mb-4 flex items-center justify-between">
        <div>
          <Skeleton variant="rounded" width={100} height={40} />
        </div>
        <div className="flex items-center justify-start gap-4">
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
        </div>
      </div>
      <div className="mb-4">
        <Skeleton
          variant="rounded"
          className="w-full rounded-3xl"
          height={40}
        />
      </div>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex items-center justify-start gap-4 my-2">
          <div>
          <Skeleton variant="circular" width={40} height={40} />
          </div>
          <div>
            <Skeleton variant="rounded" className="mb-1" width={100} height={20} />
            <Skeleton variant="rounded" width={180} height={15} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Loading;
