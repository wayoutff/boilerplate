import React, { useState } from 'react';
import { Routes, BrowserRouter } from 'react-router-dom';
import { Link } from 'src/components/ui-elements';
import { RouteComponent } from 'src/root/components';

export default function Browser({ apps }) {
  const [ appNames ] = useState(Object.keys(apps));

  return (
    <BrowserRouter>
      
      <Link style={{ marginRight: 10 }} to='/'>
        MAIN
      </Link>
      <Link style={{ marginRight: 10 }} to='new'>
        MAIN NEW
      </Link>
      <Link style={{ marginRight: 10 }} to='admin'>
        ADMIN
      </Link>
      <Link style={{ marginRight: 10 }} to='admin/panel'>
        ADMIN PANEL
      </Link>

      <Routes>
        {appNames.map(name =>
          apps[name].routes.map(({ ...route }, index) =>
            RouteComponent({
              key: name + index,
              ...route,
              path: name === 'main' ? route.path : `/${name}${route.path}`,
              Layout: apps[name].Layout,
            }),
          ),
        )}
      </Routes>
    </BrowserRouter>
  );
}
