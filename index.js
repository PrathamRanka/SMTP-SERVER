import { SMTPServer } from "smtp-server";

const server = new SMTPServer({
   

})

server.listen(25, () => {
    console.log("SMTP Server is listening on port 25");
})