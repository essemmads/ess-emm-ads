/* eslint-disable no-undef */
import { useEffect } from "react";
import emailjs from "emailjs-com";


const EmailJsInitializer = () => {
  useEffect(() => {
    (function () {
      emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID,
      });
    })();
  }, []);

  return null;
};

export default EmailJsInitializer;
