import React, { Suspense } from "react";

import DefaultFallback from "./DefaultFallback";

export default ({ children, Component, Fallback }: any) => {
  const Page = children;
  console.log({ children: children, Component, typeHome: typeof Home, typePage: typeof Page });
  //   return children
  return (
    <Suspense fallback={(Fallback && <Fallback />) || <DefaultFallback />}>
      <Component />
    </Suspense>
  );
};
