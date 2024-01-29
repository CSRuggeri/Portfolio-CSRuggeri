// import Style from './primaryButton.module.css'

 const  PrimaryButton = function({ text, type, onClick, style}) {

  
    return (
    <button  onClick={onClick} style={style} type={type}>
      {text}
    </button>
  )}
  
  export default PrimaryButton