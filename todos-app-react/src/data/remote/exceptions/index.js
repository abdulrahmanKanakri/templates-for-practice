export const handleErrors = (response) => {
  if(!response.ok) 
    throw new Error("Something went wrong");
  return response.json();
}
