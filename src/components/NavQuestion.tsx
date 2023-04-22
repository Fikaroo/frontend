import React from "react";
import { HashLink } from "react-router-hash-link";
const NavQuestion = ({
  id,
  index,
  lang,
  selectedAnswerId,
}: {
  id?: number;
  index: number;
  lang: string;
  selectedAnswerId?: number | null;
}) => {
  return (
    <HashLink
      to={`#question${id}`}
      state={lang}
      preventScrollReset={true}
      smooth
    >
      <span
        className={`flex items-center justify-center w-10 p-2 ${
          selectedAnswerId
            ? "bg-blue-600 hover:bg-blue-800 text-white"
            : "bg-white hover:bg-gray-300"
        }  border rounded shadow`}
      >
        {index + 1}
      </span>
    </HashLink>
  );
};

export default NavQuestion;
