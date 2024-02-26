import { useState } from "react";

interface StatusObject {
  title: string;
  bgColor: string;
}

interface Props {
  status: keyof typeof currentStatus; // Change status type to keyof typeof currentStatus
  className?: string;
}

const currentStatus: Record<string, StatusObject> = {
  Available: {
    title: "Available for work",
    bgColor: "#00c25e",
  },
  NotAvailable: {
    title: "Not Available for work",
    bgColor: "red",
  },
  Complete: {
    title: "Completed",
    bgColor: "#00c25e", 
  },
  InProgress: {
    title: "In Progress",
    bgColor: "#dffc03", 
  },
};

// Define component
const Status: React.FC<Props> = ({ status, className }) => {

  if (!status || !currentStatus[status]) {
    return <span className={`text-red-600 ${className}`}>.</span>;
  }

  const statusObj = currentStatus[status];
  const bgColorClass = `${statusObj.bgColor}`;

  // Render
  return (
    <div>
      <span
        className={`inline-flex items-center px-2 py-0 text-sm font-semibold pointer-events-auto ${className} `}
      >
        <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
          <span
            className={`absolute flex w-2 h-2 rounded-full opacity-75 animate-ping bg-${bgColorClass}`}
            style = {{backgroundColor: bgColorClass}}
          ></span>
          <span
            className={`relative inline-flex w-1 h-1 rounded-full ${bgColorClass}`}
            style = {{backgroundColor: bgColorClass}}
          ></span>
        </span>
        <span className="dark:text-neutral-500 ">{statusObj.title}</span>
      </span>
    </div>
  );
};

export default Status;
