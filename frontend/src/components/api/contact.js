import { GC, get } from "../utils";

export function sendMessage(email, subject, message, setNotification) {
    const url = `${GC.DOMAIN.CONTACT}/mail/contact`;

    const body = {
        name: "",
        email: email,
        subject: subject,
        message: message, 
        fromPassword: "",
        fromEmailConfirm: GC.CONTACT.EMAIL,
        reciepientEmails: [GC.CONTACT.EMAIL],
    }
    get(url, body, res => {
        console.log(res)
        if (res.status === 200) {
            setNotification({value: "Message sent", notify: true})
        } else {
            setNotification({value: "Falied to send message", notify: true});
        }
    })
}