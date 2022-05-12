const initialState = {
    accessToken: null,
    user: null,
    loading: false,
}
const authReducer = (prevState = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...prevState,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...prevState,
                accessToken: payload,
                loading: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...prevState,
                accessToken: null,
                loading: false,
                error:payload,
            }
    }
}