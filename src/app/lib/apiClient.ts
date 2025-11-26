export const getData = async (query: string) => {
    try {
        const res = await fetch(process.env.CMS_URL || 'https://wp.heliorix.ai/graphql', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: query }),
            next: { revalidate: 10 }, // ✅ works!
        });

        const json = await res.json()
        return json
    } catch (error) {
        console.log(error)
       return null
    }
}

export const getDataForBuild = async (query: string) => {
    try {
        const res = await fetch(process.env.CMS_URL || 'https://wp.heliorix.ai/graphql', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: query }),
            cache:"no-store" // ✅ works!
        });

        const json = await res.json()
        return json
    } catch (error) {
        console.log(error)
       return null
    }
}