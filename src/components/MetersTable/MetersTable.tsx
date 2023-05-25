import React from 'react';

export interface IMeter {
  id: string;
  display_name: string;
  active: boolean;
  used_for_billing: boolean;
  type: string;
}

export interface ITableProps {
  meters: IMeter[];
}

const MetersTable: React.FC<ITableProps> = ({
  meters,
}) => {

  const getActiveColorModifier = (active: boolean) => active ? 'green' : 'red';

  return (
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead className="bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">Display name</th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">Active</th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">Used for billing?</th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">Type</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        {meters.map(({ id, display_name, active, used_for_billing, type }) => (
          <tr key={id} className="hover:bg-gray-50 hover:cursor-pointer">
            <td className="px-6 py-4">
              <span className="text-gray-700">{display_name}</span>
            </td>
            <td className="px-6 py-4">
              <span
                className={`inline-flex items-center gap-1 rounded-full bg-${getActiveColorModifier(active)}-50 px-2 py-1 text-xs font-semibold text-${getActiveColorModifier(active)}-600`}
              >
                <span className={`h-1.5 w-1.5 rounded-full bg-${getActiveColorModifier(active)}-600`}></span>
                {active ? 'Active' : 'Inactive'}
              </span>
            </td>
            <td className="px-6 py-4">{used_for_billing ? 'Yes' : 'No'}</td>
            <td className="px-6 py-4">{type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MetersTable;