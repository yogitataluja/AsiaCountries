import { Link } from 'react-router-dom';
const CountryItem = ({item,uniquekey }) => {
    const {
        name,
        capital,
        flags,
        region,
        subregion,
        population,
        borders,
        languages,
       } = item;
       
    let myData=[languages]
    let language=[]
    myData.forEach(function(o){
      let k = Object.keys(o);
      for(var i in k)
      language.push(o[k[i]])
  });

    return (
        <div className='card'>
        
      <div className='card-inner'>
        <div className='card-front'>
        <Link to={`/${name.common}`}>
        <div className="img_container" >
        <img src={flags.png} alt='' />
        </div>
        </Link>
         <div className="img_details">
         <h3><strong>{name.common}</strong></h3>
         <p><strong>Capital:</strong> {capital?.join(", ")}</p>
         <p><strong>Sub Region:</strong> {subregion}</p>
         <p><strong>Languages:</strong> {language?.join(", ")}</p>
         </div>
        </div>
        
        <div className='card-back'>
        <Link to={`/${name.common}`}>
          <h1> <strong>{name.common}</strong></h1>
          <ul>
            <li>
              <strong>Capital:</strong> {capital?.join(", ")}
            </li>
            <li>
              <strong>Region:</strong> {region}
            </li>
            <li>
              <strong>Sub Region:</strong> {subregion}
            </li>
            <li>
              <strong>Population:</strong> {population}
            </li>
            <li>
              <strong>Borders:</strong> {borders?.join(", ")}
            </li>
            <li>
              <strong>Languages: {language?.join(", ")}</strong> 
            </li>
          </ul>
          </Link>
        </div>
        
      </div>
     
    </div>
    )
}

export default CountryItem

