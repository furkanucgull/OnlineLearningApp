import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

interface User {
    name: string;
    email: string;
    appRoleId: number;
    appUserId: number;
    roleName?: string;
    parentName?: string;
    parentPhone?: string;
}

interface UserTableProps {
    users: User[];
    onDelete: (userId: number) => void;
}

const UserTable = ({ users, onDelete }: UserTableProps) => {
    const navigate = useNavigate();

    const getRoleName = (appRoleId: number) => {
        switch (appRoleId) {
            case 1:
                return "Admin";
            case 2:
                return "Member";
            case 3:
                return "Visitor";
            default:
                return "Unknown";
        }
    };

    const actionBodyTemplate = (rowData: User) => {
        return (
            <div className="flex justify-around">
                <Button
                    label="Güncelle"
                    className="bg-blue-400 rounded-3xl p-2 text-white hover:bg-blue-900"
                    onClick={() => navigate(`/user-update/${rowData.appUserId}`)}
                />
                <Button
                    label="Sil"
                    className="bg-red-400 rounded-3xl p-2 text-white hover:bg-red-900"
                    onClick={() => onDelete(rowData.appUserId)}
                />
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center px-4">
            <div className="overflow-x-auto w-full lg:w-3/4">
                <div className="py-4">
                    <div className="overflow-hidden shadow-lg rounded-lg border border-gray-200">
                        <DataTable
                            value={users}
                            responsiveLayout="scroll"
                            tableStyle={{ minWidth: '100%' }}
                            className="min-w-full divide-y divide-gray-200"
                        >
                            <Column
                                field="name"
                                header="Name"
                                headerClassName="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                bodyClassName="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b"
                            />
                            <Column
                                field="email"
                                header="Email"
                                headerClassName="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                bodyClassName="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b"
                            />
                            <Column
                                field="parentName"
                                header="Veli"
                                headerClassName="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                bodyClassName="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b"
                            />
                            <Column
                                field="parentPhone"
                                header="Veli Tel"
                                headerClassName="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                bodyClassName="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b"
                            />
                            <Column
                                header="Role"
                                headerClassName="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                bodyClassName="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b"
                                body={(rowData) => getRoleName(rowData.appRoleId)}
                            />
                            <Column
                                header="Actions"
                                headerClassName="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                bodyClassName="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-b"
                                body={actionBodyTemplate}
                            />
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
