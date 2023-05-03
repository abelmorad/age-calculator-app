export default function BirthDate() {
    return (
        <section className="birth-date-container">
            <div className="input-container">
                <label className="label-style">DAY</label>
                <input className="input" type="text" placeholder="DD" />
                <p className="error-msg">Error</p>
            </div>
            <div className="input-container">
                <label className="label-style">MONTH</label>
                <input className="input" type="text"  placeholder="MM" />
                <p className="error-msg">Error</p>
            </div>
            <div className="input-container">
                <label className="label-style">YEAR</label>
                <input className="input" type="text" placeholder="YYYY" />
                <p className="error-msg">Error</p>
            </div>
        </section>
    )
}