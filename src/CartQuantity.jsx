import { useCart } from "./CartStore";
import { useEffect, useState } from "react";

export default function CartQuantity(props) {

    const [tempQuantity, setTempQuantity] = useState(props.item.quantity);

    useEffect(()=>{
        setTempQuantity(props.item.quantity)
    }, [props.item.quantity])

    return <>
        <input type="text" value={tempQuantity} style={{ maxWidth: "35px" }}
            onChange={(e) => {

                // set state is async
                console.log("e.target.value =", e.target.value)
                setTempQuantity(e.target.value);

                if (!isNaN(e.target.value)) {
                    props.onUpdateValue(e.target.value);
                } else {
                    props.onUpdateValue(0)
                }
            }}
           />

    </>
}