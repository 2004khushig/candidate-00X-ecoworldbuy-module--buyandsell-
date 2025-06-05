export async function GET() {
  return Response.json([
    {
      id: "PF_001",
      title: "Eco-Tote: Beach Bag",
      image: "/images/eco-tote.jpg",
      price_cents: 2999,
    },
    {
      id: "PF_002",
      title: "Organic Cotton T-Shirt",
      image: "/images/cotton-tee.jpg",
      price_cents: 1999,
    },
  ]);
}