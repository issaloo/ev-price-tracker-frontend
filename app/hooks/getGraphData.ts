export async function getGraphData(brandModelPattern: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/graph/${brandModelPattern}`,
  );
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
