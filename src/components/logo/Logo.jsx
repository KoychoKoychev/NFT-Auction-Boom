export default function Logo({type="default"}){
    return(
        <a href="/">
            <img src={type=="muted"?"/images/logo-muted.svg":"/images/logo.svg"} alt="logo" type={type}/>
        </a>
    );
}