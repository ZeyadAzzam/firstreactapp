import CardComp from './card';
import data from './data.json';

function Main() {
  return (
    <>
      <div style={{display:"flex",flexWrap:"wrap", gap:"2rem", margin:"1rem 0 0 1rem"}}> 
        {data.map(function (item) {
          return (

            <CardComp image={item.image_url} title={item.title} />
          );
        })}
      </div>
    </>
  );
}
export default Main;












