import React from "react";

import ScreenForApp from "../components/ScreenForApp";
import Text from "../components/Text";

function ContactScreen(props) {
  return (
    <ScreenForApp mainTitle="Contact">
      <Text>Interested in my work? Feel free to contact me.</Text>
      <Text>My Linkedin Page</Text>
      <Text>Send Me An Email</Text>
    </ScreenForApp>
  );
}

export default ContactScreen;
