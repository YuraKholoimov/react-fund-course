import React from "react"

export const useFetching = (callback) => {

    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState("")

    async function fetching(...args) {

        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}  

