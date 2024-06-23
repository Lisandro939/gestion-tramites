export async function validateIdentity (CUIL) {
    try {
        const response = await fetch(`https://gestion-tramite-api.onrender.com/clientes/cuit/${CUIL}`)
        const data = await response.json()
        return data;
    } catch (error) {
        return error;
    }
}