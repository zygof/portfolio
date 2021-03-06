import React from "react";
import classNames from "classnames";

import { RouteContextInterface } from "../../interfaces";
import TogglerDarkMode from "../TogglerDarkMode";

interface Props {
  routeContext: RouteContextInterface | null;
  isDarkMode?: boolean;
  handleDarkMode?: () => void;
}

const MobileNavLinks: React.FunctionComponent<Props> = ({
  routeContext,
  isDarkMode,
  handleDarkMode,
}) => (
  <ul className={classNames(["flex-row justify-end items-center flex z-50"])}>
    {routeContext?.routes.map((item, index) => (
      <li
        key={index}
        className={classNames([
          "items-start justify-center cursor-pointer tracking-wide py-px mx-5",
          index === 0 ? "hidden" : null,
        ])}
        onClick={() => routeContext?.handleRoute(item.id)}
      >
        <p
          className={classNames([
            "text-center text-xl font-bold whitespace-no-wrap hover:text-gray-600 transition-colors duration-300",
            isDarkMode ? "text-blue-50" : "text-primary",
          ])}
        >
          {item.route}
        </p>
        <span
          className={classNames([
            "flex w-full h-1 rounded-full dark:bg-gray-700",
            routeContext?.currentRoute?.id === item.id
              ? "bg-primary"
              : "hidden",
          ])}
        />
      </li>
    ))}
    <li
      className="w-full cursor-pointer flex justify-center py-px mx-5"
      onClick={handleDarkMode}
    >
      <TogglerDarkMode isDarkMode={isDarkMode} />
    </li>
  </ul>
);

export default MobileNavLinks;
