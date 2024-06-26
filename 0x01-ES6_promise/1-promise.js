export default function getResponseFromAPI(success) {
    return new promise((resolve, reject) => {
        if (success) {
            resolve({
                status: 200,
                body: 'Success',
            });
        } else {
                reject(new Error('The fake API is not working currently'));
            }
    });
}
