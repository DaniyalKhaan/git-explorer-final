import { lazy } from "react";

import Home from "./components/Home";
const Users = lazy(() => import("./components/Users"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const SearchUser = lazy(() => import("./components/SearchUser"));
const Login = lazy(() => import("./components/Login"));
const AuthProfile = lazy(() => import("./components/AuthProfile"));
const AboutUs = lazy(() => import("./components/About"));
const RepoDetail = lazy(() => import("./components/RepoDetail"));
const NotFound = lazy(() => import("./components/NotFound"));

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false,
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: false,
  },
  {
    path: "/users",
    component: Users,
    requiresAuth: false,
  },
  {
    path: "/authProfile",
    component: AuthProfile,
    requiresAuth: true,
  },
  {
    path: "/search",
    component: SearchUser,
    requiresAuth: false,
  },
  {
    path: "/users/user/:username",
    component: UserProfile,
    requiresAuth: false,
  },
  {
    path: "/about",
    component: AboutUs,
    requiresAuth: false,
  },
  {
    path: "/repo-detail/:name/:username",
    component: RepoDetail,
    requiresAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requiresAuth: false,
  },
];
