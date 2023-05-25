"use client";
import Label from "@/components/Label";
import { useState } from "react";
import getInstance from "../../../api";
import Navbar from "@/components/Navbar";

const CreateMeterPage = () => {
  const [state, setState] = useState({
    display_name: '',
    api_name: '',
    type: 'sum',
    used_for_billing: false,
    active: true,
  });

  const handleMeterCreation = () => {
    console.log({state});
    getInstance().post('/meters', state)
      .then(data => {
        console.log({data});
        console.log("meter created with success!")
      })
      .catch(error => console.log({error}));;
  }

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col gap-4 items-center pl-24 pr-24 pt-12">
        <div className="bg-white p-12 w-full">
          <form>
            <div className="mb-6">
              <Label targetField="display_name">Display name</Label>
              <input
                type="text"
                id="display_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={state.display_name}
                onChange={(event) => setState({ ...state, display_name: event.currentTarget.value})}
                required
              />
            </div>

            <div className="mb-6">
              <Label targetField="api_name">Api name</Label>
              <input
                type="text"
                id="display_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={state.api_name}
                onChange={(event) => setState({ ...state, api_name: event.currentTarget.value})}
                required
              />
            </div>
            
            <div className="mb-6">
              <Label targetField="type">Select the type of the meter</Label>
              <select
                id="type"
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
                  checked={state.active}
                  onChange={() => setState({ ...state, active: !state.active})}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label htmlFor="active" className="ml-2 text-sm font-medium text-gray-900">Active</label>
            </div>
            
            <button
              type="button"
              onClick={handleMeterCreation}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default CreateMeterPage;