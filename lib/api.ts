import config from "@/lib/config";

export async function fetchAPI(path: string, query?: string) {
  const { host, port } = config;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const fetchURL = `${host}${port && `:${port}`}/${path}${
    query ? `?${query}` : ""
  }`

  //due to typescript, can't return .json from then immediately, which makes this less appealing
  const res = await fetch(fetchURL, options).catch((err) => {
    console.error(err);
    throw new Error("Failed to fetch API");
  });
  
  return await res.json();
}

export async function getCountApi(fetchUrl: string, options: any) {}

export async function fetchBySlug(path: string, slug: string) {
  if (!slug) throw new Error("No slug sent to fetchBySlug");
  const query = `slug=${slug}`;
  return fetchAPI(path, query);
}
