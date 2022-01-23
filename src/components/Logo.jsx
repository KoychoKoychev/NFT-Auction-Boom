export default function Logo(props){
    return(
        <img src={props.type=="muted"?"/images/logo-muted.svg":"/images/logo.svg"} alt="logo" type={props.type}/>
    );
}