import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [count, setCount] = useState(0);
  const [isTranscript, setIsTranscript] = useState(false);

  //   useEffect(() => {
  //     console.log(transcript);
  //     HandleSpeech();
  //   }, [isTranscript]);

  //   const HandleSpeech = () => {
  //     console.log(transcript);
  //     if (transcript !== "") {
  //       setIsTranscript(isTranscript);
  //       return SpeechRecognition.startListening();
  //     } else {
  //       setIsTranscript(!isTranscript);
  //       return SpeechRecognition.stopListening();
  //     }
  //   };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       if (transcript === "okej") {
  //         setCount(count + 1);
  //       } else {
  //         return resetTranscript();
  //       }
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       console.log("This will run every second!");
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div>
      <button onClick={SpeechRecognition.startListening({ language: "sv" })}>
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      {/* <p>{transcript}</p> */}
      <p>{count}</p>
    </div>
  );
};
export default Dictaphone;
