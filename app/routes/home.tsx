import type { Route } from "./+types/home";
import { Menu } from "../menu/menu";

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
  return <Menu />;
}
