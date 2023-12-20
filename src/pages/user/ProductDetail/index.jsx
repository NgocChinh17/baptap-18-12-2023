import { useLocation, useParams } from "react-router-dom"

function ProductDetailPage() {
  const { pathname } = useLocation()
  const params = useParams()

  return <div>Product Detail Page - {params.id}</div>
}

export default ProductDetailPage
