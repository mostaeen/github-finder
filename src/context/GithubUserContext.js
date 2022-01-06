import { createContext, useReducer } from "react";
import { useParams } from "react-router-dom";
import { GithubReducer } from "./UserReducer";

const GithubUserContext = createContext();

export const GithubUserProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        loading: true,
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const fetchUsers = async () => {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        dispatch({
            type: "GET_USERS",
            payload: data,
        });
    };
    const fetchTheUsers = async (text) => {
        const params = new URLSearchParams({
            q: text
        })
        const response = await fetch(`https://api.github.com/search/users?${params}`);
        const { items } = await response.json();
        dispatch({
            type: "GET_THE_USERS",
            payload: items,
        });
    };

    const fetchUser = async (login) => {
        const response = await fetch(`https://api.github.com/users/${login}`);
        const data = await response.json();
        dispatch({
            type: "GET_USER",
            payload: data,
        });
    };

    return (
        <GithubUserContext.Provider
            value={{
                users: state.users,
                fetchUsers,
                user: state.user,
                fetchUser,
                loading: state.loading,
                fetchTheUsers,
            }}
        >
            {children}
        </GithubUserContext.Provider>
    );
};
export default GithubUserContext;
