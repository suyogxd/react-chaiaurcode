import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])

    return data
}

export default useCurrencyInfo;