import React, { useState } from 'react'
import axios from 'axios'
const Airesponse = ({userInputText}) => {

    const [input, setInput] = useState("hey , how are you?")

   // ai response answer
    const [aiResonseAns , setAiResponseAns] = useState("")

    //  const handleSend = async () =>{
    //     const res = await sendMsgToOpenAi(input)
    //     console.log(res)
    //  }
    
    const handleSend = async () => {
        const response = await axios.post(
            "https://api.openai.com/v1/completions",
            {
                prompt: `"read the given text and help me improve my stammering , fluency , english and overall communication skills. I want you to only answer two things , first is what mistakes I did in my text , and words I am repeating often and what better ways I could have said that. note that the text I will give you is spoken by me and not written so try to think in that way. and try to answer in no more than 350 characters. If the given text has only few words then try to suggest related things about given text that user could have also said. so the given text is "${input}"`,

                model: 'text-davinci-003',
                temperature: 0,
                max_tokens: 256,
                // top_p: 1,
                // frequency_penalty: 0,
                // presense_penalty: 0
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${'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'}`,
                },
            }
        );

        setAiResponseAns(response.data.choices[0].text)
       // console.log("the user input text is : " + userInputText)

       // return response.data.choices[0].text;
    };



    return (
        <>
            <div className='speech-to-text-drop-shadow mt-32 lg:w-[30vw] px-5 py-2 '>

                {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}

                <div className='flex items-center justify-between'>
                     
                    <button onClick={handleSend}>Generate AI Response</button>
                    <button onClick={()=>setAiResponseAns("")}>Reset</button>

                </div>


                <p className='text-[#00ba13] font-bold pt-4 px-2 text-justify' >{aiResonseAns}</p>
            </div>

        </>
    )
}

export default Airesponse