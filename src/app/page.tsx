import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
          <tr className="hover:bg-gray-50 hover:cursor-pointer">
            <td className="px-6 py-4">
              <span className="text-gray-700">Meter name here</span>
            </td>
            <td className="px-6 py-4">
              <span
                className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td className="px-6 py-4">Yes</td>
            <td className="px-6 py-4">????</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
