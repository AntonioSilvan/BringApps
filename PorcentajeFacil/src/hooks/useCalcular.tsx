import { useState } from "react"

export const useCalcular = <T extends Object>(initState:T) => {
    const [form, setForm] = useState(initState);

    const onChanges = ( value: string, field: string) => {
        setForm({
            ...form,
            [field]: value
        });
    }

    const limpiar = () => {
        setForm(initState);
    }

    return {
        form,
        onChanges,
        limpiar
    }
}