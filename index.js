import { SMTPServer } from "smtp-server";

const server = new SMTPServer({
    allowInsecureAuth: true,
   onConnect(session, callback){
    console.log(`Onconnect`, session.id);
    callback(); // accept the connection
   },

   onMailFrom(address, session, callback){
    console.log(`onMailFrom`, address.address, session.id);
    
   },
   onRcptTo(address, session, callback){
    console.log(`onRcptTo`, address.address, session.id);
    callback(); // accept the recipient
   },

   onData(stream, session, callback){
    stream.on("data", (data) => {console.log(`onData ${data.toString()}`);
        stream.on("end", callback)
    })
}
});

server.listen(25, () => {
    console.log("SMTP Server is listening on port 25");
})