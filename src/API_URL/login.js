const API_URL = "https://burger-queen-api-mock-mu.vercel.app"
export async function apiLogin(email, password) {
  const response = await fetch(`${API_URL}/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
 
  if(response.status === 200) {
    console.log(response);
 

   
} 
return response.json();
}

 