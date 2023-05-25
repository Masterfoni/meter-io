import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export interface IMeter {
  id: string;
  display_name: string;
  api_name: string;
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
  const [localMeters, setLocalMeters] = useState(meters);
  const router = useRouter();

  const getActiveColorModifier = (active: boolean) => active ? 'green' : 'indigo';

  useEffect(() => {
    setLocalMeters(meters);
  }, [meters])

  const navigateToDetails = (id: string) => {
    router.push(`/meters/${id}`);
  }

  const sort = () => {
    const localCopy = [...meters];
    
    setLocalMeters(localCopy.sort(({ display_name: firstDisplayName }, { display_name: nextDisplayName }) => {
      if (firstDisplayName.toLowerCase() > nextDisplayName.toLowerCase()) {
        return 1;
      }

      if (firstDisplayName.toLowerCase() < nextDisplayName.toLowerCase()) {
        return -1;
      }

      return 0;
    }));
  }

  return (
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-4 font-medium text-gray-900 hover:cursor-pointer"
            onClick={sort}
          >
            Display name
          </th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">API name</th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">Active</th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">Used for billing?</th>
          <th scope="col" className="px-6 py-4 font-medium text-gray-900">Type</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        {localMeters.map(({ id, display_name, api_name, active, used_for_billing, type }) => (
          <tr className="hover:bg-gray-50 hover:cursor-pointer" key={id} onClick={() => navigateToDetails(id)}>
            <td className="px-6 py-4">
              <span className="font-medium text-gray-700">{display_name}</span>
            </td>
            <td className="px-6 py-4">
              <span className="text-gray-700">{api_name}</span>
            </td>
            <td className="px-6 py-4">
              <span
                className={`inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600`}
              >
                <span className={`h-1.5 w-1.5 rounded-full bg-indigo-600`}></span>
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