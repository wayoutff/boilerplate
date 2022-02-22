import React, { Suspense } from "react";
import { Route } from "react-router-dom";

import { Lazy } from "src/root/components";

export default function RouteComponent({
  path,
  lazy = false,
  exact = false,
  component: Component = null,
  Layout,
}: any) {

  console.log({path, exact});

  const Page = (
    <Layout>
      {(lazy && (
        <Lazy
          Component={Component}
          Fallback={(typeof lazy === "object" && lazy) || null}
        >
          <Component />
        </Lazy>
      )) || <Component />}
    </Layout>
  );

  return <Route path={path} exact={exact} element={Page}></Route>;
}
