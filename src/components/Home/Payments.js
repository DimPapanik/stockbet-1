import paypal from '../../resources/payment/paypal.png'
import visa from '../../resources/payment/visa.png'
import maestro from '../../resources/payment/maestro.png'

const Payments = () =>
{
    return(
        <div className="payments">
            <div className="payments-text">
                <h1>Εύκολες Πληρωμές </h1>
                <p>Αποδεχόμαστε πληρωμές με τις πιό έμπιστες μεθόδους και συνεργαζόμαστε με τις περισσότερες τοπ εταιρίες online πληρωμών</p>
            </div>

            <div className="payments-logos">
                <div className="payments-logo-img">
                    <img src={paypal} alt="paypal" />
                </div>
                <div className="payments-logo-img">
                    <img src={visa} alt="visa" />
                </div>
                <div className="payments-logo-img">
                    <img src={maestro} alt="maestro" />
                </div>
            </div>
        </div>
    )
}

export default Payments