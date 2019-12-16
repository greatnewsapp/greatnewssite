
export async function postData(url, data) {
    // Default options are marked with *
    console.log(`url ${url} | email ${data.email}| data ${typeof(data)}`)
    const response = await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(`response ${JSON.stringify(response)}`);
    return await response.json(); // parses JSON response into native JavaScript objects
}
