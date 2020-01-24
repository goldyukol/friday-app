
import React, {ChangeEvent, useState} from 'react';
import '../App.css'


interface IProps {

}

const Modals = (props: IProps) => {

    const [blockIsHidden, setBlockIsHidden] = useState(true);
    let onVisibleBlock = (() => {
        setBlockIsHidden(false)
    });
    let onUnVisibleBlock = (() => {
        setBlockIsHidden(true)
    });


    const [questionBlockIsHidden, setQuestionBlockIsHidden] = useState(true);
    let onVisibleQuestionBlock = (() => {
        setQuestionBlockIsHidden(false)
    });
    let onUnVisibleQuestionBlock = (() => {
        setQuestionBlockIsHidden(true)
    });



    let classForSimpleModal = blockIsHidden===false ? 'styleBlock' : 'styleBlockIsHidden'
let classForVisibleScreen = (blockIsHidden  ===false ||  questionBlockIsHidden ===false) ? 'visibleScreen' : ''


    let classForQuestionModal = questionBlockIsHidden===false ? 'styleQuestionBlock' : 'styleQuestionBlockIsHidden'



    return (

        <div>
          <button onClick={onVisibleBlock}> show simple modal</button>
            <div className={classForVisibleScreen}>  </div>
            <div className={classForSimpleModal}> <span> Simple Modal </span>
            <button onClick={onUnVisibleBlock}>Close</button>
            </div>

            <div>    <button onClick={onVisibleQuestionBlock}> show question modal</button>
                <span > --- </span>
                <div className={classForVisibleScreen}>  </div>
                <div className={classForQuestionModal}> <span> Question Modal </span>
                    <span> <button>Yes </button>  <button>No </button> </span>
                </div>

            </div>


            <div>    <button> show input modal</button> </div>
            <div>    <button> show message modal</button> </div>
            <div>    <button> add success</button>
                <button> add error</button>
            </div>

    </div>
    )

};

export default Modals;