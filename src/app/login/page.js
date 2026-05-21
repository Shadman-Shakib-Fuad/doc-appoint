const tokenRes = await fetch(
  "http://localhost:5000/jwt",
  {
    method: "POST",
    headers: {
      "content-type":
        "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  }
);

const tokenData =
  await tokenRes.json();

localStorage.setItem(
  "token",
  tokenData.token
);