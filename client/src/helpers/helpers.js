const currency = (languageCode, currency, x) => {
    return new Intl.NumberFormat(languageCode, { style: 'currency', currency: currency }).format(x)
}

const percent = (languageCode, x) => {
    return new Intl.NumberFormat(languageCode, { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(x)
}

export {currency, percent}