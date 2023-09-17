import React , {useEffect, useState} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import  'regenerator-runtime/runtime'
import Airesponse from './Airesponse';
const SpeechToText = ({resetSpeechToText }) => {

  // user audio to text
   const [userInputText , setUserInputText] = useState("")


   useEffect(() => {
    setUserInputText("")
    console.log("testing")
   }, [resetSpeechToText])
   

   const startListening = () =>  SpeechRecognition.startListening({ continuous: true , language : 'en-IN' })
  //  const stopListning = SpeechRecognition.stopListening()
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        console.log("no mic")
        return <span>Browser doesn't support speech recognition.</span>;
      }
  return (
    <>
      
      <div className='speech-to-text-drop-shadow mt-3 lg:w-[30vw] px-5 py-2 '>

      <p>Microphone: {listening ? 'on' : 'off'}</p>

        <div className='flex items-center justify-between'>
        <button onClick={startListening}>Start</button>
        <button onClick={()=>{SpeechRecognition.stopListening(); setUserInputText(transcript)}}>Stop</button>
        <button onClick={()=>{resetTranscript()}}>Reset</button>
        </div>
       
       
        <p className='text-[#e33636c8] font-bold pt-4 px-2 text-justify' >{transcript}</p>
      </div>

       {/* ai response */}
       <div className='mb-10'>
          <Airesponse userInputText={userInputText}></Airesponse>
       </div>
    </>
  )
}

export default SpeechToText