import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface User {
    id: number;
    name: string;
    email: string;
    appRoleId: number;
    roleName?: string;
}

interface UserTableProps {
    users: User[];
}

const UserTable = ({ users }: UserTableProps) => {

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
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
