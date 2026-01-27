import PageHeader from "../../component/pageheader/PageHeader"

const Comparison = () => {
    return(
        <div className="comparison">
            <PageHeader
        title="Product Comparison"
        breadcrumb={[
          { label: "Home", path: "/" },
          { label: "Comparison", path: "/comparison" },
        ]}
        />
        </div>
    )
}
export default Comparison