export default function BirthDate() {
    return (
        <section className="birth-date-container">
            <div className="input-style">
                <label>DAY</label>
                <input className="day-input" type="text" placeholder="DD" />
            </div>
            <div className="input-style">
                <label>MONTH</label>
                <input className="month-input" type="text" placeholder="MM" />
            </div>
            <div className="input-style">
                <label>YEAR</label>
                <input className="year-input" type="text" placeholder="YYYY" />
            </div>
        </section>
    )
}