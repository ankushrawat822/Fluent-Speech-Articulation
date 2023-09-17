import React, { useState, useEffect } from 'react'
import SpeechToText from './SpeechToText'
const Articulation = () => {



    const [nextImg, setNextImg] = useState(0)

    // reseting speech to text and ai response
     const [resetSpeechToText ,setResetSpeechToText] =useState(true)

    // is image load 
    const [isImageLoad, setisImageLoad] = useState(false)
    // images array
    const image = [
        '/images/img1.jpg',
        '/images/img2.jpg',
        '/images/img3.jpg',
        '/images/img4.jpg',
        '/images/img5.jpg',
        '/images/img6.jpg',
        '/images/img7.jpg',
    ]

    // emotions array
    const question = [
        "What's the best piece of advice you ever received?" , 'What is your opinion on social media?' , 'What song currently speaks to you the most?' , 'If you knew the winning lottery numbers, would you keep them to yourself or share with others?' , 'What is one of the great values that guides your life?' , "If you were a vegetable, what vegetable would you be?" , "If you could have any superpower, what would it be and why?", "What's your favorite book?" , "If you could live in a book, TV show, or movie, what would it be?" , "Mountains or ocean?" , "What would you do on a free afternoon in the middle of the week?"
    ]

    const [thinkTimer, setThinkTimer] = useState(40)
    // const [speakTimer, setSpeakTimer] = useState(30)



    const handleImgLoaded = () => {
        // if (thinkTimer >= 1) {
        //     const interval =  setInterval(() => {
        //         setThinkTimer(prev => prev - 1)
        //     }, 1000);

        //     return () => clearInterval(interval);
        // }
        setisImageLoad(true)
        console.log("img load : " + isImageLoad)

    }

    // think timmer
    useEffect(() => {    
           const intervalId = setInterval(() => {
                setThinkTimer(prev => prev - 1);
            }, 1000);

            // Clean up the interval when the component unmounts or when timer2 reaches 0
            return () => {clearInterval(intervalId) 
                console.log("clenup")}
    }, []);




    //    useEffect( () => {
         
    //     if ( thinkTimer === 0 ) {
          
    //         const intervalIdSecond = setInterval(() => {
    //             console.log("not")
    //             setSpeakTimer(prev => prev - 1);
    //         }, 1000);

    //         // Clean up the interval when the component unmounts or when timer2 reaches 0
    //         return () => clearInterval(intervalIdSecond);
    //     }
         
    //    }, [thinkTimer])
       
       
 


    const handleNextImage = () => {
        setNextImg(prev => prev + 1)
        setThinkTimer(40)
        // setSpeakTimer(30)
        // setResetSpeechToText(prev=>!prev)
    
  
    }

  



    return (
        <>
            <div className='flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-evenly gap-9 px-3 mt-8'>
                {/* img container div starts */}
                <div className='flex flex-col text-center items-center justify-center gap-4'>
                    {/* emotion */}
                    <p className='text-[25px] lg:w-[50vw]'>Ques : {question[nextImg]}</p>

                     <p className='font-bold text-[22px]'>or</p>
                    {/* image */}
                    <img className='rounded-[12px] lg:h-[350px]' onLoad={handleImgLoaded} src={image[nextImg]} alt="img" />

                    {/* time section */}
                    <div className='flex flex-col items-center justify-center gap-3'>
                        <p>Think : <span className='font-bold'>{thinkTimer >= 30 ?  thinkTimer - 30 : '0'} sec</span></p>
                        <p>Speak : <span className='font-bold'>{thinkTimer < 30 && thinkTimer > 0 ? thinkTimer : '0' } sec</span></p>
                    </div>

                    {/* btn */}
                    <div className='flex items-center justify-center'>
                        <button onClick={handleNextImage}>Next Image</button>
                    </div>
                </div>
                {/* img container div ends */}


                {/* speech text div starts */}
                <div className=''>
                <SpeechToText  resetSpeechToText={resetSpeechToText}  ></SpeechToText>
                </div>
               
                {/* img container div ends */}
            </div>

        </>
    )
}

export default Articulation