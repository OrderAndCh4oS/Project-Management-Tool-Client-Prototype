const getData = (apiCall) => {
    apiCall().then(
        response => {
            switch(response.status) {
                case 200:
                    return handleSuccessfulResponse(response);
                default:
                    return response;
            }
        },
        error => {
            return error;
        });
};

const handleSuccessfulResponse = (response) => response.json()
    .then(data => data);

export default getData;
