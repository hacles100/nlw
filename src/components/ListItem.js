function ListItem(props){
    return(

          <li>
            <a target="blank"
               rel='noreferrer' 
               href={props.url}
            >
            <img 
              src={props.imgUrl}
              alt={props.alt}
            />
            </a>
          </li>
    )
}

export default ListItem