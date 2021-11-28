// Actions for redux to change state

export const increment = (amount =1) => {
    return {
        type: 'INCREMENT',
        payload: amount
    }
}
export const decrement = (amount =1) => {
    return {
        type: 'DECREMENT',
        payload: amount
    }
}

export const logIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const logOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}