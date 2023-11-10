import { Button, TextField } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import { Container, Row, Col, Form } from 'reactstrap';
import '../../assets/css/utils.css';
import { useCustomState, Notification, GC } from '../utils';

const MY_EMAIL = ["tkf@takeoffgg.com"];
const FROM_EMAIL_CONFIRM = "tkfstudios@donotrespond.com"

function Contact(prop) {
  const [notification, setNotification] = useCustomState({value: "", notify: false}); 
  const [form, setForm] = useCustomState({width: "max(calc(20vw + 10px), 330px)"});

  const sendMessage = () => {
    const messageInput = document.getElementsByTagName("textarea")[0];
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageParts = [emailInput, subjectInput, messageInput];

    for (const messagePart of messageParts) {
      if (messagePart.value === "") {
        console.log(`${messagePart.id} is required to send email`)
        setNotification({value: `${messagePart.id} is required to send email`, notify: true});
        return;
      }
    }

    const message = `${messageInput.value}\n`;
    fetch(`https://www.mit-msa.com:8443/mail/contact?name=''&email=${emailInput.value}&subject=${subjectInput.value}&message=${message}&reciepientEmails=${MY_EMAIL}&fromEmailConfirm=${FROM_EMAIL_CONFIRM}`, {
      // mode: 'no-cors',
      method: 'GET'
    })
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
        setNotification({value: "Message sent!", notify: true});
      } else {
        setNotification({value: "Message failed to deliver", notify: true});
      }
    })
  }

  return (
    <Container className="margin-bottom-20px flex column align-start" id="contact" style={{width: "90%"}}>
      <h4 className="" style={{color: prop.color, marginTop: "1rem", marginBottom: "5px", marginLeft: "10px", width: form.width}}>Let's get in touch</h4>
      <Row className="flex column justify-start" style={{marginLeft: "10px", width: form.width}}>
          <TextField variant="standard" label="Email" id="email" sx={{color: prop.color, width: form.width, margin: "0 5px 5px 0", fontSize: "18px"}}/>
          <TextField variant="standard" label="Subject" id="subject" style={{color: prop.color, width: form.width, margin: "0 5px 5px 0", fontSize: "18px"}}/>
      </Row>
      <Row className="flex justify-center" style={{padding: "20px"}}>
        <Textarea
          name="message"
          id="emailMessage"
          placeholder="Type message here…"
          variant="outlined"
          color="neutral"
          minRows={5}
          className="public-sans"
          style={{width: form.width, padding: "15px", border: "1px solid", borderColor: prop.color, fontSize: "14px", borderRadius: "0"}}
        />
      </Row>
      <Button 
        variant="contained" 
        className="public-sans"
        onClick={sendMessage}
        style={{borderRadius: "0", padding: "10px", paddingLeft: "40px", paddingRight: "40px", backgroundColor: GC.BAGE, color: GC.BLACK, marginLeft: "10px"}}
      >
        Send
      </Button>
      <Notification id="signinNotification" notification={notification} setNotification={setNotification} duration={6001}/>
    </Container>
  )
}

export default Contact;