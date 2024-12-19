import { createContext, useContext } from "react";


const AppContext = createContext();


export const AppProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const [filteredData, setFilteredData] = useState(userData)

    useContext(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("/api/users");
                const data = await response.json();
                setFilteredData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();

    }, [])
    return (
        <AppContext.Provider value={{ filteredData, setFilteredData }}>
            {children}
        </AppContext.Provider>
    )
}