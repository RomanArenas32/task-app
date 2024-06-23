import { Box, Button, Slide, useDisclosure } from "@chakra-ui/react";
import { getAdvinceslip } from "../api/adviceslip";
import { useEffect, useState } from "react";
import { Comments } from "./components";

export const About = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [tip, setTip] = useState<string>("");

  useEffect(() => {
    const fetchTip = async () => {
      try {
        const resp = await getAdvinceslip();
        setTip(resp);
      } catch (error) {
        console.error("Error fetching the advice:", error);
      }
    };
    fetchTip();
  }, []);

  return (
    <div className="about">
      <div className="about_seccion">
        <Button onClick={onToggle}>Legal</Button>
        <article className="about_tip">
          <div className="about_tip-card">
            <h2>Tip of Day:</h2>

            {tip}
          </div>
        </article>
      </div>

      <Comments />
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          Complying with legal requirements on a website is essential to protect
          both users and the owner. This includes a privacy policy that adheres
          to regulations such as GDPR and CCPA, clear terms and conditions,
          consent for cookie use, protection of intellectual property, and web
          accessibility. Additionally, robust security measures should be
          implemented to safeguard user information and limit the owner's
          liability through disclaimers. Meeting these legal obligations avoids
          penalties and fosters trust among users.
        </Box>
      </Slide>
    </div>
  );
};
