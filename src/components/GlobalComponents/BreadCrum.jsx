import React from "react";
import { BreadCrumb } from "primereact/breadcrumb";

function BreadCrum({ items }) {
  const home = { icon: "pi pi-home", url: "" };

  return (
    <BreadCrumb
      model={items}
      home={home}
      className="p-0 w-full block border-none rounded-none"
    />
  );
}

export default BreadCrum;
