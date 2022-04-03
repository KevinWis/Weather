import { useState, useRef, useEffect } from "react"
import states from "../../helpers/states.json"


import { useForm } from "react-hook-form"
const Form = () => {
    const [zipcode, setZipCode] = useState("");

    const { register, handleSubmit, formState: { errors }
    } = useForm({
        defaultValues: {
            street: "",
            city: "",
            state: "",
            zipcode: "",
        }
    });

    const handleSetZipcode = (evt) => {
        const value = evt.target.value;
        value.length > 5 ? setZipCode(value.slice(0, 5)) : setZipCode(value);
    }

    return <form onSubmit={handleSubmit((data) => {
        console.log(data)
    })}>
        <div>
            <input type="text" {...register("street", { required: "This field is Required" })} placeholder="Street" />
            {errors.street && <p>{errors.street.message}</p>}
            <input type="text" {...register("city", { required: "This field is Required" })} placeholder="City" />
            {errors.city && <p>{errors.city.message}</p>}
        </div>

        <div>
            <select {...register("state", { required: "This field is Required" })}>
                <option value="">Select a state</option>
                {
                    states.map((state, index) => {
                        const { abbreviation } = state;
                        return <option key={index} value={abbreviation}>{abbreviation}</option>
                    })
                }
            </select>
            {errors.state && <p>{errors.state.message}</p>}

            <input type="number"  {...register("zipcode", {
                required: "This is a required field",
                minLength: { value: 5, message: "Please make sure you filled your 5-digit zip-code correctly" },
                maxLength: { value: 5, message: "Please make sure you have 5 digits in this field" },
            })}
                value={zipcode}
                onChange={handleSetZipcode}
                placeholder="Zip code" />

            {errors.zipcode && <p>{errors.zipcode.message}</p>}
        </div>
        <input type="submit" />

    </form>
}

export default Form;