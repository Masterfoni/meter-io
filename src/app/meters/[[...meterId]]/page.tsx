"use client";
import { useRouter } from 'next/navigation';
import Label from "@/components/Label";
import { useEffect, useState } from "react";
import getInstance from "../../../../api";
import Navbar from "@/components/Navbar";
import { IMeter } from "@/components/MetersTable/MetersTable";
import Input from "@/components/Input";

const READONLY_METERS = [
  '0839b368-d3d1-41a3-9938-d4c6df8a3d64',
  '1634a14b-ecfa-405c-9113-5f71ae99b97a',
  '3a309982-720c-49b6-a28a-4f5d9d415509',
];

interface IPageProps {
  params?: {
      meterId: string[];
  };
};

const MeterDetailsPage: React.FC<IPageProps> = ({ params }) => {
  const router = useRouter();
  const [meterId] = params?.meterId || [''];
  const readonlyMeter = READONLY_METERS.some(readonlyMeterId => readonlyMeterId === meterId);
  const [state, setState] = useState({
    display_name: '',
    api_name: '',
    type: 'sum',
    used_for_billing: false,
    active: true,
  });
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // This is resulting a 404, going with a different approach here
    // getInstance().get(`/meters/${meterId}`)
    //   .then(data => console.log({data}))
    //   .catch(error => console.log({error}));
    getInstance().get(`/meters`)
       .then(data => {
        const meterFound = data.data.find((meter: IMeter) => meter.id === meterId);
        setState({ ...state, ...meterFound });
       })
       .catch(error => console.log({error}));
  }, []);

  const handleMeterCreation = () => {
    setLoading(true);

    const actionPromise = meterId ?
      getInstance().put(`/meters/${meterId}`, state) :
      getInstance().post('/meters', state);

    actionPromise.then(() => {
      console.log("Success! Redirecting to homepage.");
      router.push('/');
    }).catch(error => console.log({error})).finally(() => setLoading(false));
  }

  const handleMeterDeletion = () => {
    setLoading(true);

    getInstance().delete(`/meters/${meterId}`).then(() => {
      console.log("Success! Redirecting to homepage.");
      router.push('/');
    }).catch(error => console.log({error})).finally(() => setLoading(false));
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col gap-4 items-center pl-24 pr-24 pt-12">
        <div className="bg-white p-12 w-full">
          <form>
            <div className="mb-6">
              <Label targetField="display_name">Display name</Label>
              <Input
                id="display_name"
                value={state.display_name}
                disabled={readonlyMeter}
                onChange={(event) => setState({ ...state, display_name: event.currentTarget.value})}
              />
            </div>

            <div className="mb-6">
              <Label targetField="api_name">Api name</Label>
              <Input
                id="api_name"
                value={state.api_name}
                disabled={readonlyMeter}
                onChange={(event) => setState({ ...state, api_name: event.currentTarget.value})}
              />
            </div>
            
            <div className="mb-6">
              <Label targetField="type">Select the type of the meter</Label>
              <select
                id="type"
                disabled={readonlyMeter}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={state.type}
                onChange={(event) => setState({ ...state, type: event.currentTarget.value})}
              >
                <option value="sum">Sum</option>
                <option value="max">Max</option>
                <option value="unique_count">Unique count</option>
              </select>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="used_for_billing"
                  type="checkbox"
                  disabled={readonlyMeter}
                  checked={state.used_for_billing}
                  onChange={() => setState({ ...state, used_for_billing: !state.used_for_billing})}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label htmlFor="use_for_billing" className="ml-2 text-sm font-medium text-gray-900">Use for billing</label>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="active"
                  type="checkbox"
                  disabled={readonlyMeter}
                  checked={state.active}
                  onChange={() => setState({ ...state, active: !state.active})}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label htmlFor="active" className="ml-2 text-sm font-medium text-gray-900">Active</label>
            </div>

            {(meterId && !readonlyMeter) ? (
              <button
                type="button"
                disabled={loading}
                onClick={handleMeterDeletion}
                className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-4 mb-4"
              >
                Delete Meter
              </button>
            ) : null}
            
            <button
              type="button"
              disabled={loading || readonlyMeter}
              onClick={handleMeterCreation}
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center disabled:bg-gray-500"
            >
              {meterId ? 'Update Meter' : 'Create Meter'}
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default MeterDetailsPage;
