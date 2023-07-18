import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
function Error() {
  return (
    <div>
      <ExclamationTriangleIcon width={50} height={50} />
      <span>Error occurred while fetching data</span>
    </div>
  );
}

export default Error;
