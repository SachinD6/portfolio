import { useState } from "react";

interface StatusObject {
  title: string;
  bgColor: string;
}

interface Props {
  isAvailable?: boolean;
  isComplete?: boolean;
  isNotAvailable?: boolean;
  className?: string;
}

const currentStatus: Record<string, StatusObject> = {
  Available: {
    title: "Available for work",
    bgColor: "lime",
  },
  NotAvailable: {
    title: "Not Available for work",
    bgColor: "red",
  },
  Complete: {
    title: "Completed",
    bgColor: "lime",
  },
  InProgress: {
    title: "In Progress",
    bgColor: "yellow",
  },
};

// Define component
const Status: React.FC<Props> = ({
  isAvailable,
  isComplete,
  isNotAvailable,
  className,
}) => {
  // Determine initial status
  const initialStatus: keyof typeof currentStatus =
    isAvailable
      ? "Available"
      : isComplete
      ? "Complete"
      : isNotAvailable
      ? "NotAvailable"
      : "InProgress";

  // State
  const [status, setStatus] = useState(initialStatus);

  // Get status object
  const statusObj = currentStatus[status];
  const bgColorClass = `bg-${statusObj.bgColor}-400`;


  // Render
  return (
    <div>
      <span
        className={`inline-flex items-center px-2 py-0 text-sm font-semibold pointer-events-auto ${className} `}
      >
        <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
          <span
            className={`absolute flex w-2 h-2 rounded-full opacity-75 animate-ping ${bgColorClass}`}
          ></span>
          <span
            className={`relative inline-flex w-1 h-1 rounded-full ${bgColorClass} `}
          ></span>
        </span>
        <span className="dark:text-neutral-500 ">{statusObj.title}</span>
      </span>
    </div>
  );
};

export default Status;
