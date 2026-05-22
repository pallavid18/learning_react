const Message_Props =(props) =>{
    return(

        <>
            <h5 className="text-primary">Message : {props.text}</h5> {/* props.text is used to access the value of the text prop passed from the parent component (App.jsx) and display it in the h5 element. The text prop is expected to be a string, and it will be rendered as part of the message displayed on the screen. */}
            <hr/>
        </>

    )
}

export default Message_Props;