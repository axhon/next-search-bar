import Image from "next/image";
import { SearchBar } from "./searchbar";
import { appStyle } from "./app.css";

export default function Home({ searchParams, children }) {
  const sp = new URLSearchParams(searchParams);
  return (
    <main className={appStyle}>
      <SearchBar defaultValue={sp.get("q") ?? ""} />
      {children}
    </main>
  );
}
