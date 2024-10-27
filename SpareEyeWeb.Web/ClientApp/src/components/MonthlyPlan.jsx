import react from 'react';

const MonthlyPlan = ({image, title, explanation, id }) => {

    return (<>
        <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-200" style={{ height: 225, borderRadius: 15, backgroundColor: id % 2 != 0 ? "rgb(245,245,245)" : "rgb(104, 158, 184)" }}>
                <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-center mb-3">
                    </div>
                    <div style={{ flex: "1 1 auto", overflowY: "auto" }}>
                        <center>

                        <p>
                                <strong>Month #{id} - {title}</strong>
                        </p>
                        <p>
                            {explanation}
                            </p>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default MonthlyPlan;
