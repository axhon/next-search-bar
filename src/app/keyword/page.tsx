import { SearchBar } from "../searchbar";

export default async function Keyword({ searchParams }: any) {
  const sp = new URLSearchParams(searchParams);
  return (
    <>
      <SearchBar defaultValue={sp.get("q") ?? ""} />
      <pre>{sp.get("q")}</pre>
    </>
  );
}
