import axios from "axios";
import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import { API_BASE_URL } from "../apiConfig";

interface User {
    id: number;
    name: string;
    email: string;
    appRoleId: number;
    roleName: string;
}

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await axios.get(`${API_BASE_URL}/Users`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },

                    });

                    setUsers(response.data);

                } else {
                    console.log('Token bulunamadı');
                }
            } catch (error) {
                console.error('Kullanıcı profili alınırken bir hata oluştu:', error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div>
            <UserTable users={users} />
        </div>
    );
};

export default UserList;
