import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../apiConfig";
import { showToast } from "../components/Toast";

interface User {
    appUserId: number;
    name: string;
    email: string;
    parentName?: string;
    parentPhone?: string;
    appRoleId: number;
    password?: string; // Şifre alanı ekledik
}

interface Role {
    id: number;
    name: string;
}

const roles: Role[] = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Member" },
    { id: 3, name: "Visitor" }
];

const UserUpdate = () => {
    const { id } = useParams<{ id: string; }>();
    const navigate = useNavigate();
    const [, setUser] = useState<User | null>(null);
    const [formData, setFormData] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token && id) {
                    const response = await axios.get(`${API_BASE_URL}/Users/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUser(response.data);
                    setFormData(response.data);
                } else {
                    console.log('Token bulunamadı veya ID eksik');
                }
            } catch (error) {
                console.error('Kullanıcı bilgileri alınırken bir hata oluştu:', error);
            }
        };

        fetchUser();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => prevState ? { ...prevState, [name]: value } : null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData) {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    await axios.put(`${API_BASE_URL}/Users/${formData.appUserId}`, formData, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    navigate('/user-list');
                    showToast('Kullanıcı başarıyla güncellendi');
                } else {
                    console.log('Token bulunamadı');
                }
            } catch (error) {
                console.error('Kullanıcı güncellenirken bir hata oluştu:', error);
            }
        }
    };

    return (
        <div className="p-4">
            {formData ? (
                <div>
                    <h1 className="text-xl sm:text-3xl font-Raleway text-red-600 font-semibold mb-4 text-center">
                        {formData.name} isimli kullanıcıyı güncelle
                    </h1>
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ad</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-posta</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Veli Adı</label>
                            <input
                                type="text"
                                id="parentName"
                                name="parentName"
                                value={formData.parentName || ''}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">Veli Telefonu</label>
                            <input
                                type="text"
                                id="parentPhone"
                                name="parentPhone"
                                value={formData.parentPhone || ''}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="appRoleId" className="block text-sm font-medium text-gray-700">Rol</label>
                            <select
                                id="appRoleId"
                                name="appRoleId"
                                value={formData.appRoleId}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            >
                                {roles.map(role => (
                                    <option key={role.id} value={role.id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Şifre Alanı */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Yeni Şifre</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password || ''}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"

                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700"
                        >
                            Güncelle
                        </button>
                    </form>
                </div>
            ) : (
                <p>Yükleniyor...</p>
            )}
        </div>
    );
};

export default UserUpdate;
