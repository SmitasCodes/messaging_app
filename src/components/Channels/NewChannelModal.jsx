import React, { useRef } from "react";

const NewChannelModal = () => {
  const formRef = useRef(null);
  const handleSubmit = (event) => {
    console.log(event);
  };

  return (
    <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-sm p-5 rounded-md bg-sky-300">
      <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label
            htmlFor="channel_name"
            className="block text-base font-medium leading-6 text-gray-900 "
          >
            Channel name
          </label>
          <div className="mt-2">
            <input
              id="channel_name"
              name="channel_name"
              type="text"
              autoComplete="channel_name"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="accessibility"
              className="block text-sm font-medium leading-6 text-gray-900 text-base "
            >
              Accessibility
            </label>
          </div>
          <div className="mt-2">
            <select
              id="accessibility"
              name="accessibility"
              className="block w-full rounded-md border-0 py-2 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option selected value="">
                -----
              </option>
              <option value="private">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition"
            onClick={handleSubmit}
          >
            Add Channel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewChannelModal;
