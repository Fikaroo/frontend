import { HomeIcon } from "@heroicons/react/24/solid";
import { Breadcrumb } from "flowbite-react";
import React from "react";

const BreadcumbComponent = () => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="/" icon={HomeIcon}>
        Home
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcumbComponent;
