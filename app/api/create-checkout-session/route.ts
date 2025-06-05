export async function POST(req: Request) {
  const body = await req.json();

  if (body.productId === "FEATURED_001") {
    return Response.json({ sessionId: "cs_test_12345" });
  }

  return Response.json({ error: "Invalid product" }, { status: 400 });
}
