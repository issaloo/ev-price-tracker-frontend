import { headers } from "next/headers";

export async function getEvPrice() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/main/`, {
    headers: {
      ...headers,
      Authorization: `Api-Key ${process.env["NEXT_PUBLIC_API_KEY"]}`,
    },
    next: { revalidate: 7200 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
