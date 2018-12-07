import createRouter from "router5";
import listenersPlugin from "router5/plugins/listeners";
import browserPlugin from "router5/plugins/browser";

const routes = [
  { name: "home", path: "/" },
  { name: "page", path: "/:query<([a-zA-Z0-9\\.\\-\\|_%'])+>" }
];

const router = createRouter(routes, {
  allowNotFound: true,
  trailingSlashMode: "never",
  queryParamsMode: "loose",
  queryParams: {
    nullFormat: "hidden"
  }
})
  .usePlugin(browserPlugin())
  .usePlugin(listenersPlugin());

router.addListener(state => {
  console.log(state);
});

router.start();
