import React, { useRef, useState } from "react";
import { channelServices } from "../../services/channels";

const NewChannelModal = () => {
  const formRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Getting input values from form and putting it into obj.
    const form = formRef.current;
    const data = new FormData(form);

    const channelInput = {
      channel_name: data.get("channel_name"),
      accessibility: data.get("accessibility"),
      logo: data.get("logo"),
    };

    // Checking if all fields are present
    if (
      !channelInput.channel_name.trim() ||
      !channelInput.accessibility.trim() ||
      !channelInput.logo.trim()
    ) {
      setErrorMsg("Please enter all the fields");
      return;
    }

    // Sending data to an service
    await channelServices.addNewChannelService({
      ...channelInput,
    });
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
              className="block font-medium leading-6 text-gray-900 text-base "
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
              <option defaultValue value="">
                -----
              </option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="logo"
            className="block text-base font-medium leading-6 text-gray-900 "
          >
            Logo
            <span className="text-gray-600">{`  (paste url)`}</span>
          </label>
          <div className="mt-2">
            <input
              id="logo"
              name="logo"
              type="text"
              autoComplete="logo"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <p className="text-sm text-red-600">{errorMsg}</p>
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
