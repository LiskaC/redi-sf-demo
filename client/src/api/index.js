/**
 * Fetches user data from the backend
 * @returns { username: string, password: string }
 */
export async function fetchUser() {
 try {
   const res = await fetch('http://localhost:3000', {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json'
     }
   })
   return res.json()
 } catch (e) {
   console.error(e)
   throw new Error(e)
 }
}
