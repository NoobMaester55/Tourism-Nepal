import './BlueAndRedText.css'

function BlueAndRedText(Props) {
    return (
        <div className="BlueAndRedTextContainer">
            <div className="BlueAndRedTextContainer-text-box">
                <h1>{Props.Text}</h1>
                <h1>{Props.Text}</h1>
            </div>
        </div>
    );
}

export default BlueAndRedText;