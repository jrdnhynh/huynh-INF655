function Greeting() {
    const today = new Date().toLocaleDateString();

    return (
        <div>
            <h1>Hello, Welcome to React!</h1>

            <p style={{ color: "blue", fontSize: "18px" }}>
                Today's Date is: {today}
            </p>
        </div>
    )
}

export default Greeting;