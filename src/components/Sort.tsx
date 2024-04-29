import React from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { BsFillGridFill } from "react-icons/bs";


const SortItems: React.FC = () => {
    return (
      <>
        <div>
          <HiAdjustmentsHorizontal />
          <span>Filter</span>
          <BsFillGridFill /><span></span>
        </div>
      </>
    );
}

export default SortItems;