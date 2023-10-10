export const GET = () => {
  return new Response(
    JSON.stringify([
      { id: 1, name: 'Super Shoes', price: 99 },
      { id: 2, name: 'Jealous Jeans', price: 59 },
    ]),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
