export async function apiLogin(email, password) {
  const response = await fetch(
    "https://burger-queen-api-mock-mu.vercel.app/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  return response;
}