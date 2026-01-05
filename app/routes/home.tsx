import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Davin Octavian" },
    {
      name: "description",
      content: "This is Portfolio Davin Octavian build with react router v7",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
