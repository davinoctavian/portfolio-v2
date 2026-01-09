import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout/layout.tsx", [index("routes/home.tsx")]),
  route("about", "routes/about.tsx"),
  route("profile", "routes/profile.tsx"),
  route("project", "routes/project.tsx"),
  route("cv", "routes/cv.tsx"),
] satisfies RouteConfig;
