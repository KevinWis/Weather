import states from "../../helpers/states.json"

import { useForm } from "react-hook-form"
const Form = () => {
    const { register, handleSubmit } = useForm();
    return <form onSubmit={handleSubmit((data) => {
        console.log(data)
    })}>
        <div>
            <input type="text" {...register("street")} placeholder="Street" />
            <input type="text" {...register("city")} placeholder="City" />
        </div>

        <div>
            <select {...register("state")}>
                <option value="">Select a state</option>
                {
                    states.map((state, index) => {
                        const { abbreviation } = state;
                        return <option key={index} value={abbreviation}>{abbreviation}</option>
                    })
                }
            </select>
            <input type="text"  {...register("zipcode")} placeholder="Zip code" />
        </div>
        <input type="submit" />
    </form>
}

export default Form;