import React from "react"

export const useFetching = (callback) => {

    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState("")

    async function fetching() {

        try {
            setIsLoading(true)
            await callback()
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false)
        }

       
    }

    return [fetching, isLoading, error]
}  