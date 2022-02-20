
const getDb = dbName => {
    return localStorage.getItem(dbName);

}
const getStoredCart = (dbName) => {
    const exists = getDb(dbName);
    return exists ? JSON.parse(exists) : {};
}

export { getStoredCart }