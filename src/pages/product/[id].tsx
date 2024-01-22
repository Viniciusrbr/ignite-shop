import { useRouter } from "next/router"

function Product() {
    const { query } = useRouter()

    return (
        <div>product</div>
    )
}

export default Product