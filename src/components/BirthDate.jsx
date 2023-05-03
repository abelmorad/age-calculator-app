export default function BirthDate() {
    return (
        <section className="birth-date-container">
            <div className="input-container">
                <label className="label-style">DAY</label>
                <input className="input" type="text" placeholder="DD" />
            </div>
            <div className="input-container">
                <label className="label-style">MONTH</label>
                <input className="input" type="text"  placeholder="MM" />
            </div>
            <div className="input-container">
                <label className="label-style">YEAR</label>
                <input className="input" type="text" placeholder="YYYY" />
            </div>
        </section>
    )
}