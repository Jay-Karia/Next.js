const getBasePath = ()=> {
    return process.env.NODE_ENV === 'development' ? 'https://127.0.0.1:3000' : `https://${process.env.VERCEL_URL}`;
}

export default getBasePath;