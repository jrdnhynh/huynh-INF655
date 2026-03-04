function Greeting({ name }) { // accepts name as a prop
    const today = new Date().toLocaleDateString();

    return (
        <div>
            <h1>Hello, {name}! Welcome to React!</h1>

            <p style={{ color: "blue", fontSize: "18px" }}>
                Today's Date is: {today}
            </p>
        </div>
    )
}

export default Greeting;