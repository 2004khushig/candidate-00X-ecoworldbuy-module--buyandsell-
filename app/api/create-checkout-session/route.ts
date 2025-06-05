// /app/api/create-checkout-session/route.ts
export async function POST(req: Request) {
  const body = await req.json();

  // Accept INR and any total
  if (
    body.productId === "FEATURED_001" &&
    typeof body.amount_cents === "number" &&
    body.currency === "INR"
  ) {
    return Response.json({ sessionId: "cs_test_12345" });
  }

  return Response.json({ error: "Invalid product or amount" }, { status: 400 });
}
