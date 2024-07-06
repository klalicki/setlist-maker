export const fetchData = async (route = "", data = {}, methodType = "get") => {
  const response = await fetch(`http://localhost:5000/api/${route}`, {
    method: methodType,
    headers: { "Content-Type": "application/json" },
    body: methodType === "get" ? null : JSON.stringify(data),
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw await response.json();
  }
};
