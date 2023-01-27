import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/esm/Alert";
import { useEffect, useMemo, useState } from "react"
import axios from "axios";
import { currency, percent } from "../../helpers/helpers";

export default function Quote(props) {
    const [quote, setQuote] = useState({
        amount: props.loan.quote.amount,
        term: props.loan.quote.term,
        apr: props.loan.quote.apr
    });
    
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get(`/api/rate?amount=${quote.amount}&term=${quote.term}`).then(res => {      
            setQuote(existingValues => ({
            ...existingValues,
            apr: res.data.rate
          }));
         
          props.onQuote(quote);
          
        }).catch(err => {
            setShow(true);
        });

        
    }, [quote.amount, quote.term, quote.apr]);
    
    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuote(existingValues => ({
          ...existingValues,
          [name]: value
        }));
    }

    const getPayment = () => {
        const a = quote.amount;
        const n = quote.term;
        const r = quote.apr;
        
        const mr = r/12;
        const p = a * (mr/(1-Math.pow(1+mr, -n)));
        return p.toFixed(2);
    }

    const monthlyPayment = useMemo(() => {
        return getPayment();
    }, [quote]);

    const totalCostOfCredit = useMemo(() => {
        return (quote.term * getPayment()) - quote.amount;
    }, [quote]);

    if(props.loan.stage !== "quote") {
        return null;
    }

    const QuoteError = () => {
        if (show) {
            return (
              <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <p>
                  It looks like you found an error.  Refresh this page and try again, if this error persists please give us a call.
                </p>
              </Alert>
            );
          }
    }

    return(
        <div>
            <QuoteError/>
            <p className="text-center">Complete this form to get a quote for loans ranging from £100 to £15,000.</p>
            <Form.Label htmlFor="amount">Loan Amount</Form.Label>
            <Form.Range name="amount" id="amount" min="100" max="15000" step="100" value={quote.amount} onInput={onChange} />
            <Form.Label htmlFor="term">Loan Term</Form.Label>
            <Form.Range name="term" id="term" min="12" max="48" step="6" value={quote.term} onInput={onChange} />
            <dl>
                <dt>Loan Amount</dt>
                <dd>{currency("en-GB", "GBP", quote.amount)}</dd>
                <dt>Term (Months)</dt>
                <dd>{quote.term}</dd>
                <dt>APR *</dt>
                <dd>{percent("en-GB", quote.apr)}</dd>
                <dt>Monthly payments *</dt>
                <dd>{currency("en-GB", "GBP", monthlyPayment)}</dd>
                <dt>Total cost of credit *</dt>
                <dd>{currency("en-GB", "GBP", totalCostOfCredit)}</dd>
            </dl>
            <div className="d-grid gap-2">
                <Button size="lg" onClick={() => {props.onApply();}}>Apply now</Button>
            </div>
            <p><small className="text-muted">* For illustration purposes only, terms and conditions apply, subject to acceptance.</small></p>   
      </div>
    );
}