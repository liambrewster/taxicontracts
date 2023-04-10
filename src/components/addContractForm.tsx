import { useState } from "react";
import { format } from "date-fns";
import { api } from "../utils/api";
import { toast } from "react-toastify";
import Router, { useRouter } from "next/router";

type FormState = {
  internalId: string;
  status: "ACTIVE" | "DRAFT" | "PENDING";
  pickup: string;
  destination: string;
  collections: number;
  distance: number;
  vehicleSize: number;
  timings: string;
  days: string;
  journeytype: "REGULAR" | "SINGLE" | "RETURN";
  expiry: Date;
};

const today = new Date();
const tenDaysFromNow = new Date(today.setDate(today.getDate() + 10));
tenDaysFromNow.setHours(12, 0, 0, 0);

const initialFormState: FormState = {
  internalId: "",
  status: "ACTIVE",
  pickup: "",
  destination: "",
  collections: 1,
  distance: 0,
  vehicleSize: 4,
  timings: "",
  days: "",
  journeytype: "REGULAR",
  expiry: tenDaysFromNow,
};

const AddContractForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState<FormState>(initialFormState);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    enableSubmit();
    const name = target.name;
    let value: string | number | Date = target.value;

    if (name === "expiry") {
      value = new Date(value); // parse date string into a Date object
    } else if (target.type === "number") {
      value = parseFloat(value);
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  }
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    enableSubmit();
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //button cant be pressed until all data
  const [button, setButton] = useState(false);
  function enableSubmit() {
    if (
      formState.internalId ||
      formState.pickup ||
      formState.destination ||
      formState.timings ||
      formState.days ||
      formState.journeytype
    ) {
      setButton(true);
    }
  }

  //handle the submission of the contract
  const { mutateAsync: createContract } = api.contract.create.useMutation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Trying......");
      const { id: newContractId } = await createContract(formState);
      toast(`Contract Added: ${newContractId}`, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
      console.log("contract", newContractId);

      setTimeout(() => {
        router.replace("/dashboard");
      }, 5000);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast(
        `oopppsss Try again!!! Check all data present and the distance is set to a whole number`,
        {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-20 max-w-xl">
      <h1 className="text-bold text-xl underline">Add a Contract Posting</h1>
      <div className="mb-4">
        <label
          htmlFor="internalId"
          className="mb-2 block text-sm font-bold text-gray-700"
          title="Use the internal id so you can easily spot / understand your ocntracts when within a list. will not be seen publicly"
        >
          Internal ID
        </label>
        <input
          type="text"
          id="internalId"
          name="internalId"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
          placeholder="Add a reference to help you keep track of contracts"
          value={formState.internalId}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="status"
          className="mb-2 block text-sm font-bold text-gray-700"
          title="The starting status of your contract when you save, try to put them active as soon as possible"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
          value={formState.status}
          onChange={handleSelectChange}
        >
          <option value="">Select A Starting Status</option>
          <option value="DRAFT">Draft</option>
          <option value="PENDING">Pending</option>
          <option value="ACTIVE">Active</option>
        </select>
      </div>

      <div className="-mx-4 mb-4 flex flex-wrap">
        <div className="mb-4 w-full px-4 lg:mb-0 lg:w-1/2">
          <label
            htmlFor="pickup"
            className="mb-2 block text-sm font-bold text-gray-700"
            title="add the postcode district eg `S9` or location nickname eg `Man Air` but dont be too detailed to ensure you remain GDPR compliant"
          >
            Pickup
          </label>
          <input
            type="text"
            id="pickup"
            name="pickup"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            placeholder="Postcode district eg`S12`"
            value={formState.pickup}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <label
            htmlFor="destination"
            className="mb-2 block text-sm font-bold text-gray-700"
            title="add the postcode district eg `S9` or location nickname eg `Man Air` but dont be too detailed to ensure you remain GDPR compliant"
          >
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            placeholder="Postcode district eg `S9`"
            value={formState.destination}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="-mx-2 flex flex-wrap">
        <div className="mb-4 w-full px-2 md:w-1/3">
          <label
            htmlFor="collections"
            className="mb-2 block text-sm font-bold text-gray-700"
            title="indicate how many pickups for this journey will be required, a standard A to B journey is 1 collection"
          >
            Collections
          </label>
          <input
            type="number"
            id="collections"
            name="collections"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            value={formState.collections}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 w-full px-2 md:w-1/3">
          <label
            htmlFor="distance"
            className="mb-2 block text-sm font-bold text-gray-700"
            title="indicate a rough mileage. if a return journey, put the distance as each way"
          >
            Distance
          </label>
          <input
            type="number"
            id="distance"
            name="distance"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            step="1"
            value={formState.distance}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 w-full px-2 md:w-1/3">
          <label
            htmlFor="vehicleSize"
            className="mb-2 block text-sm font-bold text-gray-700"
            title="indicate what type of car is required, standard will be a 4 seater"
          >
            Vehicle Size
          </label>
          <input
            type="number"
            id="vehicleSize"
            name="vehicleSize"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            value={formState.vehicleSize}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="-mx-2 mb-4 flex flex-wrap">
        <div className="mb-4 w-full px-2 md:mb-0 md:w-1/2">
          <label
            htmlFor="timings"
            className="mb-2 block text-sm font-bold text-gray-700"
            title="indicate what time of day the journey will be `AM` or `PM` or an actual time if one off"
          >
            Timings
          </label>
          <input
            type="text"
            id="timings"
            name="timings"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            placeholder="AM or PM or oneoff?"
            value={formState.timings}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full px-2 md:w-1/2">
          <label
            htmlFor="days"
            className="mb-2 block text-sm font-bold text-gray-700"
            title="if a regular run, indicate which days ae required `Mon`,`Tue`...."
          >
            Days
          </label>
          <input
            type="text"
            id="days"
            name="days"
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
            placeholder="days `Mon`, `Tue` ...."
            value={formState.days}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="journeytype"
          className="mb-2 block text-sm font-bold text-gray-700"
        >
          Journey Type
        </label>
        <select
          id="journeytype"
          name="journeytype"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
          value={formState.journeytype}
          onChange={handleSelectChange}
        >
          <option value="">Select journey type</option>
          <option value="REGULAR">Regular</option>
          <option value="SINGLE">Single</option>
          <option value="RETURN">Return</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="expiry"
          className="mb-2 block text-sm font-bold text-gray-700"
          title="indicate when you will be reviewing bids to make a decision"
        >
          Expiry
        </label>
        <input
          type="datetime-local"
          id="expiry"
          name="expiry"
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
          value={format(formState.expiry, "yyyy-MM-dd'T'HH:mm")}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex items-center justify-between">
        {loading && <p>Loading.....</p>}
        {!loading && (
          <button
            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
            disabled={!button}
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};
export default AddContractForm;
