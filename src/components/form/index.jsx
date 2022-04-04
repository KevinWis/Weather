import { useState } from "react"
import states from "../../helpers/states.json"
import { Error, Input, Select, Submit, FormContainer } from "./style"

import { useForm } from "react-hook-form"
const Form = ({ getCoordinates }) => {
    const [zipcode, setZipCode] = useState("");

    const { register, handleSubmit, formState: { errors }
    } = useForm({
        defaultValues: {
            address: "",
            city: "",
            state: "",
            zipcode: "",
        }
    });

    const handleSetZipcode = (evt) => {
        const value = evt.target.value;
        value.length > 5 ? setZipCode(value.slice(0, 5)) : setZipCode(value);
    }

    return <FormContainer onSubmit={handleSubmit((data) => {
        getCoordinates(data);
    })}>
        <div>
            <Select {...register("state", { required: "This field is Required" })}>
                <option value="">Select a state</option>
                {
                    states.map((state, index) => {
                        const { abbreviation } = state;
                        return <option key={index} value={abbreviation}>{abbreviation}</option>
                    })
                }
            </Select>
            {errors.state && <Error>{errors.state.message}</Error>}
            <Input type="text" {...register("city", { required: "This field is Required" })} placeholder="City" />
            {errors.city && <Error>{errors.city.message}</Error>}
        </div>

        <div>
            <Input type="number"  {...register("zipcode", {
                required: "This is a required field",
                minLength: { value: 5, message: "Please make sure you filled your 5-digit zip-code correctly" },
                maxLength: { value: 5, message: "Please make sure you have 5 digits in this field" },
            })}
                value={zipcode}
                onChange={handleSetZipcode}
                placeholder="Zip code" />

            {errors.zipcode && <Error>{errors.zipcode.message}</Error>}
            <Input type="text" {...register("address", { required: "This field is Required" })} placeholder="Address" />
            {errors.address && <Error>{errors.address.message}</Error>}
        </div>
        <Submit>Get Forecast</Submit>

    </FormContainer>
}

export default Form;