import { headers } from "next/headers";

export async function getGraphData(brandModelPattern: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/graph/${brandModelPattern}`,
    {
      headers: {
        ...headers,
        Authorization: `Api-Key ${process.env["NEXT_PUBLIC_API_KEY"]}`,
      },
      next: { revalidate: 7200 },
    },
  );
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
