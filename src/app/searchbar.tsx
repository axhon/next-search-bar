import { redirect } from "next/navigation";

type Props = {
  defaultValue: string;
};

export function SearchBar({ defaultValue }: Props) {
  async function search(fd: FormData) {
    "use server";
    const query = fd.get("q") ?? "";
    if (!query) {
      return;
    }
    const searchParams = new URLSearchParams();
    searchParams.set("q", query.toString());
    redirect(`/keyword?${searchParams.toString()}`);
  }
  return (
    <form action={search}>
      <label aria-label="Search box">
        <input
          name="q"
          type="search"
          defaultValue={defaultValue}
          placeholder="Sofas"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}
