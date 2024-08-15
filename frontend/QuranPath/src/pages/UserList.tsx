import axios from "axios";
import { useEffect } from "react";

const UserList = () => {
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log(token);
                if (token) {
                    const response = await axios.get('https://localhost:7083/api/Users', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    console.log(response.data); // Gelen veriyi işleyin
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
        <div>UserList</div>
    );
};

export default UserList;