import './styles.css'

function Welcome() {
    return (
        <div className={"row mt-5 home-image"}>
            <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-4"}/>
            <div className={"col-sm-10 col-md-10 col-lg-6 col-xl-4 text-white align-self-center"}>
                <h1 className={"fw-bold text-center"}>{"Welcome"}</h1>
                <p className={"lead fw-normal text-center"}>And an even wittier subheading to boot. Jumpstart your marketing efforts with this example
                    based on Apple’s marketing pages.</p>
            </div>
            <div className={"col-sm-1 col-md-1 col-lg-2 col-xl-4"}/>
        </div>
    )
}

export default  Welcome
