export const useGetUserInfo = () => {
    const {name, profilePhoto, userID, isAuth} = JSON.parse(localStorage.getItem("Auth"))
    return {name, profilePhoto, userID, isAuth}
}