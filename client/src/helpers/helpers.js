const currency = (languageCode, currency, x) => {
    return new Intl.NumberFormat(languageCode, { style: 'currency', currency: currency }).format(x)
}

const rates = [
    {
        term: 12,
        rate: 2.9
    },
    {
        term: 18,
        rate: 2.7
    },
    {
        term: 24,
        rate: 2.5
    },
    {
        term: 30,
        rate: 2.3
    },
    {
        term: 36,
        rate: 2.1
    },
    {
        term: 42,
        rate: 1.9
    },
    {
        term: 48,
        rate: 1.7
    },
]

const quote = (term) => {
    console.debug(term)
    let rate = 2.9;
    rates.map((r, i) => {
        console.debug(r.term)
        if(parseInt(term) === parseInt(r.term)) {
            console.debug("Match found")
            rate = r.rate;
        }
    });
    return rate;
}

export {currency, quote}