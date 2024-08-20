import axios from "axios";
import { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import { API_BASE_URL } from "../apiConfig";
import { showToast } from "../components/Toast"; // Toast mesajı göstermek için

interface User {
    appUserId: number;
    name: string;
    email: string;
    appRoleId: number;
    roleName: string;
}

const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
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
                console.error('Kullanıcı listesi alınırken bir hata oluştu:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (userId: number) => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                await axios.delete(`${API_BASE_URL}/Users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(users.filter(user => user.appUserId !== userId));
                showToast('Kullanıcı başarıyla silindi');
            } else {
                console.log('Token bulunamadı');
            }
        } catch (error) {
            console.error('Kullanıcı silinirken bir hata oluştu:', error);
        }
    };

    return (
        <div>
            <UserTable users={users} onDelete={handleDelete} />
        </div>
    );
};

export default UserList;
