import Alert from "react-bootstrap/Alert";

export default function Thanks(props){

    if(props.stage !== "complete"){
        return null;
    }

    return(
        <>
            <p>Thank you ❤️, your application has been received and is being processed.</p>
            <p>Keep a close eye 👀 on your email ✉️ as we will be sending you some important information shortly.</p>
            <p>
                Next steps:
            </p>
            <ul>
                <li>We will check your application.</li>
                <li>Check your email, if you have been accepted we will send you some documents for you to read and sign.</li>
                <li>Once signed, we will make arrangements to transfer your money and set up your payment.</li>
                <li>Sit back and relax.</li>
            </ul>
        </>
    )
}