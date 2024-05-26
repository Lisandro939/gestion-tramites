export async function validateIdentity (CUIL) {
    try {
        const response = await fetch(`https://gestion-tramites-api.vercel.app/CUIL/${CUIL}`)
        const data = await response.json()
        return data;
    } catch (error) {
        return error;
    }
}