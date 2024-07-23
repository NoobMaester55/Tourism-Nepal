import './ParagraphWithHeader.css'

function ParagraphWithHeader({ header, paragraph1, paragraph2 }) {
    return (
        <>

            <div className="paragraphwithHeader_Container">
                <div className="paragraphwithHeader_header">
                    <h1>{header}</h1>
                    <h1>{header}</h1>
                </div>
                <div className="paragraphwithHeader_paragraph">
                    <p>
                        {paragraph1}
                        <br /><br />
                        {paragraph2}
                    </p>
                </div>
            </div>

        </>
    );
}
export default ParagraphWithHeader