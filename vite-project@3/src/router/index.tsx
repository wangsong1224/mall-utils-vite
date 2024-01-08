import Header from "../components/header";
import App from "../App";
import List from "../views/list/list";
const routerList = [
  {
    path: "/home",
    Component: App,
    // with this data loaded before rendering
    // 加载预处理
    // async loader({ request, params }) {
    //   let { loader } = await import("../App");
    //   return loader({ request, params });
    //   return await import("../App");
    // },

    // 路由懒加载
    lazy: () => import("../App"),
    // async lazy() {
    //   let Layout = await import("../App");
    //   return { Component: Layout };
    // },
    children: [
      {
        path: "list1",
        Component: List,
        lazy: () => import("../views/list/list"),
      },
    ],
  },
  {
    path: "list",
    Component: List,
    lazy: () => import("../views/list/list"),
  },
];

export { routerList };
